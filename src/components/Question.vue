<template>
  <div id="title">
    <h2 class="title__text">{{text}}</h2>
  </div>
</template>


<script>
export default {
  name: 'question',
  props: {
    text: {
      type: String
    }
  },
  data() {
    return {

    }
  }

}
</script>

<style scoped>
  h2 {
    color: rgb(50, 50, 50);
  }
</style>


