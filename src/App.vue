<template>
  <v-app>
    <v-main>
      <StaffPage />
    </v-main>
  </v-app>
</template>

<script setup>
import StaffPage from './components/StaffPage.vue';
import { useTempStore } from '@/stores/temp'

const store = useTempStore()
console.log(store.name)
</script>
