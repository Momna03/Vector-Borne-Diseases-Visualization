from django.urls import path
from . import views

urlpatterns = [
    path('dashboard/1/', views.dashboard1, name='dashboard1'),
    path('dashboard/2/', views.dashboard2, name='dashboard2'),
    path('dashboard/3/', views.dashboard3, name='dashboard3'),
    path('dashboard/4/', views.dashboard4, name='dashboard4'),
    path('dashboard/1/search', views.search_dashboard1, name='search'),
    path('dashboard/2/search', views.search_dashboard2, name='search'),
    path('dashboard/3/search', views.search_dashboard3, name='search'),
    path('dashboard/4/search', views.search_dashboard4, name='search'),
]