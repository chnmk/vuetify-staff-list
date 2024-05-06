import { defineStore } from 'pinia'
import { useCategoriesStore } from './categories'

export const useStaffStore = defineStore('staff', () => {

  const categoriesStore = useCategoriesStore()

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

  return { staff_list }

})
