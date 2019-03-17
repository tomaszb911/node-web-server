// app.vue
<template>
  <div id="app">
    <div id="map"></div>
  </div>
</template>

<script>
import L from "leaflet";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      var coolPlaces = new L.LayerGroup();

      L.marker([51.60127866491234, 5.335532247876811])
        .bindPopup("JTS")
        .addTo(coolPlaces);
      L.marker([51.60133993313941, 5.335471914203235])
        .bindPopup("TRUF")
        .addTo(coolPlaces);

      var pubLatLng = L.latLng(51.75723, -1.260269);

      var ttMap = L.tileLayer(
        "https://{s}.api.tomtom.com/map/1/tile/basic/main/{z}/{x}/{y}.png?key=EhMQIGSI8EE41do0KNiXKGaPjegSIg6V"
      );
      var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
        thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';

      var osmUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        osmAttrib = "&copy; " + osmLink + " Contributors",
        landUrl = "http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png",
        thunAttrib = "&copy; " + osmLink + " Contributors &" + thunLink;
      var osmMap = L.tileLayer(osmUrl, {
        attribution: osmAttrib
      });

      var myMap = L.map("map", {
        center: [52.38377, 4.75459],
        zoom: 18,
        layers: [osmMap, ttMap]
      });

      var baseLayers = {
        "General View": osmMap,
        "TT base map": ttMap
      };
      var overlays = {
        "Places visited": coolPlaces
      };
      var pubMarker = L.marker(pubLatLng)
        .bindPopup("hey");

      (pubMarker).addTo(myMap);
      L.control.layers(baseLayers, overlays).addTo(myMap);
    }
  }
};
</script>



<style>
#app,
#mymap {
  position: relative;
  padding: 0;
  width: 600px;
  height: 600px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
