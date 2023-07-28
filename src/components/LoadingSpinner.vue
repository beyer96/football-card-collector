<template>
  <div class="wrapper">
    <font-awesome-icon icon="fa-solid fa-futbol" />
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .fa-futbol {
      color: white;
      width: 80px;
      height: 80px;
      animation: loading-rotation 1500ms ease-out infinite;
    }
  }

  @keyframes loading-rotation {
    0% {
      transform: rotate(0deg) scale(1);
    }

    50% {
      transform: rotate(180deg) scale(0.95);
    }

    100% {
      transform: rotate(360deg) scale(1);
    }
  }
</style>