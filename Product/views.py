from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from Product.models import Product
from backend.ProductSerializers import ProductModelSerializer


class GetProductAll(APIView):
    def get(self,request):
        query=Product.objects.all()
        serializers=ProductModelSerializer(query,many=True)
        return Response(serializers.data,status=status.HTTP_200_OK)


class GetProductById(APIView):
    def get(self,request,id):
        query=Product.objects.get(id=id)
        serializers=ProductModelSerializer(query)
        return Response(serializers.data,status=status.HTTP_200_OK)