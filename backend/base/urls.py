from django.urls import path
from .views import getProducts, create_customer_and_subscription

app_name = 'base'

urlpatterns = [
    path('list/', getProducts, name='subscriptions'),
    path('create_subscription/', create_customer_and_subscription,
         name='create_subscription'),
]
