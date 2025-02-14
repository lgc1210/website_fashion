from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from utils.hasPermission import hasPermission
from utils.mongo_context import mongo_connection
from utils.serialize_mongo_doc import serialize_mongo_doc

@api_view(['POST'])
def create(request): 
    return

@api_view(['PUT'])
def update(request): 
    return

@api_view(['DELETE'])
def delete(request): 
    return

@api_view(['GET'])
def get_by_id(request): 
    return

@api_view(['GET'])
def get_all(request):
    try:
        # Check permissions of the user
        user_role = request.auth.get('role')
        isPermit = hasPermission('view_users', user_role)

        if not isPermit:
            return Response(
                {'message': "You don't have permission to do this."},
                status=status.HTTP_403_FORBIDDEN
            )

        with mongo_connection() as db_instance:
            # Get all users from MongoDB
            users = list(db_instance.db.users.find())  # Convert cursor to list
            if not users:
                return Response(
                    {'message': "Users not found"},
                    status=status.HTTP_404_NOT_FOUND
                )
            
            users = [serialize_mongo_doc(user) for user in users]

            return Response(users, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(
            {
                'message': 'Error occurs while getting all users',
                'errors': str(e)
            },
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
