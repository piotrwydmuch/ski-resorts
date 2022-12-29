

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
import type { Ref } from 'vue'
import "leaflet/dist/leaflet.css";
import "leaflet"
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import MapCard from "../components/MapCard.vue"
import data from "./../data/data.json"

interface Resort {
  name: String,
  address: String,
  coords: number[],
}

const map: Ref<unknown> = ref(null)
const mapObj = ref(null);
const zoom: Ref<number> = ref(8); 
const resorts: Ref<Array<Resort>> = ref([]);

onMounted(() => {
  resorts.value = data.resorts;
  nextTick(() => {
    // @ts-expect-error
    mapObj.value = map.value.leafletObject; // FIX ME !!!
    console.log(mapObj)
  })
})

</script>

<template>
  <div style="height:600px; width:800px">
  <l-map 
    ref="map"
    v-model:zoom="zoom"
    :center="[50.60, 16.90]"
    :minZoom="5"
    :maxZoom="18"
    :zoomAnimation="true"
    :useGlobalLeaflet="true"
  >
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    ></l-tile-layer>
    <l-marker v-for="pin in resorts" :lat-lng="pin.coords" >
      <l-popup>
        <MapCard :name="pin.name" :address="pin.address" />
      </l-popup>
    </l-marker>
  </l-map>
</div>
</template>

<style scoped>
</style>
