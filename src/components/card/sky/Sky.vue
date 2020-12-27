<template>
  <v-img
    class="sky"
    :src="skyUrl"
    light
    position="left"
    height="96px"
    width="96px"
    max-width="96px"
    contain
  ></v-img>
</template>

<script>
export default {
  props: ['skyUrl'],
}
</script>

<style lang="scss" scoped>
.sky {
  transition: all ease-in-out;
  animation: floating 5s cubic-bezier(0.55, 0.085, 0.68, 0.53) infinite;
}

@keyframes floating {
  0% {
    transform: translateY(1px);
  }
  25% {
    transform: translateX(2px);
  }
  50% {
    transform: translateY(2px) translateX(4px);
  }
  100% {
    transform: translateY(1px);
  }
}
</style>
