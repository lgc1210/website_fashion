#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from config.mongodb import Database
from config.seeddata import seed_roles, seed_users

def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')
    try:
        from django.core.management import execute_from_command_line
        
        # Initialize database
        db_instance = Database()
        
        # Clear existing data
        collections = ['users', 'categories', 'products', 'roles', 'orders']
        for collection in collections:
            db_instance.db[collection].delete_many({})
            
        # Seed data
        seed_roles(db_instance.db.roles)    
        seed_users(db_instance.db.users, db_instance.db.roles)
        
        print('Database seed successfully')
            
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc 
    finally:
        db_instance.close_connection()
    
    execute_from_command_line(sys.argv)
    
    

if __name__ == '__main__':
    main()
