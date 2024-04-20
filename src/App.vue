<template>
  <v-app>
    <v-main>
      <StaffPage />
    </v-main>
  </v-app>
</template>

<script setup>
import StaffPage from './components/StaffPage.vue';
import { useTestStore } from '@/stores/test'

const store = useTestStore()
console.log(store.name)
</script>
