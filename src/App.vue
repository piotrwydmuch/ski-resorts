<script setup lang="ts">
import TheMap from "./components/TheMap.vue"
import SideBar from "./components/SideBar.vue"

</script>

<template>
  <div class="app-container">
    <TheMap />
    <SideBar />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
}

</style>
