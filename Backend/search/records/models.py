from django.db import models

class RecordModel(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=255)
    abstract = models.TextField()
    psed_classification_id = models.IntegerField(max_length=11)
    for_commercialization = models.IntegerField(max_length=1)
    date_uploaded = models.DateTimeField()

class PSCEDClassification(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
