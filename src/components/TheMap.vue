<script setup lang="ts">
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LLayerGroup,
} from "@vue-leaflet/vue-leaflet";
import { onMounted, ref, nextTick, getCurrentInstance } from "vue";
import MapCard from "../components/MapCard.vue";
import "leaflet/dist/leaflet.css";
import "leaflet";
import type { Resort } from "../types";
import { Ref, watch } from "vue";
import { useMapStore } from "../stores/MapStore";

const mapStore = useMapStore();
const map: Ref<unknown> = ref(null);
const zoom: Ref<number> = ref(8);
const resorts: Ref<Array<Resort>> = ref([]);
const center = ref([50.6, 16.9]);
const markersLayer: Ref<LLayerGroup> = ref();

const moveTo = () => {
  // example how to handle LeafletObject
  // @ts-expect-error
  mapStore.mapGlobalObject.leafletObject.flyTo(center.value);
};

onMounted(() => {
  resorts.value = mapStore.resorts;
  nextTick(() => {
    // @ts-expect-error
    mapStore.mapGlobalObject = map.value;

    // console.log(Object.values(markersLayer.value.leafletObject._layers));
    // mapStore.markersLayer = Object.values(markersLayer.value.leafletObject._layers);
  });
});
</script>

<template>
  <div style="height: 100vh; width: 100%">
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :center="[50.6, 16.9]"
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
      <l-layer-group ref="markersLayer">
        <l-marker
          v-for="marker in resorts"
          :lat-lng="marker.coords"
          :key="marker.id"
          :name="`marker_${marker.id}`"
        >
          <l-popup>
            <MapCard :name="marker.name" :address="marker.address" />
          </l-popup>
        </l-marker>
      </l-layer-group>
    </l-map>
  </div>
</template>

<style scoped></style>
