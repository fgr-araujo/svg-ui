<template>
  <main class="HomeView">
    <Header />

    <svg
      svgname="svg-01"
      class="form-svg"
      data-svgform
      preserveAspectRatio="none"
      :viewBox="position.viewBox"
      :original-viewBox-width="884.12995"
      :original-viewBox-height="303.68338"
      :original-width="884.12995"
      :original-height="303.68338"
      v-resized="computeSVG1.resized">
      <path
        class="stroke2"
        d="m 113.83766,8.8038626 h -11.66346 l -10.55679,34.2149504  10.6029,15.4096 h 23.40642" />
      <path
        class="stroke1"
        :d="`m 127.63264,58.360553 h ${274.08843 + position.horizontalRatio} l 7.52548,-7.52548`"
        />
      <path
        class="stroke2"
        :d="`m ${401.94676 + position.horizontalRatio},8.7842826  10.56886,10.5688704  -3.12041,31.09416`"
        />
    </svg>
  </main>
</template>

<script setup lang="ts">
import Header from '../components/header/Header.vue'
import useComputeSVG from '../helpers/compute-svg-path.js';

const computeSVG1 = new useComputeSVG();
const position = computeSVG1.position;

</script>
<style>
.HomeView {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.HomeView .stroke2 {
  fill: none;
  stroke-width: 4px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: var(--primary-color);
}
.HomeView .stroke1 {
  fill: none;
  stroke-width: 1px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: var(--primary-color);
}
</style>
