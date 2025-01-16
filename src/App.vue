<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
  <div class="background-layer-2"></div>
  <div class="background-layer-1"></div>
</template>

<style>
.background-layer-1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/background/square.png");
  background-repeat: repeat;
  z-index: -3;
}
.background-layer-2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/background/big-square.png");
  background-repeat: repeat;
  z-index: -2;
}
</style>
