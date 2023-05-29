from django.db import models

class RecordModel(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=255)
    abstract = models.TextField()
    psed_classification_id = models.IntegerField(max_length=11)
    for_commercialization = models.IntegerField(max_length=1)
    date_uploaded = models.DateTimeField()
