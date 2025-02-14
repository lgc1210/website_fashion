from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from .serializers import RegisterSerializer, LoginSerializer
from bson import ObjectId

@api_view(["POST"])
@permission_classes([AllowAny])
def login(request):
    try:
        serializer = LoginSerializer(data = request.data)
        if serializer.is_valid():
            print('Generated Token: ', serializer.tokens)
            return Response(
                {
                    'message': 'Login successfully',
                    'refresh': serializer.tokens['refresh'],
                    'access': serializer.tokens['access'],
                },
                status = status.HTTP_200_OK
            )
        else: 
            return Response(
                {
                    'message': 'Invalid data',
                    'errors': serializer.errors
                },
                status = status.HTTP_400_BAD_REQUEST
            )    
    except Exception as e:
        return Response(
            {
                'message': "Interal Server Error",
                'errors': str(e)
            },
            status = status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(["POST"])
@permission_classes([AllowAny])
def register(request):
    try:         
        serializer = RegisterSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {
                    'message': 'User registered successfully', 
                },
                status = status.HTTP_201_CREATED)
        
        else: 
            return Response(
                {
                    'message': 'Invalid data', 
                    'errors': serializer.errors
                },
                status = status.HTTP_400_BAD_REQUEST)
            
    except Exception as e:
        return Response(
            {
                'message': 'Internal server error',
                'errors': str(e)
            }, status = status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(["POST"])
@permission_classes([AllowAny])
def logout(request):
    try:
        # Get access token from header
        auth_header = request.headers.get('Authorization', '')
        if not auth_header.startswith('Bearer '):
            return Response(
                {'message': 'Invalid token format'},
                status=status.HTTP_401_UNAUTHORIZED
            )
            
        # Get refresh token from body 
        refresh_token = request.data.get('refresh_token')
        if not refresh_token:
            return Response(
                {'message': 'Refresh token is required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Add token into blacklist MongoDB
        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
        except TokenError:
            return Response(
                {'message': 'Invalid refresh token'},
                status=status.HTTP_401_UNAUTHORIZED
            )
            
        return Response(
            {'message': 'Logout successful'},
            status=status.HTTP_200_OK
        )
    except Exception as e:
        return Response(
            {'message': 'Internal server error', 'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
        
@api_view(["POST"])
def refresh(request):
    return