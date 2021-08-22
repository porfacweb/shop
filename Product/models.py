from django.db import models

# Create your models here.



class Product(models.Model):
    ProductName=models.CharField(max_length=30)
    ProductPrice=models.DecimalField(max_digits=13,decimal_places=2)
    ProductImage=models.ImageField(db_column='ProductImage', blank=True)
    ProductDiscription=models.CharField(max_length=30)
    ProductDiscount=models.DecimalField(max_digits=13,decimal_places=2)
    ProductRating=models.IntegerField(default=0)


    def __str__(self):
        return self.ProductName
