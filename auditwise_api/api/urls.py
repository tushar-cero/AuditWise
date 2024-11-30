from django.urls import path
from .views import TransactionListCreate, TransactionDelete

urlpatterns = [
  path('transactions/', TransactionListCreate.as_view(), name="Transaction List"),
  path('transactions/delete/<int:pk>/', TransactionDelete.as_view(), name="Transaction Delete")
]