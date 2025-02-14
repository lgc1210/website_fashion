from django.db import models
from apps.products.models import Product
from apps.roles.models import Role
from django.contrib.auth.models import AbstractBaseUser

class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    total = models.DecimalField(max_digits=10, decimal_places=2)

class Address(models.Model):
    address = models.CharField(max_length=255)

class User(AbstractBaseUser, models.Model):
    fullname = models.CharField(max_length=255)
    email = models.EmailField(unique=True, max_length=255)
    password = models.CharField(max_length=255)
    phone = models.CharField(unique=True, max_length=15)

    role = models.ManyToManyField(Role, blank=False)
    addresses = models.ManyToManyField(Address, blank=True, default=[])
    cart = models.OneToOneField(CartItem, on_delete=models.CASCADE, null=True, blank=True)