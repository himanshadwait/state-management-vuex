<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    // Namespacing a module
    ...mapGetters('counter', ['finalCounter'])
  }
}
</script>
