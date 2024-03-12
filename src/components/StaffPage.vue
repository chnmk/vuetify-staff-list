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
          <NewUser />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
