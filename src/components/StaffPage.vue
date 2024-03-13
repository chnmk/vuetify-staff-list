<template>
  <v-container :fluid="true" class="figma-bg-grey pa-4">
    <v-row no-gutters class="ma-2">
      <v-col cols="8">
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
      <v-col cols="4">
        <div class="bg-white ma-3 rounded-lg">
          <NewStaff />
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
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import StaffSearch from './main/StaffSearch.vue';
import StaffList from './main/StaffList.vue';
import NewStaff from './sidebar/NewStaff.vue';
import FilterSettings from './sidebar/FilterSettings.vue';

const props = defineProps(['staff_list', 'filtered_list'])

const staff_tag = [
  // id: 1 стоит раньше id: 0, т.к. в макете разный порядок в списке сотрудников и в тэгах над списком
  {
    id: 1,
    title: "Проблемные",
    slug: "Проб",
    color: "yellow",
  },
  {
    id: 0,
    title: "Критические",
    slug: "Крит",
    color: "red",
  },
  {
    id: 2,
    title: "Есть замечания",
    slug: "Зам",
    color: "blue",
  },
  {
    id: 3,
    title: "Выполнено",
    slug: "Вып",
    color: "green",
  },
]

const country = [
  {
    id: 0,
    icon: '/src/assets/ru.svg',
    title: "Россия",
    slug: "RU"
  },
  {
    id: 1,
    icon: '/src/assets/tj.svg',
    title: "Таджикистан",
    slug: "TJ"
  },
  {
    id: 2,
    icon: '/src/assets/uz.svg',
    title: "Узбекистан",
    slug: "UZB"
  },
]

const position = [
  {
    id: 0,
    name: "промышленный альпинист"
  },
  {
    id: 1,
    name: "токарь"
  },
  {
    id: 2,
    name: "пекарь"
  },
]

const type_contract = [
  {
    id: 0,
    title: "Трудовой договор",
    slug: "ТД"
  },
  {
    id: 1,
    title: "Договор гражданско-правового характера",
    slug: "ГПХ"
  },
  {
    id: 2,
    title: "Самозанятость",
    slug: "СМЗ"
  },
  {
    id: 3,
    title: "Кандидат договор",
    slug: "Кандидат"
  },
]

const gender = [
  {
    id: 0,
    title: "Мужской",
    slug: "М"
  },
  {
    id: 1,
    title: "Женский",
    slug: "Ж"
  }
]

let staff_list = [
  {
    full_name: "Константинопольский Константин Константинович",
    inn: "1234567890",
    address: "Санкт-Петербург",
    date_birth: "23.06.2001",
    age: 21,
    type_contract: type_contract[2],
    type_contract_id: type_contract[2].id,
    gender: gender[0],
    gender_id: gender[0].id,
    country: country[0],
    country_id: country[0].id,
    position: position[0],
    position_id: position[0].id,
    status: {
      tag_id : staff_tag[1].id,
      tag: staff_tag[1],
      description: "Истекают все документы"
    }
  },
  {
    full_name: "Иванов Иван Иванович",
    inn: "1234567890",
    address: "Санкт-Петербург",
    date_birth: "23.06.2001",
    age: 21,
    type_contract: type_contract[0],
    type_contract_id: type_contract[0].id,
    gender: gender[0],
    gender_id: gender[0].id,
    country: country[1],
    country_id: country[1].id,
    position: position[0],
    position_id: position[0].id,
    status: {
      tag_id : staff_tag[0].id,
      tag: staff_tag[0],
      description: "Истекает патент"
    }
  },
  {
    full_name: "Константинопольский Константин Константинович",
    inn: "1234567890",
    address: "Санкт-Петербург",
    date_birth: "23.06.2001",
    age: 21,
    type_contract: type_contract[2],
    type_contract_id: type_contract[2].id,
    gender: gender[0],
    gender_id: gender[0].id,
    country: country[0],
    country_id: country[0].id,
    position: position[0],
    position_id: position[0].id,
    status: {
      tag_id : staff_tag[0].id,
      tag: staff_tag[0],
      description: "Истекает патент"
    }
  },
  {
    full_name: "Иванов Иван Иванович",
    inn: "1234567890",
    address: "Санкт-Петербург",
    date_birth: "23.06.2001",
    age: 21,
    type_contract: type_contract[0],
    type_contract_id: type_contract[0].id,
    gender: gender[0],
    gender_id: gender[0].id,
    country: country[1],
    country_id: country[1].id,
    position: position[0],
    position_id: position[0].id,
    status: {
      tag_id : staff_tag[2].id,
      tag: staff_tag[2],
      description: "Пропустил медосмотр"
    }
  },
  {
    full_name: "Константинопольский Константин Константинович",
    inn: "1234567890",
    address: "Санкт-Петербург",
    date_birth: "23.06.2001",
    age: 21,
    type_contract: type_contract[2],
    type_contract_id: type_contract[2].id,
    gender: gender[0],
    gender_id: gender[0].id,
    country: country[0],
    country_id: country[0].id,
    position: position[0],
    position_id: position[0].id,
    status: {
      tag_id : staff_tag[3].id,
      tag: staff_tag[3],
      description: "Прошел все процедуры"
    }
  },
  {
    full_name: "Акапулько Снежана Ефимовна",
    inn: "1234567890",
    address: "Москва",
    date_birth: "01.01.2002",
    age: 24,
    type_contract: type_contract[3],
    type_contract_id: type_contract[3].id,
    gender: gender[1],
    gender_id: gender[1].id,
    country: country[0],
    country_id: country[0].id,
    position: position[1],
    position_id: position[1].id,
    status: {
      tag_id : staff_tag[3].id,
      tag: staff_tag[3],
      description: "Прошел все процедуры"
    }
  },
  {
    full_name: "Карамазов Пётр Иванович",
    inn: "1234567890",
    address: "Москва",
    date_birth: "01.01.1999",
    age: 25,
    type_contract: type_contract[0],
    type_contract_id: type_contract[0].id,
    gender: gender[0],
    gender_id: gender[0].id,
    country: country[0],
    country_id: country[0].id,
    position: position[0],
    position_id: position[0].id,
    status: {
      tag_id : staff_tag[0].id,
      tag: staff_tag[0],
      description: "Истекают все документы"
    }
  },
  {
    full_name: "Карамазов Михаил Михайлович",
    inn: "1234567890",
    address: "Москва",
    date_birth: "01.01.2000",
    age: 24,
    type_contract: type_contract[1],
    type_contract_id: type_contract[1].id,
    gender: gender[0],
    gender_id: gender[0].id,
    country: country[1],
    country_id: country[1].id,
    position: position[1],
    position_id: position[1].id,
    status: {
      tag_id : staff_tag[1].id,
      tag: staff_tag[1],
      description: "Истекает патент"
    }
  },
  {
    full_name: "Карамазова Мария Михайловна",
    inn: "1234567890",
    address: "Москва",
    date_birth: "01.01.2001",
    age: 23,
    type_contract: type_contract[2],
    type_contract_id: type_contract[2].id,
    gender: gender[1],
    gender_id: gender[1].id,
    country: country[2],
    country_id: country[2].id,
    position: position[2],
    position_id: position[2].id,
    status: {
      tag_id : staff_tag[2].id,
      tag: staff_tag[2],
      description: "Пропустил медосмотр"
    }
  },
  {
    full_name: "Акапулько Снежана Олеговна", // valid
    inn: "1234567890", // valid... Should be of certain length?
    address: "Москва", // valid
    date_birth: "01.01.2002",
    age: 24,
    type_contract: type_contract[3], // filter by slug or whatever... valid
    type_contract_id: type_contract[3].id, // valid
    gender: gender[1], // valid
    gender_id: gender[1].id, // valid
    country: country[0], // valid
    country_id: country[0].id, // valid
    position: position[1], // valid
    position_id: position[1].id, // valid
    status: { // valid "Статус сотрудника - выводить необходимо description сортировать по tag_id"
      tag_id : staff_tag[3].id,
      tag: staff_tag[3],
      description: "Прошел все процедуры" // Истекает патент, Пропустил медосмотр, Прошел все процедуры
    }
  },
]

// =================

let numberOfDisplayedItems = 4
let numberOfFilteredItems = staff_list.length

const filtered_list = ref(staff_list.slice(0, numberOfDisplayedItems))

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

function displayList(searchText) {
  // Reset display
  filtered_list.value = staff_list

  // Apply filters if needed:
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

  numberOfFilteredItems = filtered_list.value.length
  filtered_list.value = filtered_list.value.slice(0, numberOfDisplayedItems)
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
  numberOfDisplayedItems += 4

  // Apply filters:
  displayList()
}

function resetFilter() {
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

</script>

<style scoped>
.figma-bg-grey {
  background-color: #F7F8F9;
}
</style>
