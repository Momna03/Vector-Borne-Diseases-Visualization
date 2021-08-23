let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {
      lat: 34.74127955, lng: 71.70121836
    },
    mapTypeId: "terrain",
  });
  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  
  script.src = '/static/data/Dengue_AirTemperature.js';
  
  //script.src =
   // "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  
  document.getElementsByTagName("head")[0].appendChild(script);
  
  map.data.setStyle((feature) => {
    //const magnitude = feature.getProperty('mag');
    const magnitude = 7;
    
    return {
      icon: getCircle(magnitude),
    };
  });
}

function getCircle(magnitude) {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "red",
    fillOpacity: 0.2,
    scale: Math.pow(2, magnitude) / 2,
    strokeColor: "white",
    strokeWeight: 0.5,
  };
}

function eqfeed_callback(results) {
  map.data.addGeoJson(results);
}