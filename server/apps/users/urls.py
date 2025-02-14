from django.urls import path
from apps.users import views

urlpatterns = [
    path('create', views.create, name = "create"),
    path('update', views.update, name = "update"),
    path('delete', views.delete, name = "delete"),
    path('get', views.get_all, name = "get_all"),
    path('get/<int:id>', views.get_by_id, name = "get_by_id"),

]
