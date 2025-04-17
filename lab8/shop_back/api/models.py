from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=64)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category_id = models.IntegerField()

class Category(models.Model):
    name = models.CharField(max_length=64)