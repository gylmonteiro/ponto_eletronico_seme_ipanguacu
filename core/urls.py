from django.contrib import admin
from django.urls import path, include

from ponto.views import livre, entrada


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', livre),
    path('entrada', entrada, name='entrada')
]
