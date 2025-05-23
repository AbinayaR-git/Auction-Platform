from django.shortcuts import render
from django.contrib.auth.models import User
from .models import Note
from .serializer import NoteSerializer,UserRegistrationSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.response import Response

from .models import UserForm
from .serializer import UserFormSerializer
from django.contrib.auth.hashers import make_password



from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        # If authentication failed, return the original response (it includes error)
        if response.status_code != 200:
            return Response({'success': False, 'message': 'Invalid credentials'}, status=401)

        tokens = response.data
        access_token = tokens['access']
        refresh_token = tokens['refresh']

        res = Response({'success': True})
        res.set_cookie(
            key='access_token',
            value=str(access_token),
            httponly=True,
            secure=True,
            samesite='None',
            path='/'
        )
        res.set_cookie(
            key='refresh_token',
            value=str(refresh_token),
            httponly=True,
            secure=True,
            samesite='None',
            path='/'
        )
        return res

class CustomRefreshTokenView(TokenRefreshView):
                   def post(self, request, *args, **kwargs):
                           try:
                             refresh_token = request.COOKIES.get('access_token')
                             request.data['refresh']= refresh_token
                             response =super().post(request, *args, **kwargs)  
                             tokens=response.data  
                             access_token=tokens['access']
                             res=Response()
                             res.data={'refreshed':True}
                             res.set_cookie(
                                     key='access_token',
                                     value=access_token,
                                     httponly=True,
                                     secure=True,
                                     samesite='None',
                                     path='/'
                             )
                           except:
                                   return Response({'refreshed':False})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    try:
        res = Response()
        res.data = {'success':True}
        res.delete_cookie('access_token', path='/', samesite='None')
        res.delete_cookie('refresh_token', path='/', samesite='None')
        return res
    except Exception as e:
        print(e)
        return Response({'success':False})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def is_authenticated(request):
    return Response({'authenticated':True})


@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

        user_form_data = {
            'username': serializer.validated_data['username'],
            'email': serializer.validated_data['email'],
            'password': make_password(serializer.validated_data['password'])
        }

        form_serializer = UserFormSerializer(data=user_form_data)
        if form_serializer.is_valid():
            form_serializer.save()

        return Response(serializer.data)
    return Response(serializer.errors)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_notes(request):
    user=request.user
    notes=Note.objects.filter(owner=user)
    serializer=NoteSerializer(notes,many=True)
    return Response(serializer.data)



