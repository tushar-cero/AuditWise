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

class TransactionListView(generics.ListAPIView):
  permission_classes = [IsAuthenticated]
  serializer_class = TransactionSerializer

  def get_queryset(self):
    user = self.request.user
    return TransactionModel.objects.filter(user=user)

class TransactionCreateView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = TransactionSerializer

    def create(self, request, *args, **kwargs):
        text = request.data.get('text', None)

        if not text:
            return Response({"error": "No text provided"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # expecting data in the format: "purpose amount tag"
            data = text.split(' ')

            transaction_data = {
                'user': request.user.pk,
                'purpose': data[0],
                'amount': data[1],
                'tag': data[2]
            }

            serializer = self.get_serializer(data=transaction_data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

        except (ValueError, AttributeError) as e: # Catch parsing or data errors
            return Response({"error": f"Invalid input format. Could not parse: {e}"}, status=status.HTTP_400_BAD_REQUEST)

class TransactionDelete(generics.DestroyAPIView):
  serializer_class = TransactionSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    user = self.request.user
    return TransactionModel.objects.filter(user=user)
