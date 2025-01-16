<template>
  <g class="List" tabindex="0">
    <image
      x="0"
      y="110"
      width="90"
      clip-path="url(#listitem-icon)"
      :href="item.photo"
    ></image>
    <path
      class="itemOutter"
      :d="`m 100.3,92.7 l -5.6,7.1 c -2.2,2.8  -5.6,4.4  -9.1,4.4 h -80.1 c -2.5,0  -4.5,2  -4.5,4.5 v 35.1 c 0,3.9  1.6,7.7  4.3,10.4 l 16,16 c 2.6,2.5  6.1,4  9.8,4 h 55.6 c 3.2,0  6.3,-1.5  8.3,-4 l 5.3,-6.7 c 1.4,-1.8  3.5,-2.8  5.7,-2.8 h 167.7 c 1.9,0  3.7,0.8  5,2.2 l 6.3,7.1 c 2.4,2.7  5.7,4.2  9.3,4.2 h 80.2 l 8.3,0  8.2,0 h ${
        103.8 + position.horizontalRatio / 2
      } c 3.4,0  6.2,-2.8  6.2,-6.2 v -56.3 c 0,-4.2  -3.4,-7.5  -7.5,-7.5 h ${
        -102.7 - position.horizontalRatio / 2
      } l -8.3,0  -8.3,0 h -79 c -3.9,0  -7.7,-1.7  -10.3,-4.6 l -7.2,-8.1 c -0.9,-1  -2.2,-1.6  -3.5,-1.6 h -168.6 c -2.2,0  -4.3,1  -5.7,2.8 `"
    >
    </path>

    <path
      class="itemInner"
      :d="`m 105.7,91.9 c -6.22,0.33  -8.02,14.4  -21.01,14.3 h -79.31 c -1.49,0  -2.59,1.5  -2.38,3 v 35.3 c 0.16,3.4  1.78,6.6  4.31,8.9  5.26,5.2  10.48,10.5  15.77,15.7  2.44,2.2  5.76,3.3  9.01,3.1 h 55 c 9.65,-0.8  9.5,-14.3  19.81,-13.5 h 167.2 c 8.8,0.3  10.1,13.8  21.2,13.5 h ${
        199.7 + position.horizontalRatio / 2
      } c 2.4,-0.1  4.2,-2.4  4,-4.6 v -56.2 c -0.1,-2.9  -2.7,-5.3  -5.6,-5.2 h ${
        -198.2 - position.horizontalRatio / 2
      } c -13.7,-0.4  -12.6,-13.55  -23.1,-14.3 h -166.3`"
    />
    <foreignObject x="110.3" y="107.5" width="320" height="50">
      <p class="text name">
        <strong>{{ item.firstName }}</strong>
        {{ item.lastName }}
      </p>
      <p class="text position">{{ item.occupation }}</p>
    </foreignObject>
  </g>
</template>

<script setup lang="ts">
import { type TPosition } from "@/helpers/compute-svg-path";

export type TItem = {
  id: number;
  firstName: string;
  lastName: string;
  occupation: string;
  photo: string;
};

defineProps<{
  position: TPosition;
  item: TItem;
}>();
</script>

<style>
.List {
  cursor: pointer;
}
.List:is(:focus, :hover) {
  .itemOutter {
    stroke: var(--primary-color);
  }
  .itemInner {
    fill: url(#linearGradient5517);
  }
  .itemOutter {
    animation-play-state: running;
  }
}

.List > .itemOutter {
  display: inline;
  fill: none;
  fill-opacity: 0.7647;
  stroke: var(--secondary-color);
  stroke-width: 2;
  stroke-linecap: square;
  stroke-miterlimit: 1;
  stroke-dasharray: none;
  stroke-opacity: 1;
  paint-order: markers stroke fill;
  animation-play-state: paused;
}
.List > .itemInner {
  display: inline;
  fill: url(#linearGradient5508);
  fill-opacity: 1;
  stroke: none;
  stroke-width: 0.3;
  stroke-linecap: square;
  stroke-miterlimit: 1;
  stroke-dasharray: none;
  stroke-opacity: 0.7647;
  paint-order: markers stroke fill;
}

.List .text {
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  font-stretch: normal;
  font-size: 22px;
  line-height: 1.25;
  font-family: "Fira Code";
  fill: var(--secondary-color);
  fill-opacity: 1;
}
.List .text strong {
  font-weight: bold;
}
.List .position {
  font-size: 16px;
}
</style>
