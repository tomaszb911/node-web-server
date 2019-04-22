// app.vue
<template>
    <div style="height: 100%">
  <v-map :zoom=13 :center="[47.413220, -1.219482]">
    <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
    <v-marker :lat-lng="[47.413220, -1.219482]"></v-marker>
  </v-map>
</div>
</template>

<script>
import * as Vue2Leaflet from 'vue2-leaflet';
import Vue from 'vue';
// import  L from 'leaflet';
// new Vue({
//   el: 'map',
//   components: {
//     'v-map': Vue2Leaflet.LMap,
//         'v-tilelayer' :Vue2Leaflet.LTileLayer,
//         'v-marker': Vue2Leaflet.LMarker,
//     L },
//   data() {
//     return {
//       zoom:13,
//       center: L.latLng(47.413220, -1.219482),
//       url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
//       attribution :'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//       marker: L.latLng(47.413220, -1.219482),
//     }
//   }
// });

export default {
  name: 'leafletMap',
    components: {
      
    'v-map': Vue2Leaflet.LMap,
        'v-tilelayer' :Vue2Leaflet.LTileLayer,
        'v-marker': Vue2Leaflet.LMarker
    },
  props: {
    msg: String
  },
//    
}
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
