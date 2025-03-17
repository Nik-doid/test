from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import AccessToken
from .models import CustomUser
from .serializers import UserSerializer
import asyncio

class SignupView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = [AllowAny]
    serializer_class = UserSerializer

    async def create(self, request, *args, **kwargs):
        # Create user (handling asynchronously)
        data = request.data
        user_serializer = self.get_serializer(data=data)
        if user_serializer.is_valid():
            user = await asyncio.to_thread(user_serializer.save)

            # Generate JWT Token for the user
            token = AccessToken.for_user(user)
            
            # Return token in the response
            return Response({
                "token": str(token),
                "message": "User created successfully"
            }, status=201)
        
        return Response(user_serializer.errors, status=400)
