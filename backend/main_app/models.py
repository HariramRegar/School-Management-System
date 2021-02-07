from django.db import models
from datetime import datetime
# from djongo import models

class User(models.Model):
    # _id = models.ObjectIdField()
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    email = models.EmailField(max_length = 254) 
    contact_number = models.CharField(max_length=15, blank=True)
    username = models.CharField(max_length=50, blank=True)
    password = models.CharField(max_length=200, blank=True)
    user_type = models.CharField(max_length=50, blank=True)
    is_approved = models.BooleanField(default = False, blank=True)
    created_at = models.DateField(datetime.now())
    modified_at = models.DateField(datetime.now())
    # objects = models.DjongoManager()
