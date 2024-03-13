<template>
  <div class="py-6 px-10">
    <v-text-field
        append-inner-icon="mdi-magnify"
        density="comfortable"
        label="Поиск сотрудника"
        variant="solo"
        flat
        hide-details
        single-line
        bg-color="#E8F1F4"
        class="ma-2 rounded"
        @update:model-value="$emit('searchText', $event)"
      ></v-text-field>
      <p class="figma-caption mt-2 mx-2 mb-1">
        Например: Иванов Иван
      </p>
  </div>
</template>

<style scoped>
.figma-caption {
  color: #B0BCC7;
  font-size: 14px;
}
</style>
