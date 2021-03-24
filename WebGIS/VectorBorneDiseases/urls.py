from django.urls import path
from . import views

urlpatterns = [
    path('dashboard/1/', views.dashboard1, name='dashboard1'),
    path('dashboard/2/', views.dashboard2, name='dashboard2'),
    path('dashboard/3/', views.dashboard3, name='dashboard3'),
    path('dashboard/4/', views.dashboard4, name='dashboard4'),
]