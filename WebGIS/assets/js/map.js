let map;
          
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: 29.896834065213277, lng: 69.28821484890064 },
    mapTypeId: "terrain",
  });

  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);

}

function eqfeed_callback(results) {
  const heatmapData = [];

  for (let i = 0; i < results.features.length; i++) {
    const coords = results.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    heatmapData.push(latLng);
  }
  const heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    dissipating: false,
    map: map,
  });
//}

/* Data points defined as a mixture of WeightedLocation and LatLng objects */
/*
var heatMapData = [
  {location: new google.maps.LatLng(29.896834065213277, 69.28821484890064), weight: 5.5},
  new google.maps.LatLng(33.81473512717431, 65.28919143367165),
  
  {location: new google.maps.LatLng(38.90726075899635, 61.817511765505856), weight: 2},
  
  {location: new google.maps.LatLng(57.782, -122.441), weight: 3},
  
  {location: new google.maps.LatLng(67.782, -122.439), weight: 2},
  new google.maps.LatLng(37.782, -122.437),
  
  {location: new google.maps.LatLng(97.782, -122.435), weight: 0.5},

];
*/

//var sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);

/*map = new google.maps.Map(document.getElementById('map'), {
  center: sanFrancisco,
  zoom: 3,
  mapTypeId: 'terrain',
});
*/
//var heatmap = new google.maps.visualization.HeatmapLayer({
 // data: heatMapData
//});
//heatmap.setMap(map);
}
