<template>
  <button :type="type">{{text}}</button>
</template>


<script>
export default {
  name: 'button-submit',
  props: {
    type: {
      type: String
    },
    text: String
  },
  data() {
    return {

    }
  }

}
</script>

<style scoped>
  button {
    width: 100px;
    height: 30px;
    font-size: 16px;
    color: rgb(243, 247, 221);
    background-color: rgb(5, 189, 5);
    border-radius: 5px;
  }

  button[disabled] {
    color: gray;
    background-color: #ccc;
  }
</style>
