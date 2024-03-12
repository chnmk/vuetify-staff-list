<template>
  <div>
    <v-text-field
        :loading="loading"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search"
        variant="solo"
        hide-details
        single-line
        class="ma-2"
      ></v-text-field>
      <h2 class="text-grey ma-2">
        For example: ...
      </h2>
  </div>
</template>
