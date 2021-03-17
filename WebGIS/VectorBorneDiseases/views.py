from django.shortcuts import render
from WebGIS import settings

# Create your views here.

def index(request):
    
    api_key = settings.GOOGLE_MAPS_API_KEY
    
    return render(request, 'index.html', {'api_key': api_key})
