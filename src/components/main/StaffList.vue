<template>
  <div class="bg-white">
    <h1 class="ma-2">
      Список сотрудников
    </h1>
    <div class="d-inline-block">
      <v-btn
        class="d-inline-block text-grey-lighten-2 bg-grey rounded-xl pa-2 ma-2"
        @click="$emit('tagEntireList')"
      >
        Весь список
      </v-btn>
      <v-btn
        class="d-inline-block bg-yellow rounded-xl pa-2 ma-2"
        @click="$emit('tagProblem')"
        :class="tagProblem ? 'text-white' : 'text-orange'"
      >
        Проблемные
      </v-btn>
      <v-btn
        class="d-inline-block bg-red rounded-xl pa-2 ma-2"
        @click="$emit('tagCritical')"
        :class="tagCritical ? 'text-white' : 'text-red-darken-3'"
      >
        Критические
      </v-btn>
      <v-btn
        class="d-inline-block bg-blue-lighten-3 rounded-xl pa-2 ma-2"
        @click="$emit('tagNote')"
        :class="tagNote ? 'text-white' : 'text-blue'"
      >
        Есть замечания
      </v-btn>
      <v-btn
        class="d-inline-block bg-green-lighten-3 rounded-xl pa-2 ma-2"
        @click="$emit('tagComplete')"
        :class="tagComplete ? 'text-white' : 'text-green'"
      >
        Выполнено
      </v-btn>
    </div>
    <staffItem
      class="ma-2"
      v-for="staff in filtered_list"
      :full_name="staff.full_name"
      :inn="staff.inn"
      :type_contract_slug="staff.type_contract.slug"
      :position_name="staff.position.name"
      :country_icon="staff.country.icon"
      :country_slug="staff.country.slug"
      :address="staff.address"
      :date_birth="staff.date_birth"
      :age="staff.age"
      :gender_title="staff.gender.title"
      :status_description="staff.status.description"
      :status_color="staff.status.tag.color"
      :status_tag_id="staff.status.tag_id"
      :tagProblem="tagProblem"
      :tagCritical="tagCritical"
      :tagNote="tagNote"
      :tagComplete="tagComplete"
    />
    <div class="ma-2" v-if="staff_list.length != sliced_list.length">
      <v-btn @click="$emit('showMoreItems')">
        Показать еще
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import staffItem from './StaffItem.vue';

const props = defineProps([
  'staff_list',
  'sliced_list',
  'filtered_list',
  'tagProblem',
  'tagCritical',
  'tagNote',
  'tagComplete'
])

</script>
