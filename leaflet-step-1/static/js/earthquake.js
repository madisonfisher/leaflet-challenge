var myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 5
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(url).then(function(data) {
    // Once we get a response, send the data.features object to the createFeatures function
    createFeatures(data.features);
  });
  
  function createFeatures(data) {
      console.log(data);
      data.forEach(data => {
        var coords = "[" + data.geometry.coordinates[0] + "," + data.geometry.coordinates[1] + "]";
        console.log(coords);
        var depth = data.geometry.coordinates[2];
        console.log(depth);
        var mag = data.properties.mag;
        console.log(mag);
      });
      
    };