<template>
  <v-container :fluid="true" class="bg-grey pa-4">
    <v-row>
      <v-col>
        <div class="bg-white ma-8 pa-4">
          <StaffSearch />
          <v-divider thickness="4" />
          <StaffList />
        </div>
      </v-col>
      <v-col>
        <div class="bg-white ma-8 pa-4">
          <NewStaff />
          <v-divider thickness="4" />
          <FilterSettings />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import StaffSearch from './main/StaffSearch.vue';
import StaffList from './main/StaffList.vue';
import NewStaff from './sidebar/NewStaff.vue';
import FilterSettings from './sidebar/FilterSettings.vue';
</script>
