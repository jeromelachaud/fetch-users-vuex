<template>
  <button class="fetch-button" @click="onClick">Load More</button>
</template>

<script>
export default {
  name: 'FetchButton',
  methods: {
    onClick() {
      this.$emit('buttonClicked')
    },
  },
}
</script>

<style lang="scss">
  .fetch-button {
    border: 0;
    cursor: pointer;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    -webkit-appearance: button; /* for input */

    display: flex;
    justify-content: center;
    width: 10rem;
    margin: 1.5rem auto;
    padding: .5rem;
    border-radius: 5px;
    color: #fff;
    background-color: rgb(85, 101, 155);
  }

</style>
