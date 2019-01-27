<template>
  <div id="app">
    <form @submit.prevent="onSubmit()" v-if="questionIndex < answersList.length">
      <div >
        <app-question :text="changeQuestion.title">
        </app-question>
        <app-answers :answersList="changeQuestion" @onanswer="saveAnswer($event)">
        </app-answers>
      </div>
      <app-submit :type="`submit`" :text="`Ответить`" :disabled="isSubmtDisabled"></app-submit>
    </form>
    <app-results :questionsList="answersList" :answersList="userAnswers" v-else>

    </app-results>
  </div>
</template>

<script>
import AppQuestion from './components/Question';
import AppAnswers from './components/Answers';
import AppSubmit from './components/Button';
import AppResults from './components/Results';
import answersData from './assets/answers-data';

export default {
  name: 'app',
  data () {
    return {
      answersList: answersData,
      questionIndex: 0,
      userAnswers: []
    }
  },
  components: {
    AppQuestion,
    AppAnswers,
    AppSubmit,
    AppResults
  },
  methods: {
    onSubmit() {
      this.questionIndex++;
    },
    saveAnswer(e) {
      if (this.userAnswers[this.questionIndex]) {
        this.userAnswers[this.questionIndex] = e.value;
      } else {
        this.userAnswers.push(e.value);
      }
    }
  },
  computed: {
    changeQuestion() {
      return this.answersList[this.questionIndex];
    },
    isSubmtDisabled() {
      return !this.userAnswers[this.questionIndex];
    }
  }
}

</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
