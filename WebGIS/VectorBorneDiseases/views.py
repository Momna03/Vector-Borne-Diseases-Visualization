from django.shortcuts import render
from WebGIS import settings

# Create your views here.

def dashboard1(request):
    
    api_key = settings.GOOGLE_MAPS_API_KEY
    
    return render(request, 'dashboard1.html', {'api_key': api_key})

def dashboard2(request):
    
    api_key = settings.GOOGLE_MAPS_API_KEY
    
    return render(request, 'dashboard2.html', {'api_key': api_key})

def dashboard3(request):
    
    api_key = settings.GOOGLE_MAPS_API_KEY
    
    return render(request, 'dashboard3.html', {'api_key': api_key})
