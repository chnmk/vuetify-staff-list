<template>
  <v-container :fluid="true" class="bg-grey pa-4">
    <v-row>
      <v-col>
        <div class="bg-white ma-8 pa-4">
          <StaffSearch
            @searchText="searchText($event)"
          />
          <v-divider thickness="4" />
          <StaffList
            :staff_list="staff_list"
            :sliced_list="sliced_list"
            :filtered_list="filtered_list"
            @showMoreTags="showMoreTags()"
            @tagEntireList="switchTagEntireList()"
            @tagProblem="tagProblem = !tagProblem"
            @tagCritical="switchTagCritical()"
            @tagNote="tagNote = !tagNote"
            @tagComplete="tagComplete = !tagComplete"
            :tagProblem="tagProblem"
            :tagCritical="tagCritical"
            :tagNote="tagNote"
            :tagComplete="tagComplete"
            />
        </div>
      </v-col>
      <v-col>
        <div class="bg-white ma-8 pa-4">
          <NewStaff />
          <v-divider thickness="4" />
          <FilterSettings />
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

const props = defineProps(['staff_list', 'sliced_list'])

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
    icon: '/src/assets/placeholder.svg',
    title: "Россия",
    slug: "RU"
  },
  {
    id: 1,
    icon: '/src/assets/placeholder.svg',
    title: "Таджикистан",
    slug: "TJ"
  },
  {
    id: 2,
    icon: '/src/assets/placeholder.svg',
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

const sliced_list = ref(staff_list.slice(0, 4))
const filtered_list = sliced_list

let numberOfDisplayedTags = 4

const tagCritical = ref(false)
const tagProblem = ref(false)
const tagNote = ref(false)
const tagComplete = ref(false)

function switchTagEntireList() {
  // Reset active buttons:
  tagCritical.value = false
  tagProblem.value = false
  tagNote.value = false
  tagComplete.value = false

  // Reset filter:
  filtered_list.value = staff_list.slice(0, numberOfDisplayedTags)
}

function switchTagCritical() {
  tagCritical.value = !tagCritical.value

  // FIXME: resets on showMoreTags
  filtered_list.value = sliced_list.value.filter((staff) => staff.status.tag_id === 0)
}


function showMoreTags()  {
  numberOfDisplayedTags += 4
  sliced_list.value = staff_list.slice(0, numberOfDisplayedTags)
}

function searchText($event) {
  if ($event.length === 0) {
    // Reset filter:
    sliced_list.value = staff_list.slice(0, numberOfDisplayedTags)
  } else {
    // Add filter:
    // ...
  }
}

</script>
