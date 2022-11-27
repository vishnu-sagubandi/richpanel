from djstripe.models import Product
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import ProductSerializer

# Create your views here.


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
