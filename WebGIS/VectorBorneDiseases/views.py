from django.shortcuts import render
from WebGIS import settings

# Create your views here.

api_key = settings.GOOGLE_MAPS_API_KEY
def dashboard1(request):

    return render(request, 'dashboard1.html', {'api_key': api_key})

def dashboard2(request):
    
    return render(request, 'dashboard2.html', {'api_key': api_key})

def dashboard3(request):

    return render(request, 'dashboard3.html', {'api_key': api_key})

def dashboard4(request):

    return render(request, 'dashboard4.html',  {'api_key': api_key})