import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categories', () => {

  const staff_tag = [
    // id: 1 раньше id: 0, т.к. в макете разный порядок в списке сотрудников и в тэгах над списком
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

  return { staff_tag, country, position, type_contract, gender }

})
