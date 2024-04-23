<template>
  <v-container :fluid="true" class="figma-bg-grey pa-4">
    <v-row no-gutters class="ma-2">
      <v-col :cols="colsMain">
        <div class="bg-white ma-3">
          <StaffSearch
            @searchText="displayList($event)"
          />
          <v-divider thickness="2" />
          <StaffList
            :staff_list="staff_list"
            :filtered_list="filtered_list"
            :numberOfFilteredItems="numberOfFilteredItems"
            @showMoreItems="showMoreItems()"
            @tagEntireList="switchAllTags()"
            @tagProblem="switchTag('problem')"
            @tagCritical="switchTag('critical')"
            @tagNote="switchTag('note')"
            @tagComplete="switchTag('complete')"
            :tagProblem="tagProblem"
            :tagCritical="tagCritical"
            :tagNote="tagNote"
            :tagComplete="tagComplete"
            />
        </div>
      </v-col>
      <v-col :cols="colsSidebar">
        <div class="bg-white ma-3 rounded-lg">
          <NewStaff
            @openModal="modalOpen = true"
          />
          <v-divider thickness="2" />
          <FilterSettings
            @filterCountry="selectedCountry = $event"
            @filterGender="selectedGender = $event"
            @filterPosition="selectedPosition = $event"
            @checkboxTD="checkboxTD = !checkboxTD"
            @checkboxGPH="checkboxGPH = !checkboxGPH"
            @checkboxSMZ="checkboxSMZ = !checkboxSMZ"
            @checkboxCandidate="checkboxCandidate = !checkboxCandidate"
            :checkboxTD="checkboxTD"
            :checkboxGPH="checkboxGPH"
            :checkboxSMZ="checkboxSMZ"
            :checkboxCandidate="checkboxCandidate"
            @applyFilter="displayList()"
            @resetFilter="resetFilter()"
          />
        </div>
      </v-col>
    </v-row>
    <v-dialog
      v-model="modalOpen"
      width="auto"
    >
      <v-card
        min-width="400"
        max-width="600"
        title="Новый сотрудник"
      >
        <v-form ref="form">
          <v-text-field
            label="Имя"
            class="mt-6"
            @input="event => newUser.full_name = event.target.value"
            :rules="modalStore.nameRules"
            required
          >
          </v-text-field>
          <v-text-field
            label="Адрес"
            @input="event => newUser.address = event.target.value"
            :rules="modalStore.addressRules"
            required
          >
          </v-text-field>
          <v-text-field
            label="ИНН"
            @input="event => newUser.inn = event.target.value"
            :rules="modalStore.innRules"
            required
          >
          </v-text-field>
          <v-text-field
            label="Дата рождения (дд.мм.гггг)"
            @input="event => newUser.date_birth = event.target.value"
            :rules="modalStore.birthRules"
          >
          </v-text-field>
          <v-select
            label="Договор"
            :items="['ТД', 'ГПХ', 'СМЗ', 'Кандидат']"
            @update:model-value="newUser.type_contract_temp = $event"
            :rules="modalStore.selectRules"
            required
          >
          </v-select>
          <v-select
            label="Пол"
            :items="['Мужской', 'Женский']"
            @update:model-value="newUser.gender_temp = $event"
            :rules="modalStore.selectRules"
            required
          >
          </v-select>
          <v-select
            label="Страна"
            :items="['Россия', 'Таджикистан', 'Узбекистан']"
            @update:model-value="newUser.country_temp = $event"
            :rules="modalStore. selectRules"
            required
          >
          </v-select>
          <v-select
            label="Должность"
            :items="['промышленный альпинист', 'токарь', 'пекарь']"
            @update:model-value="newUser.position_temp = $event"
            :rules="modalStore. selectRules"
            required
          >
          </v-select>
          <v-select
            label="Тэг сотрудника"
            :items="['Проблемные', 'Критические', 'Есть замечания', 'Выполнено']"
            @update:model-value="newUser.status.tag_temp = $event"
            :rules="modalStore.selectRules"
            required
          >
          </v-select>
          <v-text-field
            label="Описание статуса"
            @input="event => newUser.status.description = event.target.value"
            :rules="modalStore.statusRules"
            required
          >
          </v-text-field>
        </v-form>
        <template v-slot:actions>
          <v-btn
            text="Добавить"
            @click="validate"
          ></v-btn>
          <v-btn
            class="ms-auto"
            text="Отмена"
            @click="modalOpen = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import StaffSearch from './main/StaffSearch.vue';
import StaffList from './main/StaffList.vue';
import NewStaff from './sidebar/NewStaff.vue';
import FilterSettings from './sidebar/FilterSettings.vue';
import { useDisplay } from "vuetify";
import { computed } from "vue";

import { useTempStore } from '@/stores/temp'
import { useCategoriesStore } from '@/stores/categories'
import { useModalStore } from '@/stores/modal';
const tempStore = useTempStore()
const categoriesStore = useCategoriesStore()
const modalStore = useModalStore()
console.log(categoriesStore)

// =================
// Vuetify adaptivity:

const { name } = useDisplay();

const colsSidebar = computed(() => {
  switch (name.value) {
    case "xs":
      return 12;
    case "sm":
      return 12;
    case "md":
      return 12;
    case "lg":
      return 5;
    case "xl":
      return 4;
    case "xxl":
      return 4;
  }
  return undefined;
});

const colsMain = computed(() => {
  switch (name.value) {
    case "xs":
      return 12;
    case "sm":
      return 12;
    case "md":
      return 12;
    case "lg":
      return 7;
    case "xl":
      return 8;
    case "xxl":
      return 8;
  }
  return undefined;
});


let staff_list = [
  {
    full_name: "Константинопольский Константин Константинович",
    inn: "1234567890",
    address: "Санкт-Петербург",
    date_birth: "23.06.2001",
    age: 21,
    type_contract: categoriesStore.type_contract[2],
    type_contract_id: categoriesStore.type_contract[2].id,
    gender: categoriesStore.gender[0],
    gender_id: categoriesStore.gender[0].id,
    country: categoriesStore.country[0],
    country_id: categoriesStore.country[0].id,
    position: categoriesStore.position[0],
    position_id: categoriesStore.position[0].id,
    status: {
      tag_id : categoriesStore.staff_tag[1].id,
      tag: categoriesStore.staff_tag[1],
      description: "Истекают все документы"
    }
  },
  {
    full_name: "Иванов Иван Иванович",
    inn: "1234567890",
    address: "Санкт-Петербург",
    date_birth: "23.06.2001",
    age: 21,
    type_contract: categoriesStore.type_contract[0],
    type_contract_id: categoriesStore.type_contract[0].id,
    gender: categoriesStore.gender[0],
    gender_id: categoriesStore.gender[0].id,
    country: categoriesStore.country[1],
    country_id: categoriesStore.country[1].id,
    position: categoriesStore.position[0],
    position_id: categoriesStore.position[0].id,
    status: {
      tag_id : categoriesStore.staff_tag[0].id,
      tag: categoriesStore.staff_tag[0],
      description: "Истекает патент"
    }
  },
  {
    full_name: "Константинопольский Константин Константинович",
    inn: "1234567890",
    address: "Санкт-Петербург",
    date_birth: "23.06.2001",
    age: 21,
    type_contract: categoriesStore.type_contract[2],
    type_contract_id: categoriesStore.type_contract[2].id,
    gender: categoriesStore.gender[0],
    gender_id: categoriesStore.gender[0].id,
    country: categoriesStore.country[0],
    country_id: categoriesStore.country[0].id,
    position: categoriesStore.position[0],
    position_id: categoriesStore.position[0].id,
    status: {
      tag_id : categoriesStore.staff_tag[0].id,
      tag: categoriesStore.staff_tag[0],
      description: "Истекает патент"
    }
  },
  {
    full_name: "Иванов Иван Иванович",
    inn: "1234567890",
    address: "Санкт-Петербург",
    date_birth: "23.06.2001",
    age: 21,
    type_contract: categoriesStore.type_contract[0],
    type_contract_id: categoriesStore.type_contract[0].id,
    gender: categoriesStore.gender[0],
    gender_id: categoriesStore.gender[0].id,
    country: categoriesStore.country[1],
    country_id: categoriesStore.country[1].id,
    position: categoriesStore.position[0],
    position_id: categoriesStore.position[0].id,
    status: {
      tag_id : categoriesStore.staff_tag[2].id,
      tag: categoriesStore.staff_tag[2],
      description: "Пропустил медосмотр"
    }
  },
  {
    full_name: "Константинопольский Константин Константинович",
    inn: "1234567890",
    address: "Санкт-Петербург",
    date_birth: "23.06.2001",
    age: 21,
    type_contract: categoriesStore.type_contract[2],
    type_contract_id: categoriesStore.type_contract[2].id,
    gender: categoriesStore.gender[0],
    gender_id: categoriesStore.gender[0].id,
    country: categoriesStore.country[0],
    country_id: categoriesStore.country[0].id,
    position: categoriesStore.position[0],
    position_id: categoriesStore.position[0].id,
    status: {
      tag_id : categoriesStore.staff_tag[3].id,
      tag: categoriesStore.staff_tag[3],
      description: "Прошел все процедуры"
    }
  },
  {
    full_name: "Акапулько Снежана Ефимовна",
    inn: "1234567890",
    address: "Москва",
    date_birth: "01.01.2002",
    age: 24,
    type_contract: categoriesStore.type_contract[3],
    type_contract_id: categoriesStore.type_contract[3].id,
    gender: categoriesStore.gender[1],
    gender_id: categoriesStore.gender[1].id,
    country: categoriesStore.country[0],
    country_id: categoriesStore.country[0].id,
    position: categoriesStore.position[1],
    position_id: categoriesStore.position[1].id,
    status: {
      tag_id : categoriesStore.staff_tag[3].id,
      tag: categoriesStore.staff_tag[3],
      description: "Прошел все процедуры"
    }
  },
  {
    full_name: "Карамазов Пётр Иванович",
    inn: "1234567890",
    address: "Москва",
    date_birth: "01.01.1999",
    age: 25,
    type_contract: categoriesStore.type_contract[0],
    type_contract_id: categoriesStore.type_contract[0].id,
    gender: categoriesStore.gender[0],
    gender_id: categoriesStore.gender[0].id,
    country: categoriesStore.country[0],
    country_id: categoriesStore.country[0].id,
    position: categoriesStore.position[0],
    position_id: categoriesStore.position[0].id,
    status: {
      tag_id : categoriesStore.staff_tag[0].id,
      tag: categoriesStore.staff_tag[0],
      description: "Истекают все документы"
    }
  },
  {
    full_name: "Карамазов Михаил Михайлович",
    inn: "1234567890",
    address: "Москва",
    date_birth: "01.01.2000",
    age: 24,
    type_contract: categoriesStore.type_contract[1],
    type_contract_id: categoriesStore.type_contract[1].id,
    gender: categoriesStore.gender[0],
    gender_id: categoriesStore.gender[0].id,
    country: categoriesStore.country[1],
    country_id: categoriesStore.country[1].id,
    position: categoriesStore.position[1],
    position_id: categoriesStore.position[1].id,
    status: {
      tag_id : categoriesStore.staff_tag[1].id,
      tag: categoriesStore.staff_tag[1],
      description: "Истекает патент"
    }
  },
  {
    full_name: "Карамазова Мария Михайловна",
    inn: "1234567890",
    address: "Москва",
    date_birth: "01.01.2001",
    age: 23,
    type_contract: categoriesStore.type_contract[2],
    type_contract_id: categoriesStore.type_contract[2].id,
    gender: categoriesStore.gender[1],
    gender_id: categoriesStore.gender[1].id,
    country: categoriesStore.country[2],
    country_id: categoriesStore.country[2].id,
    position: categoriesStore.position[2],
    position_id: categoriesStore.position[2].id,
    status: {
      tag_id : categoriesStore.staff_tag[2].id,
      tag: categoriesStore.staff_tag[2],
      description: "Пропустил медосмотр"
    }
  },
  {
    full_name: "Акапулько Снежана Олеговна", // valid
    inn: "1234567890", // valid
    address: "Москва", // valid
    date_birth: "01.01.2002",
    age: 24,
    type_contract: categoriesStore.type_contract[3], // valid
    type_contract_id: categoriesStore.type_contract[3].id, // valid
    gender: categoriesStore.gender[1], // valid
    gender_id: categoriesStore.gender[1].id, // valid
    country: categoriesStore.country[0], // valid
    country_id: categoriesStore.country[0].id, // valid
    position: categoriesStore.position[1], // valid
    position_id: categoriesStore.position[1].id, // valid
    status: { // valid
      tag_id : categoriesStore.staff_tag[3].id,
      tag: categoriesStore.staff_tag[3],
      description: "Прошел все процедуры"
    }
  },
]

// =================
// App logic:

// Sort staff array on setup:
staff_list.sort((a,b) => a.status.tag_id - b.status.tag_id)

// Set variables for staff list filtration:
let numberOfFilteredItems = staff_list.length

const filtered_list = ref(staff_list.slice(0, tempStore.numberOfDisplayedItems))

const tagCritical = ref(false)
const tagProblem = ref(false)
const tagNote = ref(false)
const tagComplete = ref(false)

const selectedCountry = ref("Все страны")
const selectedGender = ref("Без разницы")
const selectedPosition= ref("Все должности")

const checkboxTD = ref(false)
const checkboxGPH = ref(false)
const checkboxSMZ = ref(false)
const checkboxCandidate = ref(false)

const modalOpen = ref(false)

function displayList(searchText) {
  // Reset display
  filtered_list.value = staff_list

  // Apply filters if needed:

  // Tag filters:
  if (tagCritical.value || tagProblem.value || tagNote.value || tagComplete.value) {
    if (!tagCritical.value) {
      filtered_list.value = filtered_list.value.filter((staff) => staff.status.tag_id !== 0)
    }
    if (!tagProblem.value) {
      filtered_list.value = filtered_list.value.filter((staff) => staff.status.tag_id !== 1)
    }
    if (!tagNote.value) {
      filtered_list.value = filtered_list.value.filter((staff) => staff.status.tag_id !== 2)
    }
    if (!tagComplete.value) {
      filtered_list.value = filtered_list.value.filter((staff) => staff.status.tag_id !== 3)
    }
  }

  // Name search:
  if (searchText) {
    filtered_list.value = filtered_list.value.filter((staff) => staff.full_name.includes(searchText))
  }

  if (selectedCountry.value !== "Все страны") {
    filtered_list.value = filtered_list.value.filter((staff) => staff.country.title === selectedCountry.value )
  }

  if (selectedGender.value !== "Без разницы") {
    filtered_list.value = filtered_list.value.filter((staff) => staff.gender.title === selectedGender.value )
  }

  if (selectedPosition.value !== "Все должности") {
    filtered_list.value = filtered_list.value.filter((staff) => staff.position.name === selectedPosition.value )
  }

  // Checkbox filters:
  if (checkboxTD.value || checkboxGPH.value || checkboxSMZ.value || checkboxCandidate.value) {
    if (!checkboxTD.value) {
      filtered_list.value = filtered_list.value.filter((staff) => staff.type_contract_id !== 0)
    }
    if (!checkboxGPH.value) {
      filtered_list.value = filtered_list.value.filter((staff) => staff.type_contract_id !== 1)
    }
    if (!checkboxSMZ.value) {
      filtered_list.value = filtered_list.value.filter((staff) => staff.type_contract_id !== 2)
    }
    if (!checkboxCandidate.value) {
      filtered_list.value = filtered_list.value.filter((staff) => staff.type_contract_id !== 3)
    }
  }

  // Create final filtered list:
  numberOfFilteredItems = filtered_list.value.length
  filtered_list.value = filtered_list.value.slice(0, tempStore.numberOfDisplayedItems)
}

function switchTag(input) {
  // Activate or deactivate clicked tag:
  if (input === "critical") {
    tagCritical.value = !tagCritical.value
  } else if (input === "problem") {
    tagProblem.value = !tagProblem.value
  } else if (input === "note") {
    tagNote.value = !tagNote.value
  } else if (input === "complete") {
    tagComplete.value = !tagComplete.value
  }

  // Apply filters:
  displayList()
}

function switchAllTags() {
  // Reset active buttons:
  tagCritical.value = false
  tagProblem.value = false
  tagNote.value = false
  tagComplete.value = false

  // Apply filters:
  displayList()
}

function showMoreItems() {
  tempStore.numberOfDisplayedItems += 4

  // Apply filters:
  displayList()
}

function resetFilter() {
  // Reset values:
  selectedCountry.value = "Все страны"
  selectedGender.value = "Без разницы"
  selectedPosition.value = "Все должности"

  checkboxTD.value = false
  checkboxGPH.value = false
  checkboxSMZ.value = false
  checkboxCandidate.value = false

  // Apply filters:
  displayList()
}

// =================
// Modal window logic:

const form = ref()

async function validate () {
  const { valid } = await form.value.validate()
  if (valid) modalSubmit()
}

let newUser = {
  full_name: "aba",
  inn: "111",
  address: "here",
  date_birth: "0",
  age: 0,
  type_contract: categoriesStore.type_contract[0],
  type_contract_id: categoriesStore.type_contract[0].id,
  type_contract_temp: "ТД",
  gender: categoriesStore.gender[0],
  gender_id: categoriesStore.gender[0].id,
  gender_temp: "Мужской",
  country: categoriesStore.country[0],
  country_id: categoriesStore.country[0].id,
  country_temp: "Россия",
  position: categoriesStore.position[0],
  position_id: categoriesStore.position[0].id,
  position_temp: "промышленный альпинист",
  status: {
    tag_id : categoriesStore.staff_tag[0].id,
    tag: categoriesStore.staff_tag[0],
    tag_temp: "Проблемные",
    description: "yep"
  }
}

function modalSubmit() {
  const addedUser = structuredClone(newUser)
  // Close the window:
  modalOpen.value = false

  // Set proper values:
  addedUser.type_contract = categoriesStore.type_contract.find((a) => a.slug === addedUser.type_contract_temp)
  addedUser.type_contract_id = addedUser.type_contract.id
  addedUser.gender = categoriesStore.gender.find((a) => a.title === addedUser.gender_temp)
  addedUser.gender_id = addedUser.gender.id
  addedUser.country = categoriesStore.country.find((a) => a.title === addedUser.country_temp)
  addedUser.country_id = addedUser.country.id
  addedUser.position = categoriesStore.position.find((a) => a.name === addedUser.position_temp)
  addedUser.position = addedUser.position.id
  addedUser.status.tag = categoriesStore.staff_tag.find((a) => a.title === addedUser.status.tag_temp)
  addedUser.status.tag_id = addedUser.status.tag.id

  const bd = addedUser.date_birth
  const converted_bd = Math.floor((new Date() - new Date(bd).getTime()) / (365.25 * 24 * 60 * 60 * 1000))
  addedUser.age = converted_bd

  // Delete temp values:
  delete addedUser.type_contract_temp
  delete addedUser.gender_temp
  delete addedUser.country_temp
  delete addedUser.position_temp
  delete addedUser.status.tag_temp

  // Add new user:
  staff_list.unshift(addedUser)
  displayList()
}

</script>

<style scoped>
.figma-bg-grey {
  background-color: #F7F8F9;
}
</style>
