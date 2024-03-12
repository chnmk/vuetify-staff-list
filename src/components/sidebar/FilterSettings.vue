<template>
  <div class="ma-2">
    <h1>
      Filter
    </h1>
    <div>
      <v-container>
        <v-row>
          <v-col>
            <p>Nation</p>
            <v-select placeholder="Russia" />
          </v-col>
          <v-col>
            <p>Gender</p>
            <v-select placeholder="Male" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>Position</p>
            <v-select placeholder="All" />
          </v-col>
        </v-row>
      </v-container>
      <div>
        Contract Type
        <v-checkbox density="compact" hide-details label="TD" />
        <v-checkbox density="compact" hide-details label="GPH" />
        <v-checkbox density="compact" hide-details label="SMZ" />
        <v-checkbox density="compact" hide-details label="Candidate" />
      </div>
    </div>
    <v-divider thickness="4" />
    <div class="ma-2">
      <v-btn class="ma-2">
        Accept
      </v-btn>
      <v-btn class="ma-2">
        Clear
      </v-btn>
    </div>
  </div>
</template>
