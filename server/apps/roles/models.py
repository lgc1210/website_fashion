from django.db import models

class Role(models.Model):
    name = models.CharField(max_length=255)
    permissions = models.JSONField(default=list)