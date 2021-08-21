from django.contrib import admin

# Register your models here.
from Product import models

admin.site.register(models.Product)
