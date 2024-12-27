<template>
  <header class="Header">
    <h1 class="title product">PRODUCT</h1>
    <h1 class="title list">LIST</h1>
    <svg
      data-svgform
      class="shape"
      viewBox="0 0 377.82175 56.461682">
      <path
        class="line"
        fill="none"
        stroke="#1b1b1b"
        stroke-width="1"
        d="m 0.5,0.5 h 180.7163 l 7.89845,7.89845 7.78556,-7.78556 h 180.42144"></path>
      <path
        class="darkblock"
        stroke="none"
        d="m 0.58,5.73 h 180.05 l 8.49,8.46 v 42.28 l -188.53,-0.93 z"></path>
      <path
        class="lightblock"
        stroke="none"
        d="m 377.68759,5.72663 h -180.04564 l -8.48626,8.45978 v 42.27527 l 188.5319,-0.92808 z"></path>
    </svg>
  </header>
</template>

<script setup lang="ts">
</script>

<style>
.Header {
  position: relative;
  display: flex;
  align-items: center;
  width: 377.82px;
  height: 56.46px;
}
.Header > .shape {
  position: absolute;
  z-index: -1;
}

.Header .title {
  padding-top: 22px;
}

.Header .darkblock { fill: var(--primary-color ) }
.Header .lightblock { fill: var(--secondary-color ) }

.Header .product {
  color: var(--secondary-color);
  margin-left: 40px;
}
.Header .list {
  color: var(--primary-color);
  margin-left: 120px;
}
</style>
