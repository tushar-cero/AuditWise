from django.urls import path
from .views import TransactionListView, TransactionCreateView, TransactionDelete

urlpatterns = [
  path('transactions/', TransactionListView.as_view(), name="Transaction List"),
  path('transactions/create/', TransactionCreateView.as_view(), name="Transaction Create"),
  path('transactions/delete/<int:pk>/', TransactionDelete.as_view(), name="Transaction Delete")
]
