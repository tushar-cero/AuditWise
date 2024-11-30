from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status, generics
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny

# importing models and serializers
from django.contrib.auth.models import User
from .models import TransactionModel
from .serializers import UserSerializer, TransactionSerializer

# ----- User Views

class CreateUserView(generics.CreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [AllowAny]

class GetUsersView(APIView):
  def get(self, request):
    queryset = User.objects.all()
    serializer_class = UserSerializer(queryset, many=True)
    return Response(serializer_class.data)
  
# ----- Transaction Views

class TransactionListCreate(generics.ListCreateAPIView):
  queryset = TransactionSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    user = self.request.user
    return TransactionModel.objects.filter(user=user)
  
  def perform_create(self, serializer):
    if serializer.is_valid():
      serializer.save(user=self.request.user)
    else:
      print(serializer.errors)

class TransactionDelete(generics.DestroyAPIView):
  serializer_class = TransactionSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    user = self.request.user
    return TransactionModel.objects.filter(user=user)
