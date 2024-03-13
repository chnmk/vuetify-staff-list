<template>
  <div class="figma-item mb-4 rounded">
    <div class="d-inline-block mt-5 mx-2">
      <h3 class="d-inline figma-name mx-4">
        {{ full_name }}
      </h3>
      <span class="bg-white figma-inn text-grey mx-3 px-2 py-1 rounded">
        ИНН {{ inn }}
      </span>
      <span class="figma-tag ml-2 pa-1 rounded">
        {{ type_contract_slug }}
      </span>
      <span class="figma-text pa-2">
        {{ position_name }}
      </span>
    </div>
    <div class="mx-3 mt-1 mb-2 pa-2 figma-text">
      <span class="info-line">
        <img :src="country_icon" width="32" height="16" alt="flag" class="flag mr-1"/>
        {{ country_slug }}
        <span class="figma-vert-div mx-2 pl-3">г. {{ address }}</span>
        <span class="figma-vert-div mx-2 pl-3">Дата рождения: {{ date_birth }}</span>
        <span class="figma-vert-div mx-2 pl-3">Возраст: {{ age }}</span>
        <span class="figma-vert-div mx-2 pl-3">Пол: {{ gender_title }}</span>
      </span>
    </div>
    <div class="d-inline-block mb-6 mx-6 px-2 py-1 rounded" :class="{
      'figma-critical-tag': status_color==='red',
      'figma-problem-tag': status_color==='yellow',
      'figma-note-tag': status_color==='blue',
      'figma-complete-tag': status_color==='green'
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

<style scoped>
.figma-item {
  background-color: #E7F3FF;
}

.figma-name {
  color: #2A358C;
}

.figma-text {
  color: #041423;
  font-size: 14px;
}

.figma-inn {
  color: #84909B;
  font-size: 13px;
}

.figma-tag {
  background-color: #00AE5B;
  font-size: 13px;
  color: white;
  font-weight: 600;
}

.figma-vert-div {
  border-left: #CEDAE5 1px solid;
}

.figma-critical-tag {
  background-color: #E52E2E;
  color: white;
  font-size: 14px;
}
.figma-problem-tag {
  background-color: #E2BD06;
  color: white;
  font-size: 14px;
}
.figma-note-tag {
  background-color: #00B6ED;
  color: white;
  font-size: 14px;
}
.figma-complete-tag {
  background-color: #00AE5B;
  color: white;
  font-size: 14px;
}

.info-line {
  line-height: 20px;
  vertical-align: middle;
}

.flag {
  vertical-align: text-top;
}

</style>
