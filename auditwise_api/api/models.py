from django.db import models
from django.contrib.auth.models import User

class TransactionModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="transactions")
    purpose = models.CharField(max_length=1024)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)

    TRANSACTION_TYPE_CHOICES = [
        ('CREDIT', 'Credit'),
        ('DEBIT', 'Debit')
    ]
    transaction_type = models.CharField(
        max_length=10, choices=TRANSACTION_TYPE_CHOICES, default='DEBIT'
    )

    tag = models.CharField(max_length=50, null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.purpose