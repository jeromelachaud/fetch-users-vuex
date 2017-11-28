<template>
  <div class="app-container">
    <top-bar></top-bar>
    <loader v-if="isLoading"></loader>
    <grid :users="users"></grid>
    <fetch-button @buttonClicked="handleClick" v-model="page"></fetch-button>
  </div>
</template>

<script>
import Loader from './components/Loader'
import TopBar from './components/TopBar'
import Grid from './components/Grid'
import FetchButton from './components/FetchButton'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    TopBar,
    Loader,
    Grid,
    FetchButton,
  },
  computed: {
    ...mapGetters({
      isLoading: 'getLoadingState',
      users: 'getUsers',
      page: 'getPage',
    }),
  },
  created() {
    this.$store.dispatch('fetchData')
  },
  methods: {
    handleClick() {
      this.$store.dispatch('addPage')
      this.$store.dispatch('fetchData')
    },
  },
}
</script>

<style lang="scss">
  @import "node_modules/normalize-scss/sass/_normalize";
  @include normalize();

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-size:62.5%;
    font-family: Helvetica, sans-serif;
    background: #eee;
  }
</style>
