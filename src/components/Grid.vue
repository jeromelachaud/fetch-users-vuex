<template lang="html">
  <div class="grid">
    <card v-for="(user, key) in users" :key="user.email" :user="user"></card>
  </div>
</template>

<script>
import Card from './Card'
export default {
  name: 'Grid',
  props: [
    'users',
  ],
  components: {
    Card,
  },
}
</script>

<style lang="scss">
  .grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 64rem;
    margin: 0 auto;
    padding-top: .75rem;
    padding-bottom: .75rem;
  }
</style>
