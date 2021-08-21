from django.urls import path

from Product import views

urlpatterns=[
    path('GetProductAll',views.GetProductAll.as_view())
]