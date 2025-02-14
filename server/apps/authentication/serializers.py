from rest_framework import serializers
from django.contrib.auth.hashers import make_password, check_password
from apps.users import models
from rest_framework_simplejwt.tokens import RefreshToken
from utils.mongo_context import mongo_connection
from django.contrib.auth import get_user_model

class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, min_length=6)
    
    class Meta:
        model = models.User
        fields = ['email', 'password']
        extra_kwargs = {'password': {'write_only': True}} # write-only (won't be returned in API responses)
        
    def validate(self, data):    
        with mongo_connection() as db_instance:   
            user = db_instance.db.users.find_one({'email': data['email']})
            if not user:
                raise serializers.ValidationError({'message': 'Email does not exist'})
            if not check_password(data['password'], user['password']):
                raise serializers.ValidationError({'message': 'Password is incorrect'})
            
            # Django User for create SimpleJWT
            User = get_user_model()
            django_user, created = User.objects.get_or_create(
                username = data['email'],
                defaults = {
                    'email': data['email'],
                    'is_active': True
                }
            )

            if 'role' in user:
                role = db_instance.db.roles.find_one({'_id': user['role']})
                user['role'] = {
                    '_id': str(role['_id']),
                    'name': role['name']
                }
            
            # Generate token using Django User
            refresh = RefreshToken.for_user(django_user)
            
            # Add custom claims
            refresh["_id"] = str(user["_id"])
            refresh["email"] = user["email"]
            refresh["fullname"] = user["fullname"]
            refresh["phone"] = user["phone"]
            refresh["address"] = user["address"]
            refresh["cart"] = user["cart"]
            refresh["created_at"] = user["created_at"].isoformat()
            refresh["updated_at"] = user["updated_at"].isoformat()
            refresh["role"] = user["role"]["name"] if "role" in user else None
            
            self.tokens = {
                'refresh': str(refresh),
                'access': str(refresh.access_token)
            }
            
            return data
    
class RegisterSerializer(serializers.ModelSerializer):
    fullname = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, min_length=6)
    phone = serializers.CharField(required=True)
    
    class Meta:
        model = models.User
        fields = ['fullname', 'email', 'password', 'phone']
        extra_kwargs = {'password': {'write_only': True}}
        
    def validate(self, data): 
        with mongo_connection() as db_instance:       
            if db_instance.db.users.find_one({'email': data['email']}):
                raise serializers.ValidationError({'message': 'This email is already in use'})
        
            if db_instance.db.users.find_one({'phone': data['phone']}):
                raise serializers.ValidationError({'message': 'This phone number is already in use'})
            
            if len(data['password']) < 6:
                raise serializers.ValidationError({'message': 'Password must be at least 6 characters long'})
            
            return data
        
            
    def create(self, validated_data):      
        try:
            with mongo_connection() as db_instance:  
                # Hash password before saving
                validated_data['password'] = make_password(validated_data['password'])
                
                # Find customer_role_id
                customer_role_id = db_instance.db.roles.find_one({"name": "customer"})['_id']
                
                # Save user to MongoDB
                user = {
                    'fullname': validated_data['fullname'],
                    'phone': validated_data['phone'],
                    'email': validated_data['email'],
                    'password': validated_data['password'],
                    'address': [],
                    'cart': None,
                    'role': customer_role_id
                }
                
                # Insert user into MongoDB
                db_instance.db.users.insert_one(user)
                
                use_instance = models.User(user)
                
                return use_instance
        except Exception as e:
            raise serializers.ValidationError({'message': f'Register failed {(str(e))}'})
        
    