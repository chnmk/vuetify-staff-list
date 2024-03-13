<template>
  <div>
    <v-text-field
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Поиск сотрудника"
        variant="solo"
        hide-details
        single-line
        class="ma-2"
        @update:model-value="$emit('searchText', $event)"
      ></v-text-field>
      <p class="text-grey ma-2">
        Например: Иванов Иван
      </p>
  </div>
</template>
