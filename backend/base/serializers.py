from rest_framework.serializers import ModelSerializer, SerializerMethodField
from djstripe.models import Product, Plan


class PlanSerializer(ModelSerializer):
    class Meta:
        model = Plan
        fields = '__all__'


class ProductSerializer(ModelSerializer):
    plans = SerializerMethodField(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'

    def get_plans(self, obj):
        reviews = obj.plan_set.all()
        serializer = PlanSerializer(reviews, many=True)
        return serializer.data
