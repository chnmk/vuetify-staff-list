<template>
  <div class="ma-2">
    <h1>
      Фильтр
    </h1>
    <div>
      <v-container>
        <v-row>
          <v-col>
            <p>Гражданство</p>
            <v-select
              placeholder="Все страны"
              :items="['Все страны', 'Россия', 'Таджикистан', 'Узбекистан']"
              @update:model-value="$emit('filterCountry', $event)"
            />
          </v-col>
          <v-col>
            <p>Пол</p>
            <v-select
              placeholder="Без разницы"
              :items="['Без разницы', 'Мужской', 'Женский']"
              @update:model-value="$emit('filterGender', $event)"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>Должность</p>
            <v-select
              placeholder="Все должности"
              :items="['Все должности', 'Промышленный альпинист', 'Токарь', 'Пекарь']"
              @update:model-value="$emit('filterPosition', $event)"
            />
          </v-col>
        </v-row>
      </v-container>
      <div>
        Тип договора
        <v-checkbox
          density="compact"
          hide-details
          label="ТД"
          @update:model-value="$emit('checkboxTD')"
        />
        <v-checkbox
          density="compact"
          hide-details
          label="ГПХ"
          @update:model-value="$emit('checkboxGPH')"
        />
        <v-checkbox
          density="compact"
          hide-details
          label="СМЗ"
          @update:model-value="$emit('checkboxSMZ')"
        />
        <v-checkbox
          density="compact"
          hide-details
          label="Кандидат"
          @update:model-value="$emit('checkboxCandidate')"
        />
      </div>
    </div>
    <v-divider thickness="4" />
    <div class="ma-2">
      <v-btn class="ma-2" @click="$emit('applyFilter')">
        Применить
      </v-btn>
      <v-btn class="ma-2" @click="$emit('resetFilter')">
        Очистить
      </v-btn>
    </div>
  </div>
</template>
