export default [
  {
    title: `Сколько будет 2+2?`,
    answers: [
      `3`, `4`, `5`, `12`
    ],
    trueAnswer: `4`,
    type: `radio`,
    id: `q1`
  },
  {
    title: `Какого цвета зеленая машина?`,
    answers: [
      `Зеленого`, `Красного`, `Синего`, `Вишневого`
    ],
    trueAnswer: `Зеленого`,
    type: `radio`,
    id: `q2`
  },
  {
    title: `Что?`,
    answers: [
      `Зачем?`, `Где?`, `Когда?`, `Как?`
    ],
    trueAnswer: ["Где?", "Когда?"],
    type: `checkbox`,
    id: `q3`
  }
]
