<template>
  <div class="pa-6 pr-10">
    <v-btn
      block
      height="64"
      class="text-none figma-light-blue elevation-0 text-white ma-2 px-20 py-34"
      @click="$emit('openModal')"
    >
      <span class="button-content pr-2">
        <img src="/src/assets/new.svg" width="32" height="20" alt="new" class="button-icon"/>
        Добавить нового сотрудника
      </span>
    </v-btn>
  </div>
</template>

<style scoped>
.figma-light-blue {
  background-color: #00B6ED;
  box-shadow: 0px 2px 8px #00b6ed75 !important;
}

.button-content {
  font-size: 20px;
  line-height: 21px;
  vertical-align: baseline;
}

.button-icon {
  vertical-align: top;
}
</style>
