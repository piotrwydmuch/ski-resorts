

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Ref } from 'vue'
import "leaflet/dist/leaflet.css";
import "leaflet"
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

import data from "./../data/data.json"

interface Resort {
  name: String,
  address: String,
  coords: number[],
}

const map: Ref<unknown> = ref(null)
const mapObj = ref(null);
// const zoom: Ref<number> = ref(8); 

const resorts: Ref<Array<Resort>> = ref([]);

onMounted(() => {
  resorts.value = data.resorts;
})

</script>

<template>
  <div class="sidebar">
    <ul class="resorts">
      <li v-for="(resort, i) in resorts" class="resorts__single" :key="i">
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
</style>
