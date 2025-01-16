<template>
  <g
    class="Button"
    role="button"
    aria-label="Add item to the list"
    tabindex="0"
  >
    <path
      class="buttonStroke"
      :d="`m ${
        925.4 + position.horizontalRatio
      },550.2 h 102.6 c 8,0  14,5.4  14,12 v 30 c 0,6.6  -6,12  -14,12 h -102.6 l -13.4,-12 v -30 c 0,-6.6  6,-12  13.4,-12 `"
    />
    <path
      class="buttonStrokeOutter"
      :d="`m ${
        925.4 + position.horizontalRatio
      },550.2 h 102.6 c 8,0  14,5.4  14,12 v 30 c 0,6.6  -6,12  -14,12 h -102.6 l -13.4,-12 v -30 c 0,-6.6  6,-12  13.4,-12 `"
    />
    <path
      class="buttonIcon"
      :d="`m ${
        962.1 + position.horizontalRatio
      },573.2 h 10.4 v -10.6 h 8.9 v 10.6 h 10.5 v 8.8 h -10.5 v 10.5 h -8.9 v -10.5 h -10.4 `"
    />
  </g>
</template>

<script setup lang="ts">
import { type TPosition } from "@/helpers/compute-svg-path";

defineProps<{
  position: TPosition;
}>();
</script>
