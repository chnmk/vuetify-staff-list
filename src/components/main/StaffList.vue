<template>
  <div class="bg-white px-10 py-3">
    <h1 class="ma-3 figma-h1">
      Список сотрудников
    </h1>
    <div class="d-inline-block mb-3">
      <v-btn
        class="figma-tags figma-all-tags text-none d-inline-block text-white rounded-xl py-2 px-4 ma-2"
        variant="tonal"
        @click="$emit('tagEntireList')"
      >
        Весь список
      </v-btn>
      <v-btn
        class="figma-tags text-none d-inline-block rounded-xl py-2 px-4 ma-2"
        variant="outlined"
        :ripple="false"
        @click="$emit('tagProblem')"
        :class="tagProblem ? 'figma-problem--enabled' : 'figma-problem--disabled'"
      >
        Проблемные
      </v-btn>
      <v-btn
        class="figma-tags text-none d-inline-block text-none rounded-xl py-2 px-4 ma-2"
        variant="outlined"
        :ripple="false"
        @click="$emit('tagCritical')"
        :class="tagCritical ? 'figma-critical--enabled' : 'figma-critical--disabled'"
      >
        Критические
      </v-btn>
      <v-btn
        class="figma-tags text-none d-inline-block text-none rounded-xl py-2 px-4 ma-2"
        variant="outlined"
        @click="$emit('tagNote')"
        :class="tagNote ? 'figma-note--enabled' : 'figma-note--disabled'"
      >
        Есть замечания
      </v-btn>
      <v-btn
        class="figma-tags text-none d-inline-block text-none rounded-xl py-2 px-4 ma-2"
        variant="outlined"
        :ripple="false"
        @click="$emit('tagComplete')"
        :class="tagComplete ? 'figma-complete--enabled' : 'figma-complete--disabled'"
      >
        Выполнено
      </v-btn>
    </div>
    <staffItem
      class="ma-2"
      v-if="filtered_list.length"
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
    <div v-else class="ml-3 mb-3">
      Нет подходящих пользователей!
    </div>
    <div class="mt-6 mb-12 d-flex justify-center" v-if="filtered_list.length < numberOfFilteredItems">
      <v-btn
        @click="$emit('showMoreItems')"
        variant="outlined"
        class="figma-show-more text-none"
        size="large"
      >
        <span class="button-content pr-2">
          <img src="/src/assets/refresh.svg" width="32" height="16" alt="new" class="button-icon"/>
          Показать еще
        </span>
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import staffItem from './StaffItem.vue';

const props = defineProps([
  'staff_list',
  'filtered_list',
  'numberOfFilteredItems',
  'tagProblem',
  'tagCritical',
  'tagNote',
  'tagComplete'
])
</script>

<style scoped>
.figma-h1 {
  font-size: 26px;
}

.figma-tags {
  font-size: 14px;
  font-weight: 400;
  background-color: #FFFDF1;
}

.figma-all-tags {
  font-weight: 500;
  background-color: #B0BCC7;
}

.figma-problem--disabled {
  color: #E2BD06;
  background-color: #FFFDF1;
}
.figma-problem--enabled {
  color: #FFFDF1;
  background-color: #E2BD06;
}

.figma-critical--disabled {
  color: #E52E2E;
  background-color: #FFF8F8;
}
.figma-critical--enabled {
  color: #FFF8F8;
  background-color: #E52E2E;
}

.figma-note--disabled {
  color: #00B6ED;
  background-color: #F3FCFF;
}
.figma-note--enabled {
  color: #F3FCFF;
  background-color: #00B6ED;
}

.figma-complete--disabled {
  color: #00AE5B;
  background-color: #F2FFF9;
}
.figma-complete--enabled {
  color: #F2FFF9;
  background-color: #00AE5B;
}

.figma-show-more {
  color: #2A358C;
}

.button-content {
  line-height: 18px;
  vertical-align: baseline;
}

.button-icon {
  vertical-align: top;
}
</style>
