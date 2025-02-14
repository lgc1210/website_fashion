from django.contrib.auth.hashers import make_password
from datetime import datetime, timedelta

def seed_roles(roles):
    default_roles = [
        {
            "name": "customer",
            "permissions": ["view_products", "place_orders"],
            "created_at": datetime.utcnow()
        },
        {
            "name": "admin",
            "permissions": ["view_users", "view_products", "place_orders", "manage_products", "manage_users"],
            "created_at": datetime.utcnow()
        }
    ]
    roles.insert_many(default_roles)

def seed_users(users, roles): 
    customer_role_id = roles.find_one({"name": "customer"})['_id']
    admin_role_id = roles.find_one({"name": "admin"})['_id']
    
    default_users = [
        {
            "fullname": "Gia Cuong",
            "phone": "0948800917",
            "email": "gcuong@gmail.com",
            "password": str(make_password("111111")),
            "address": [],
            "cart": None,
            "role": admin_role_id,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "fullname": "Vy Nhung",
            "phone": "0372352186",
            "email": "vnhung@gmail.com",
            "password": str(make_password("111111")),
            "address": [],
            "cart": None,
            "role": customer_role_id,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]
    users.insert_many(default_users)