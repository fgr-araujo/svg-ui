<template>
  <g class="FieldSet">
    <path
      class="stroke3 fieldCover"
      :d="`m ${790.4 + position.horizontalRatio / 2},${
        183.1 + y
      } h -93.7 l -30,-30  23.4,-40.6 h 5.4 l 9.2,8.6`"
    />
    <path
      class="stroke1 fieldCover"
      :d="`m ${704.7 + position.horizontalRatio / 2},${121.1 + y} h ${
        337.3 + position.horizontalRatio / 2
      }`"
    />
    <foreignObject
      class="form"
      :x="712.8 + position.horizontalRatio / 2"
      :y="100.4 + y"
      width="400"
      height="80"
    >
      <label class="field" :aria-label="description">
        <span class="label">{{ label }}</span>
        <input type="text" class="input" v-model="model" />
      </label>
    </foreignObject>
  </g>
</template>

<script setup lang="ts">
import { type TPosition } from "@/helpers/compute-svg-path";

defineProps<{
  label: string;
  description: string;
  position: TPosition;
  y: number;
}>();

const [model] = defineModel();
</script>

<style>
.FieldSet .field {
  display: flex;
  flex-direction: column;
}
.FieldSet .field > .label {
  color: #000;
}
.FieldSet .field > .input {
  margin-top: 5px;
  height: 45px;
  border: none;
  background: none;
  font-size: 18px;
}
.FieldSet .fieldCover:has(~ .form .input:focus) {
  stroke: #c94831;
}
.FieldSet .field:focus-within > :is(.input, .label) {
  color: #c94831;
}
</style>
