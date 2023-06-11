<template>
  <base-container title="Vuex-Counter" v-if="isAuth">
    <the-counter></the-counter>
    <favourite-value></favourite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Vuex-Authenticator">
    <user-auth></user-auth>
  </base-container>
  <!-- Adding a counter state -->
</template>

<!-- We are going to manage the counter state with vuex as if it were a global state -->
<script>
import BaseContainer from './components/BaseContainer.vue'
import TheCounter from './components/TheCounter.vue'
import ChangeCounter from './components/ChangeCounter.vue'
import FavouriteValue from './components/FavouriteValue.vue'
import UserAuth from './components/UserAuth.vue'

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth
  },

  methods: {
    addOne() {
      // trigger the mutation
      // this.$store.dispatch('increase', { value: 10 })
      // Alternative way of committing
      this.$store.dispatch({
        type: 'increase',
        value: 10
      })
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated
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
