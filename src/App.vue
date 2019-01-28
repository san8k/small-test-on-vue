<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <form @submit.prevent="onSubmit()" v-if="questionIndex < answersList.length">
        <transition name="slide" mode="out-in" appear>
          <div :key="questionIndex">
            <app-question :text="changeQuestion.title">
            </app-question>
            <app-answers :answersList="changeQuestion" @onanswer="saveAnswer($event)">
            </app-answers>
          </div>
        </transition>
        <app-submit :type="`submit`" :text="`Ответить`" :disabled="isSubmtDisabled"></app-submit>
      </form>
      <app-results :questionsList="answersList" :answersList="userAnswers" v-else>
      </app-results>
    </transition>
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


.slide-enter-active {
  animation: slideIn 0.5s;
}

.slide-leave-active {
  animation: slideOut 0.5s;
}

.fade-enter-active {
  animation: fadeIn 0.6s;
}

.fade-leave-active {
  animation: fadeOut 0.8s;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(15vw);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-15vw);
  }
}

@keyframes fadeIn {
  from {
    transform: translateY(-15vh);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

</style>
