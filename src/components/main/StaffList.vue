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
    <StaffTag
      class="ma-2"
      v-for="staff in staff_list"
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
    />
    <div class="ma-2">
      <v-btn>
        Show More
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import StaffTag from './StaffTag.vue';

const props = defineProps(['staff_list'])
</script>
