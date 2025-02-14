from django.db import models
from apps.categories import models as CategoryModel

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    old_price = models.FloatField()
    price = models.FloatField()
    quantity = models.IntegerField()
    images = models.BinaryField()
    category = models.ForeignKey(CategoryModel.Category, on_delete = models.CASCADE)