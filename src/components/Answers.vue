<template>
    <ul class="answers__list">
      <li v-for="(answer, index) in answersList.answers" :key="index">
        <label>
        <input :type="answersList.type" :name="answersList.id" :value="answer" @change="sendData(answersList.type, $event)">
        {{answer}}
        </label>
      </li>
    </ul>
</template>
<script>
export default {
  name: 'answers',
  props: {
    answersList: null
  },
  data() {
    return {
      checksSet: new Set
    }
  },
  components: {
  },
  methods: {
    sendData(type, e) {
      if (type === 'radio') {
        this.$emit('onanswer', {
          type: type,
          value: e.target.value
          });
      } else if (type === 'checkbox') {


        if(e.target.checked) {
          this.checksSet.add(e.target.value);
        } else {
          this.checksSet.delete(e.target.value);
        }
        this.$emit('onanswer', {
          type: type,
          value: this.checksSet
        });
      }
    }
  },
  beforeUpdate() {
    const inps = document.querySelectorAll(`input`);
    for (let inp of inps) {
      inp.checked = false;
    }
  },
}
</script>
