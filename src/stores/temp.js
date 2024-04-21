import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTempStore = defineStore('temp', () => {

  const name = ref('Hello Pinia!')

  let numberOfDisplayedItems = 4

  return { name, numberOfDisplayedItems }

})
