let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: -33.865427, lng: 151.196123 },
    mapTypeId: "terrain",
  });
 
  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src ='/static/data/earthquake_GeoJSONP.js';
  //script.src =
  //  "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);
  
  map.data.setStyle((feature) => {
    const magnitude = feature.getProperty("mag");
   
    return {
      icon: getCircle(magnitude),
    };
   
  });
}

function getCircle(magnitude) {

  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "#ff0000",
    fillOpacity: 0.2,
    scale: Math.pow(2, magnitude) / 2,
    strokeColor: "red",
    strokeWeight: 0.5,
  };
}

function eqfeed_callback(results) {
  map.data.addGeoJson(results);
}


/*const countrymap = {
  pakistan: {
    center: { lat: 29.730594695523024, lng: 68.72179606823127 },
    magnitude: 2714856,
  },
  greece: {
    center: { lat: 39.541822829661335, lng: 22.315546175915376 },
    magnitude: 8405837,
  },
  russia: {
    center: { lat: 62.37233099746786, lng: 93.85851452748429 },
    magnitude: 3857799,
  },
  southAfrica: {
    center: { lat: -30.913927840194223, lng: 24.073358398115893 },
    magnitude: 603502,
  },
};

function initMap() {
  // Create the map.
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: -33.865427, lng: 151.196123 },
    mapTypeId: "terrain",
  });

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (const country in countrymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      //scale: Math.pow(2, countrymap[country].magnitude) / 2,
      center: countrymap[country].center,
      radius: Math.sqrt(countrymap[country].magnitude) * 100,
    });
  }
}*/