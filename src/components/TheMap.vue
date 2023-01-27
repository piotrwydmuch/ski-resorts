

<script setup lang="ts">
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import { onMounted, ref, nextTick, getCurrentInstance } from "vue";
import MapCard from "../components/MapCard.vue"
import "leaflet/dist/leaflet.css";
import "leaflet"
import type { Resort } from "../types";
import type { Ref } from 'vue'
import { useMapStore } from "../stores/MapStore" 

const mapStore = useMapStore();
const map: Ref<unknown> = ref(null)
const zoom: Ref<number> = ref(8); 
const resorts: Ref<Array<Resort>> = ref([]);
const center = ref([50.60, 16.90]);

const moveTo = () => { // example how to handle LeafletObject
  // @ts-expect-error
  mapStore.mapGlobalObject.leafletObject.flyTo(center.value);
}

onMounted(() => {
  resorts.value = mapStore.resorts;
  nextTick(() => { // @ts-expect-error
    mapStore.mapGlobalObject = map.value;
  })
})

</script>

<template>
  <div style="height:100vh; width:100%">
    <button @click="moveTo()">Click me</button>
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
