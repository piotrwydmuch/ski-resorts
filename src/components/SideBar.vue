

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Ref } from 'vue'
import type { Resort } from "../types";
import "leaflet/dist/leaflet.css";
import "leaflet"
import { useMapStore } from "../stores/MapStore" 

const store = useMapStore();
const resorts: Ref<Array<Resort>> = ref([]);
const markerLayer: Ref<unknown> = ref();
  
  const onClick = (id: Number) => {
    // move this ID to some type of store or config (?)
  markerLayer.value = store.mapGlobalObject.leafletObject._layers[74];
  const markers = Object.values(markerLayer.value.getLayers());

  markers.forEach(e => console.log(e.options.name))
  // THINK HOW TO CATCH SINGLE MARKER AND OPEN POPUP ON HIM
}

onMounted(() => {
  resorts.value = store.resorts;
})

</script>

<template>
  <div class="sidebar">
    <ul class="resorts">
      <li v-for="(resort, i) in resorts" @click="onClick(resort.id)" class="resorts__single" :key="i">
        <h2>{{ resort.name }}</h2>
        <p>{{ resort.address }}</p>
      </li>
    </ul>
  </div>

</template>

<style scoped>
.sidebar {
  min-width: 400px;
  padding: 20px 16px;
  background-color: #aabbaa;
  position: relative;
  z-index: 1;
}

.resorts {
  list-style: none;
  padding: 0;
  margin: 0;

}
.resorts li {
  margin-bottom: 12px;
  background-color: #403e38;
  /* box-shadow: 2px 2px 10px #6d6d6d; */
  border-radius: 4px;
  padding: 12px 8px;
}
.resorts li h2 {
  font-size: 20px;
}
.resorts li p {
  font-size: 16px;
  line-height: 20px;
}

.resorts__single:hover {
  cursor: pointer;
}
</style>
