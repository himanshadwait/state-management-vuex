<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      // Namespacing a module
      return this.$store.getters['counter/normalisedCounter']
    }
  }
}
</script>
