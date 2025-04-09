from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    city = models.CharField(max_length=64)
    address = models.TextField()

class Vacancy(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
