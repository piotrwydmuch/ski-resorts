<script setup lang="ts">
import { ref, defineProps, onMounted } from "vue"
import type { Ref } from 'vue'

const props = defineProps<{
  name: String
  address: String
}>()

onMounted(() => {

})
</script>

<template>
  <div class="card">
    <p>{{ props.name }}</p>
    <p>{{ props.address }}</p>
  </div>
</template>

<style scoped>
p {
  margin: 0 0 8px 0;
  padding: 0 0 4px 0;
}
</style>
