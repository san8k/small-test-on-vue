<template>
  <table>
    <tr>
      <th>Вопрос</th>
      <th>Ответ юзера</th>
      <th>Правильный ответ</th>
      <th>Результат</th>
    </tr>
    <tr v-for="(question, index) in questionsList" :key="'table-row-' + (index + 1)">
      <td>{{question.title}}</td>
      <td>{{showUserAnswer(answersList[index])}}</td>
      <td>{{question.trueAnswer}}</td>
      <td>{{checkAnswer(question.trueAnswer, showUserAnswer(answersList[index]))}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'table-results',
  props: {
    questionsList: Array,
    answersList: Array
  },
  data() {
    return {

    }
  },
  methods: {
    showUserAnswer(answer) {
      if (answer) {
        if (typeof answer === 'string') {
          return answer;
        }
        let multiAnswer = [];
        for (let current of answer) {
          multiAnswer.push(current);
        }
        return multiAnswer;
      } else {
        return `No answer`;
      }

    },
    checkAnswer(trueAnswer, userAnswer) {
      if (typeof trueAnswer === 'string') {
        return trueAnswer === userAnswer;
      }
      if (trueAnswer.length != userAnswer.length) {
        return false;
      }
      let trueCheckboxAnswers = [];
      for (let a of trueAnswer) {
        if (userAnswer.includes(a)) {
          trueCheckboxAnswers.push(true)
        }
      }
      return trueCheckboxAnswers.length === trueAnswer.length;
    }
  }
}
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid lightgray;
    padding: 10px 15px 10px 5px;
  }
  th {
    padding: 10px 5px;
    text-align: left;
  }
</style>
