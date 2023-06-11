<template>
  <button @click="increment">Add 2</button>
  <button @click="increase({ value: 11 })">Add 11</button>
  <!-- Pass the payload as an argument -->
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    // addOne() {
    //   // trigger the mutations
    //   this.$store.dispatch('increment')
    // }
    // ...mapActions(['increment', 'increase'])
    ...mapActions({
      // somePropName: "methodName"
      increment: 'increment',
      increase: 'increase'
      // The same alternative exits for mapGetters as well
    })
  }
}
</script>
