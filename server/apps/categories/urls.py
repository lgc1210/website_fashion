from django.urls import path
from apps.categories.views import *

urlpatterns = [
    path('create', create),
    path('update', update),
    path('delete_one/<int:id>', deleteOne),
    path('delete_many', deleteMany)
]
