let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: -33.865427, lng: 151.196123 },
    mapTypeId: "terrain",
  });
  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src = '/static/data/states_copy.json';
  //script.src =
    //"https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
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
    dissipating: false,    //  Size of heatmap change to remain in its area, as we zoom the map.
    map: map,
  });
}


// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
/*let map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: 37.775, lng: -122.434 },
    mapTypeId: "terrain",
    
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
    dissipating: false,
  });
  
    
  const gradient = [
    
    "rgba(0, 255, 50, 0)",
    "rgba(0, 255, 102, 1)",
    
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 174, 255, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",

  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
  //heatmap.set("radius", heatmap.get("radius") ? null : 10);
  
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeOpacity() {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

function getPoints() {
  
    return [
      new google.maps.LatLng(30.751266, -12.403355),
      new google.maps.LatLng(30.751267, -12.403356),
      new google.maps.LatLng(30.751268, -12.403357),
      new google.maps.LatLng(30.751269, -12.403358),
      new google.maps.LatLng(30.751270, -12.403359),
      new google.maps.LatLng(30.751271, -12.403360),
      new google.maps.LatLng(30.751272, -12.403361),
      new google.maps.LatLng(30.751273, -12.403362),
      new google.maps.LatLng(30.751274, -12.403363),


      new google.maps.LatLng(10.751266, -119.403355),
      new google.maps.LatLng(10.751267, -119.403356),
      new google.maps.LatLng(10.751268, -119.403357),
      new google.maps.LatLng(10.751269, -119.403358),
      new google.maps.LatLng(10.751270, -119.403359),
      new google.maps.LatLng(10.751271, -119.403360),
      new google.maps.LatLng(10.751272, -119.403361),
      new google.maps.LatLng(10.751273, -119.403362),
      new google.maps.LatLng(10.751274, -119.403363),
      new google.maps.LatLng(10.751275, -119.403364),
      new google.maps.LatLng(10.751276, -119.403365),
      new google.maps.LatLng(10.751277, -119.403366),
      new google.maps.LatLng(10.751278, -119.403367),
      new google.maps.LatLng(10.751279, -119.403368),
      new google.maps.LatLng(10.751280, -119.403369),
      new google.maps.LatLng(10.751281, -119.403370),
      new google.maps.LatLng(10.751282, -119.403371),
      new google.maps.LatLng(10.751283, -119.403372),

      
      new google.maps.LatLng(37.751266, -122.403355),
      new google.maps.LatLng(37.751267, -122.403356),
      new google.maps.LatLng(37.751268, -122.403357),
      new google.maps.LatLng(37.751269, -122.403358),
      new google.maps.LatLng(37.751270, -122.403359),
      new google.maps.LatLng(37.751271, -122.403360),
      new google.maps.LatLng(37.751272, -122.403361),
      new google.maps.LatLng(37.751273, -122.403362),
      new google.maps.LatLng(37.751274, -122.403363),
      new google.maps.LatLng(37.751275, -122.403364),
      new google.maps.LatLng(37.751276, -122.403365),
      new google.maps.LatLng(37.751277, -122.403366),
      new google.maps.LatLng(37.751278, -122.403367),
      new google.maps.LatLng(37.751279, -122.403368),
      new google.maps.LatLng(37.751280, -122.403369),
      new google.maps.LatLng(37.751281, -122.403370),
      new google.maps.LatLng(37.751282, -122.403371),
      new google.maps.LatLng(37.751283, -122.403372),
      new google.maps.LatLng(37.751284, -122.403373),
      new google.maps.LatLng(37.751285, -122.403374),
      new google.maps.LatLng(37.751286, -122.403375),
      new google.maps.LatLng(37.751287, -122.403376),
      new google.maps.LatLng(37.751288, -122.403377),
      new google.maps.LatLng(37.751289, -122.403378),
      new google.maps.LatLng(37.751290, -122.403379),
      new google.maps.LatLng(37.751291, -122.403380),
      new google.maps.LatLng(37.751292, -122.403381),

  ];
}*/
