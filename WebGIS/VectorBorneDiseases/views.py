from django.shortcuts import render, redirect
from WebGIS import settings
from VectorBorneDiseases.forms import DiseaseForm
from django.contrib import messages
import pandas as pd
import requests, json

api_key = settings.GOOGLE_MAPS_API_KEY

def dashboard1(request):
    
    emptyCurrentWeatherFile()
    
    form = DiseaseForm()
    msg = ''
    query = ''
    return render(request, 'dashboard1.html',  {'msg': msg, 'form': form, 'query':query, 'api_key': api_key})

def dashboard2(request):

    emptyCurrentWeatherFile()
    
    form = DiseaseForm()
    msg = ''
    query = ''
    return render(request, 'dashboard2.html',  {'msg': msg, 'form': form, 'query':query, 'api_key': api_key})

def dashboard3(request):
    
    emptyCurrentWeatherFile()

    form = DiseaseForm()
    msg = ''
    query = ''
    return render(request, 'dashboard3.html',  {'msg': msg, 'form': form, 'query':query, 'api_key': api_key})

def dashboard4(request):
    
    emptyCurrentWeatherFile()
    
    form = DiseaseForm()
    msg = ''
    query = ''
    return render(request, 'dashboard4.html',  {'msg': msg, 'form': form, 'query':query, 'api_key': api_key})

def emptyCurrentWeatherFile():
    # Emptying the json file from previous Search 
    with open("static/data/CurrentWeather.js", "w") as outfile:
        outfile.write("")

def getWeatherData(lat, lon):
    # Get current 1 hour Weather Data from OpenWeatherMap API

    # Link to search on Google Chrome
    # https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=090182a86220575e9ece188b6fb04243


    # Enter your API key here
    #api_key = "99e38fa26ae0f8ce1c1cbc5e9db198c8"
    api_key ="090182a86220575e9ece188b6fb04243"
    # base_url variable to store url
    base_url = "https://api.openweathermap.org/data/2.5/onecall?"
    #lat=31.4167
    #lon=73.0833
    complete_url = base_url + "lat=" + str(lat) + "&lon=" + str(lon) + "&exclude=hourly,daily" + "&appid=" + api_key

    response = requests.get(complete_url)

    try:
        x = response.json()
        
        # Python program to write JSON to a file
        # Data to be written
        # Serializing json
        json_object = json.dumps(x, indent = 4)

        # Writing to sample.json
        with open("static/data/CurrentWeather.js", "a") as outfile:
            outfile.write(json_object)

    except:
        print("Weather Not Found!")


def searchCoordinates(tehsils, msg, city):
    
    # Pakistan Tehsils Dataset
    df = pd.read_csv('static/data/PakistanTehsils_LatLng.csv')
    i = 0
    flag = True

    for i in range(len(df['District'])):
        dst = df['District'][i]
        teh = df['Tehsil'][i]
        dst_split = dst.split(" ")
        teh_split = teh.split(" ")

        if (dst_split[0] == city):
            tehsilName = df['Tehsil'][i]
            lat = df['Lattitude'][i]
            lng = df['Longitude'][i]
            tehsils[tehsilName] = [lat]
            tehsils[tehsilName].append(lng) 
            flag = False
            print(tehsilName)
            print(lat, lng)
            
        elif (teh_split[0] == city):
            
            tehsilName = df['Tehsil'][i]
            lat = df['Lattitude'][i]
            lng = df['Longitude'][i]
            tehsils[ tehsilName ] = [lat]
            tehsils[ tehsilName ].append(lng)
            flag = False
            print(tehsilName)
            print(lat, lng)
            
        elif (i == len(df['District']) - 1 and flag == True):
            msg = 'Wrong Input!'
    
    counter = 0
    print("KEys Length: ", len(tehsils.keys()))
    for key in tehsils:
        
        latitude = tehsils[key][0]
        longitude = tehsils[key][1]
        
        if(counter == 0):
            # Writing to sample.json
            with open("static/data/CurrentWeather.js", "a") as outfile:
                outfile.write('eqfeed_callback( { "type":"FeatureCollection", "features":[')

            
        getWeatherData(latitude, longitude)
        if (counter <= len(tehsils.keys()) ):
            with open("static/data/CurrentWeather.js", "a") as outfile:
                outfile.write(',')
        
        counter += 1
    
    with open("static/data/CurrentWeather.js", "a") as outfile:
                outfile.write(']});')
    
    return (tehsils, msg, city)


def getDataFromURL(query_dict, query, city, disease, temperature, rainfall, 
                    humidity, precipitation, tehsils, msg):
    for key in query_dict:
        print(key)
        print(query_dict[key])
        if key == 'city':
            city = query_dict[key]
        elif key == 'disease':
            disease = query_dict[key]
        else:
            if key == 'temperature':
                temperature = query_dict[key]
            elif key == 'rainfall':
                rainfall = query_dict[key]
            elif key == 'humidity':
                humidity = query_dict[key]
            elif key == 'precipitation':
                precipitation = query_dict[key]
    
    emptyCurrentWeatherFile()

    tehsils, msg, city = searchCoordinates(tehsils, msg, city)
        
    return  (query_dict, query, city, disease, temperature, rainfall, humidity, precipitation, 
    tehsils, msg)

def search_dashboard1(request):
    form = DiseaseForm()
    query_dict = request.GET
    query = ''
    city = ''
    disease = ''
    temperature = False
    rainfall = False
    humidity = False
    precipitation = False
    tehsils = dict()
    msg = ''

    getDataFromURL(query_dict, query, city, disease, temperature, 
                rainfall, humidity, precipitation, tehsils, msg)
        
    return render(request, 'dashboard1.html', {'form': form, 
                                                'city': city, 
                                                'msg': msg, 
                                                'tehsils': tehsils, 
                                                'disease': disease,
                                                'query': query, 
                                                'api_key': api_key})

def search_dashboard2(request):
    form = DiseaseForm()
    query_dict = request.GET
    query = ''
    city = ''
    disease = ''
    temperature = False
    rainfall = False
    humidity = False
    precipitation = False
    tehsils = dict()
    msg = ''

    getDataFromURL(query_dict, query, city, disease, temperature, 
                rainfall, humidity, precipitation, tehsils, msg)
        
    return render(request, 'dashboard2.html', {'form': form, 
                                                'city': city, 
                                                'msg': msg, 
                                                'tehsils': tehsils, 
                                                'disease': disease,
                                                'query': query, 
                                                'api_key': api_key})


def search_dashboard3(request):
    form = DiseaseForm()
    query_dict = request.GET
    query = ''
    city = ''
    disease = ''
    temperature = False
    rainfall = False
    humidity = False
    precipitation = False
    tehsils = dict()
    msg = ''

    getDataFromURL(query_dict, query, city, disease, temperature, 
                rainfall, humidity, precipitation, tehsils, msg)
        
    return render(request, 'dashboard3.html', {'form': form, 
                                                'city': city, 
                                                'msg': msg, 
                                                'tehsils': tehsils, 
                                                'disease': disease,
                                                'query': query, 
                                                'api_key': api_key})

def search_dashboard4(request):
    form = DiseaseForm()
    query_dict = request.GET
    query = ''
    city = ''
    disease = ''
    temperature = False
    rainfall = False
    humidity = False
    precipitation = False
    tehsils = dict()
    msg = ''

    getDataFromURL(query_dict, query, city, disease, temperature, 
                rainfall, humidity, precipitation, tehsils, msg)
        
    return render(request, 'dashboard4.html', {'form': form, 
                                                'city': city, 
                                                'msg': msg, 
                                                'tehsils': tehsils, 
                                                'disease': disease,
                                                'query': query, 
                                                'api_key': api_key})
