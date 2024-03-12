<template>
  <div class="bg-blue">
    <div class="d-inline-block bg-red text-orange ma-2">
      <h1 class="d-inline ma-2">
        Ivanov Ivan Ivanovich
      </h1>
      <span class="bg-white text-grey ma-2 pa-2">
        INN 1234567890
      </span>
      <span class="bg-green text-white ma-2 pa-2">
        SMZ
      </span>
      <span class="bg-green text-white ma-2 pa-2">
        Sample Text
      </span>
    </div>
    <div class="bg-green ma-2 pa-2">
      <span v-for="d in data">
        {{ d.message }} |
      </span>
    </div>
    <div class="d-inline-block bg-red ma-2 pa-2">
      Warning
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const data = ref([{ message: 'Some Data' }, { message: 'Some More Data' }])
</script>
