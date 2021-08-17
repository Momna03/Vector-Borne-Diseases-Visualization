let map;
let citymap = {};
let tehsils = {};
let latitude;
let longitude;

function initMap() {
  q = window.location.search;
 
  if(q != '') {
    //document.getElementById('queryData').value = q;
    q1 = q.split('&');
    document.getElementById('queryData').innerHTML = q1[0];

    const script = document.createElement("script");
    script.src = '/static/data/CurrentWeather.js';
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  else {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 29.93492403925886, lng: 69.59583203468748},
        mapTypeId: 'roadmap',
    });
  }
}
 
  function eqfeed_callback(results) {
    var key = 1
    var latitude, longitude;
    for (let i = 0; i < results.features.length; i++) {
      latitude = results.features[i].lat;
      longitude = results.features[i].lon;
      
    }
    
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: latitude, lng: longitude},
      mapTypeId: 'roadmap',
    });
    
    for (let i = 0; i < results.features.length; i++) {
      latitude = results.features[i].lat;
      longitude = results.features[i].lon;

      //latLng = new google.maps.LatLng(latitude, longitude);
      //latitude = lat;
      //longitude = lng;

      tehsils[key] = {"lat": latitude, "lng": longitude};
      
      createCircle(tehsils[key], map);
      key++;
    }
  }

  function createCircle(city, map) {
    var _radius = 10000 * 3;
    var rMin = _radius* 2 /5;
    var rMax = _radius;
    var direction = 1;
    var circleOption = {
      center: city,
      fillColor: "red",
      fillOpacity: 0.6,
      map: map,
      radius: 10000 *3,
      strokeColor: "red",
      strokeOpacity: 0.4,
      strokeWeight: 1
    };
    var circle = new google.maps.Circle(circleOption);
  
    var circleTimer = setInterval(function() {
      var radius = circle.getRadius();
  
      if ((radius > rMax) || (radius < rMin)) {
        direction *= -1;
      }
      var _par = (radius / _radius) - 0.7;
  
      circleOption.radius = radius + direction * 10;
      circleOption.fillOpacity = 0.6 * _par;
  
      circle.setOptions(circleOption);
    }, 1);
  }
