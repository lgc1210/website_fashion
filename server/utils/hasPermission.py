from utils.mongo_context import mongo_connection

def hasPermission(permission_name, role_name):
    # Fetch user role and permissions from database
    with mongo_connection() as db_instance: 
        role = db_instance.db.roles.find_one({'name': role_name})
        return permission_name in role.get('permissions', [])