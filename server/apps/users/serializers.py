from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from apps.users import models
from utils.mongo_context import mongo_connection

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = "__all__"
        exclude = ['password']
        extra_kwargs = {'password': {'write_only': True}} # write-only (won't be returned in API responses)

    def create(self, validated_data):
        with mongo_connection() as db_instance:
            # Hash password before saving
            validated_data['password'] = make_password(validated_data['password'])
            
            # Save user to MongoDB
            user = {
                'fullname': validated_data['fullname'],
                'phone': validated_data['phone'],
                'email': validated_data['email'],
                'password': validated_data['password'],
                'address': [],
                'cart': None
            }
            
            # Insert user intoMongoDB
            db_instance.db.users.insert_one(user)
            
            userInstace = models.User(user)
            
            return userInstace
        
    def validate(self, data):
        with mongo_connection() as db_instance:
            if db_instance.db.users.find_one({'email': data['email']}):
                raise serializers.ValidationError({'email': 'This email is already in use'})
        
            if db_instance.db.users.find_one({'phone': data['phone']}):
                raise serializers.ValidationError({'phone': 'This phone number is already in use'})
            
            if len(data['password']) < 6:
                raise serializers.ValidationError({'password': 'Password must be at least 6 characters long'})
            
            return data