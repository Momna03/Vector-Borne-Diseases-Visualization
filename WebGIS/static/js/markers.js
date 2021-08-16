$(document).ready(function () {
    // Get search query from url
    q = window.location.search;
    
    if(q != '') {
        q1 = q.split('&');
        document.getElementById('queryData').innerHTML = q1[0];
        console.log(q1[0]);
        console.log("Length:", q.length);
    }
    else {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: {lat: 29.93492403925886, lng: 69.59583203468748},
            //center: { lat: latitude, lng: longitude },
            //disableDefaultUI: true,
            mapTypeId: 'hybrid',
        });
    }
    // Access Current Weather Data File
    const script = document.createElement("script");
    script.src = '/static/data/CurrentWeather.js';
    document.getElementsByTagName("head")[0].appendChild(script);

CustomMarker.prototype = new google.maps.OverlayView();
CustomMarker.prototype.draw = function() {
    var self = this;
    var div = this.div;
    if (!div) {
        div = this.div = $('' +
            '<div>' +
            '<div class="shadow"></div>' +
            '<div class="pulse"></div>' +
            '<div class="pin-wrap">' +
            '<img class="pin" src="/static/images/marker3.png" alt="Marker">' +
            /*'<div class="pin"></div>' +
*/
            '</div>' +
            '</div>' +
            '')[0];
        this.pinWrap = this.div.getElementsByClassName('pin-wrap');
        this.pin = this.div.getElementsByClassName('pin');
        this.pinShadow = this.div.getElementsByClassName('shadow');
        div.style.position = 'absolute';
        div.style.cursor = 'pointer';
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
        google.maps.event.addDomListener(div, "click", function(event) {
            google.maps.event.trigger(self, "click", event);
        });
    }
    var point = this.getProjection().fromLatLngToDivPixel(this.position);
    if (point) {
        div.style.left = point.x + 'px';
        div.style.top = point.y + 'px';
    }
};
});
const eqfeed_callback = function (results) {
//$(function() {
    for (let i = 0; i < results.features.length; i++) {
        const lat = results.features[i].lat;
        const lng = results.features[i].lon;

        latLng = new google.maps.LatLng(lat, lng);
        console.log(latLng);
        latitude = lat
        longitude = lng
      }
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: latLng, 
        //center: { lat: latitude, lng: longitude },
        //disableDefaultUI: true,
        mapTypeId: 'satellite',
    });
    
    for (let i = 0; i < results.features.length; i++) {
        const lat = results.features[i].lat;
        const lng = results.features[i].lon;
    
        const latLng = new google.maps.LatLng(lat, lng);
        
        latitude = lat
        longitude = lng

        //var marker = 
        new CustomMarker({
            position: latLng,
            map: map,
        });
    }
}
    /*var pos = new google.maps.LatLng(31.3565, 73.015);
    
    var marker = new CustomMarker({
        position: pos,
        map: map,
    });*/
//});

//});

function CustomMarker(opts) {
    this.setValues(opts);
}
