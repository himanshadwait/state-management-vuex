<template>
  <button @click="addOne">Add 2</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // trigger the mutations
      this.$store.commit('increment')
    }
  }
}
</script>
