import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {

  const nameRules = [
    value => {
      if (value) return true
      return 'Необходимо ввести имя.'
    },
    value => {
      if (value?.length > 5) return true
      return 'Имя должно быть длиннее 5 символов.'
    },
  ]

  const addressRules = [
    value => {
      if (value) return true
      return 'Необходимо ввести адрес.'
    },
    value => {
      if (value?.length > 5) return true
      return 'Адрес должен быть длиннее 5 символов.'
    },
  ]

  const innRules = [
    value => {
      if (value) return true
      return 'Необходимо ввести адрес.'
    },
    value => {
      if (value?.length === 10) return true
      return 'ИНН должен состоять из 10 знаков.'
    },
    value => {
      if (value?.match(/^\d+$/)) return true
      return 'ИНН может состоять только из цифр.'
    },
  ]

  const birthRules = [
    value => {
      if (value?.match(/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g)) return true
      return 'Дата должна быть в формате дд.мм.гггг.'
    },
  ]

  const statusRules = [
    value => {
      if (value) return true
      return 'Необходимо ввести описание статуса.'
    },
    value => {
      if (value?.length > 5) return true
      return 'Описание должно быть длиннее 5 символов.'
    },
  ]

  const selectRules = [
    value => {
      if (value) return true
      return 'Необходимо выбрать значение.'
    }
  ]

  return { nameRules, addressRules, innRules, birthRules, statusRules, selectRules }

})
