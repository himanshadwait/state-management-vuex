<template>
  <base-container title="Vuex-Counter">
   <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
  </base-container>
  <!-- Adding a counter state -->
</template>

<!-- We are going to manage the counter state with vuex as if it were a global state -->
<script>
import BaseContainer from './components/BaseContainer.vue'
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter
  }, 
  
  methods: {
    addOne() {
      this.$store.state.counter++
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
</style>
