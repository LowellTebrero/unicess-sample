<template>
  <div class=" w-[80%] mx-auto h-full pt-[2svh]">
    <VCalendar color="sky-blue" expanded   :attributes="attrs" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const attrs = ref([
  {
    highlight: true,
    dates: new Date(),
  },
]);
</script>

<style scoped>
 
</style>