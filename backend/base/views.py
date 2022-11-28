from djstripe.models import Product
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import ProductSerializer
import json
import stripe
import djstripe
from django.conf import settings

# Create your views here.


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_customer_and_subscription(request):
    request_body = json.loads(request.body.decode('utf-8'))
    email = request_body['email']
    assert request.user.email == email
    payment_method = request_body['payment_method']
    plan_id = request_body['plan_id']
    stripe.api_key = settings.STRIPE_TEST_SECRET_KEY

    # first sync payment method to local DB to workaround
    # https://github.com/dj-stripe/dj-stripe/issues/1125
    payment_method_obj = stripe.PaymentMethod.retrieve(payment_method)
    djstripe.models.PaymentMethod.sync_from_stripe_data(payment_method_obj)

    # create customer objects
    # This creates a new Customer in stripe and attaches the default PaymentMethod in one API call.
    customer = stripe.Customer.create(
        payment_method=payment_method,
        email=email,
        invoice_settings={
            'default_payment_method': payment_method,
        },
    )
    djstripe_customer = djstripe.models.Customer.sync_from_stripe_data(
        customer)

    # create subscription
    subscription = stripe.Subscription.create(
        customer=customer.id,
        items=[
            {
                'plan': plan_id,
            },
        ],
        expand=['latest_invoice.payment_intent'],
    )
    djstripe_subscription = djstripe.models.Subscription.sync_from_stripe_data(
        subscription)

    # associate customer and subscription with the user
    request.user.customer = djstripe_customer
    request.user.subscription = djstripe_subscription
    request.user.save()

    # return information back to the front end
    data = {
        'customer': customer,
        'subscription': subscription
    }
    return Response(data)
