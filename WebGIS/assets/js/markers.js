let map;
let marker;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: new google.maps.LatLng(2.8, -187.3),
    mapTypeId: "terrain",
  });
  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src = "/static/data/earthquake_GeoJSONP.js";
  //script.src =
  //  "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
const eqfeed_callback = function (results) {
  //for (let i = 0; i < results.features.length; i++) {
    //const coords = results.features[i].geometry.coordinates;
    const latLng = [];
    
    latLng[0] = new google.maps.LatLng(30.227064122255097, 67.60457735453296);
    latLng[1] = new google.maps.LatLng(36.3914674753601, 103.99129592800043);
    latLng[2] = new google.maps.LatLng(-30.669779875035914, 24.186608775526352);
    latLng[3] = new google.maps.LatLng(60.47833554478936, -112.33926052347402);
    latLng[4] = new google.maps.LatLng(29.80156194804762, -171.5775414213156);
    latLng[5] = new google.maps.LatLng(-24.887435646718675, 134.80917743147376);
    latLng[6] = new google.maps.LatLng(-8.277817580084385, -56.440822948357415);
    latLng[7] = new google.maps.LatLng(-5.660815625980038, 146.58652121965264);

    for (var i=0; i<2;i++) {
      marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: latLng[i],
        map: map,
        icon: {
          path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
          strokeColor: "#42ed62",
          fillColor: "#42ed62",
          fillOpacity: 1,
          scale: 4,
        },
      });
    }
    for (var i=2; i<5;i++) {
      marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: latLng[i],
        map: map,
        icon: {
          path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
          strokeColor: "orange",
          fillColor: "orange",
          fillOpacity: 1,
          scale: 4,
          
      },
      });
    }
    for (var i=5; i<8;i++) {
      marker = new google.maps.Marker({
        animation: google.maps.Animation.BOUNCE,
        position: latLng[i],
        map: map,
        icon: {
          path: "M -2,-2 2,2 M 2,-2 -2,2",
          strokeColor: "red",
          fillColor: "red",
          fillOpacity: 1,
          scale: 6,
        },
      });
    }    
};
