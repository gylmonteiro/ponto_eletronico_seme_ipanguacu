from django.contrib import admin
from django.urls import path, include
from ponto.views import entrada

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', entrada),
]
