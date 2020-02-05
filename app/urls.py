from django.urls import path
from app import views

urlpatterns = [
    path('', views.index, name='index'),
    path('en/', views.en, name="en"),
    path('ge/', views.ge, name="ge"),
]