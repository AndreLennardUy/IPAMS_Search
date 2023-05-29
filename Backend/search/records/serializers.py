from rest_framework import serializers
from rest_framework import viewsets
from .models import RecordModel


class RecordModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecordModel
        fields = '__all__'


class RecordModelViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = RecordModel.objects.all()
    serializer_class = RecordModelSerializer