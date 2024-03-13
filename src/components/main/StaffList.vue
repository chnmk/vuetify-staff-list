<template>
  <div class="bg-white">
    <h1 class="ma-2">
      List
    </h1>
    <div class="d-inline-block">
      <!-- v-btn-toggle -->
      <v-btn class="d-inline-block bg-grey rounded-xl pa-2 ma-2">
        Button 1
      </v-btn>
      <v-btn class="d-inline-block bg-yellow rounded-xl pa-2 ma-2">
        Button 2
      </v-btn >
      <v-btn class="d-inline-block bg-red rounded-xl pa-2 ma-2">
        Button 3
      </v-btn >
      <v-btn class="d-inline-block bg-blue rounded-xl pa-2 ma-2">
        Button 4
      </v-btn >
      <v-btn class="d-inline-block bg-green rounded-xl pa-2 ma-2">
        Button 5
      </v-btn >
    </div>
    <StaffTag class="ma-2" />
    <StaffTag class="ma-2" />
    <StaffTag class="ma-2" />
    <StaffTag class="ma-2" />
    <div class="ma-2">
      <v-btn>
        Show More
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import StaffTag from './StaffTag.vue';
</script>
