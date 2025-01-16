<template>
  <header class="Header">
    <HeaderLogo />
  </header>
</template>

<script setup lang="ts">
import HeaderLogo from "../header-logo/HeaderLogo.vue";
</script>

<style>
.Header {
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
</style>
