from django.urls import path
from .views import getProducts

app_name = 'base'

urlpatterns = [
    path('list/', getProducts, name='products'),
]
