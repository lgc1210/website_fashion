from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    old_price = models.FloatField()
    price = models.FloatField()
    quantity = models.IntegerField()
    images = models.BinaryField()
    category = models.ForeignKey(Category, on_delete = models.CASCADE)

    def __init__(self, name, description, old_price, price, quantity, images, category):
        self.name = name
        self.description = description
        self.old_price = old_price
        self.price = price
        self.quantity = quantity
        self.images = images
        self.category = category

    def __str__(self):
        return self.name
