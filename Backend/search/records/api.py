from rest_framework import viewsets
from .models import RecordModel
from .serializers import RecordModelSerializer

class RecordModelViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = RecordModel.objects.all()
    serializer_class = RecordModelSerializer
