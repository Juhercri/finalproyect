from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('djoser/', include('djoser.urls')),
    path('djoser/auth/', include('djoser.urls.jwt')),
    path('store/', include('store.urls')),
]
