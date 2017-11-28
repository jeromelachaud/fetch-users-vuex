<template>
  <div class="loader">
    <div class="doublebounce1"></div>
    <div class="doublebounce2"></div>
  </div>
</template>

<style lang="scss">
  .loader {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    margin: 50vh auto;
  }

  .doublebounce1, .doublebounce2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #333;
    opacity: 0.6;

    animation: sk-bounce 2.0s infinite ease-in-out;
  }

  .doublebounce2 {
    animation-delay: -1.0s;
  }

  @keyframes sk-bounce {
    0%, 100% {
      transform: scale(0.0);
    } 50% {
      transform: scale(1.0);
    }
  }
</style>
