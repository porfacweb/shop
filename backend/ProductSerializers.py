from rest_framework import serializers

from Product.models import Product


class ProductSerializers(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    ProductName=serializers.CharField(max_length=30)
    ProductPrice=serializers.DecimalField(max_digits=13,decimal_places=2)
    ProductImage=serializers.ImageField()
    ProductDiscription=serializers.CharField(max_length=30)
    ProductDiscount=serializers.DecimalField(max_digits=13,decimal_places=2)
class ProductModelSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'