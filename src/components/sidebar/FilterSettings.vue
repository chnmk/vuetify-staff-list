<template>
  <div class="ma-2">
    <h1 class="mt-6 mx-6 figma-h1">
      Фильтр
    </h1>
    <div class="mx-2">
      <v-container>
        <v-row>
          <v-col>
            <p class="mb-2">Гражданство</p>
            <v-select
              variant="solo"
              density="comfortable"
              flat
              hide-details
              single-line
              bg-color="#E8F1F4"
              class="rounded"
              placeholder="Все страны"
              :items="['Все страны', 'Россия', 'Таджикистан', 'Узбекистан']"
              @update:model-value="$emit('filterCountry', $event)"
            />
          </v-col>
          <v-col>
            <p class="mb-2">Пол</p>
            <v-select
              variant="solo"
              density="comfortable"
              flat
              hide-details
              single-line
              bg-color="#E8F1F4"
              class="rounded"
              placeholder="Без разницы"
              :items="['Без разницы', 'Мужской', 'Женский']"
              @update:model-value="$emit('filterGender', $event)"
            />
          </v-col>
        </v-row>
        <v-row class="mt-2">
          <v-col>
            <p class="mb-2">Должность</p>
            <v-select
              variant="solo"
              density="comfortable"
              flat
              hide-details
              single-line
              bg-color="#E8F1F4"
              class="rounded"
              placeholder="Все должности"
              :items="['Все должности', 'Промышленный альпинист', 'Токарь', 'Пекарь']"
              @update:model-value="$emit('filterPosition', $event)"
            />
          </v-col>
        </v-row>
      </v-container>
      <div class="mx-3 mt-1">
        <span class="mx-1">
          Тип договора
        </span>
        <v-checkbox
          density="compact"
          base-color="#DCDCDC"
          hide-details
          label="ТД"
          @update:model-value="$emit('checkboxTD')"
          :model-value="checkboxTD"
        />
        <v-checkbox
          density="compact"
          base-color="#DCDCDC"
          hide-details
          label="ГПХ"
          @update:model-value="$emit('checkboxGPH')"
          :model-value="checkboxGPH"
        />
        <v-checkbox
          density="compact"
          base-color="#DCDCDC"
          hide-details
          label="СМЗ"
          @update:model-value="$emit('checkboxSMZ')"
          :model-value="checkboxSMZ"
        />
        <v-checkbox
          density="compact"
          base-color="#DCDCDC"
          hide-details
          label="Кандидат"
          @update:model-value="$emit('checkboxCandidate')"
          :model-value="checkboxCandidate"
        />
      </div>
    </div>
    <div class="mx-6">
      <v-divider thickness="2" class="my-3" />
    </div>
    <div class="mx-5 pb-6 mr-8">
      <v-row>
        <v-col>
          <v-btn height="46" block class="figma-green text-none ma-2" @click="$emit('applyFilter')">
            Применить
          </v-btn>
        </v-col>
        <v-col>
          <v-btn height="46" block class="figma-gray text-none ma-2" @click="$emit('resetFilter')">
            Очистить
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  'checkboxTD',
  'checkboxGPH',
  'checkboxSMZ',
  'checkboxCandidate'
])

</script>

<style scoped>
.figma-h1 {
  font-size: 26px;
}

.figma-green {
  background-color: #00AE5B;
  box-shadow: 0px 2px 8px #00ae5aa2 !important;
  color: white;
}

.figma-gray {
 background-color: #84909B;
 box-shadow: 0px 2px 8px #84909b94 !important;
 color: white;

}
</style>
