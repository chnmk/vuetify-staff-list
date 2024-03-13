<template>
  <div class="bg-blue">
    <!--    v-if="
        !(status_tag_id === 0 && tagCritical === true)
        "-->
    <div class="d-inline-block bg-red text-orange ma-2">
      <h1 class="d-inline ma-2">
        {{ full_name }}
      </h1>
      <span class="bg-white text-grey ma-2 pa-2">
        ИНН {{ inn }}
      </span>
      <span class="bg-green text-white ma-2 pa-2">
        {{ type_contract_slug }}
      </span>
      <span class="bg-green text-white ma-2 pa-2">
        {{ position_name }}
      </span>
    </div>
    <div class="bg-green ma-2 pa-2">
      <img src="/src/assets/placeholder.svg" alt="flag" /> {{ country_slug }} |
      г. {{ address }} |
      Дата рождения: {{ date_birth }} |
      Возраст: {{ age }} |
      Пол: {{ gender_title }}
    </div>
    <div class="d-inline-block ma-2 pa-2" :class="{
      'bg-red': status_color==='red',
      'bg-yellow': status_color==='yellow',
      'bg-purple': status_color==='blue',
      'bg-green': status_color==='green'
    }">
      {{ status_description }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  'full_name',
  'inn',
  'type_contract_slug',
  'position_name',
  'country_icon',
  'country_slug',
  'address',
  'date_birth',
  'age',
  'gender_title',
  'status_description',
  'status_color',
  'status_tag_id',
  'tagProblem',
  'tagCritical',
  'tagNote',
  'tagComplete'
  ])
</script>
