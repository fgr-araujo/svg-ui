<template>
  <main class="HomeView">
    <Header />

    <svg
      svgname="svg-01"
      class="form-svg"
      data-svgform
      preserveAspectRatio="none"
      :viewBox="position.viewBox"
      :original-viewBox-width="1098"
      :original-viewBox-height="618.7"
      :original-width="1098"
      :original-height="618.7"
      v-resized="computeSVG1.resized"
    >
      <!-- DEFs -->
      <defs>
        <linearGradient
          id="linearGradient5517"
          gradient-transform="translate(-62.01,148)"
          gradient-units="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#d0553f" stop-opacity="0.1752"></stop>
          <stop offset="1" stop-color="#c94831" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient5508"
          gradient-transform="translate(-62.01,148)"
          gradient-units="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#0b0d0d" stop-opacity="0.1371"></stop>
          <stop offset="1" stop-color="#313333" stop-opacity="0"></stop>
        </linearGradient>
        <clipPath id="listitem-icon" clip-path-units="objectBoundingBox">
          <path
            transform="translate(-63,-11)"
            :d="`m 75.04,122.7 c -2.28,0  -4.11,1.8  -4.11,4.1 v 23.3 a 13.3,13.3  67.5  0  0  3.9,9.4 l 15.1,15.1 a 10.6,10.6  22.5  0  0  7.49,3.1 l 24.38,0 c 2.3,0  4.1,-1.8  4.1,-4.1 v -46.8 c 0,-2.3  -1.8,-4.1  -4.1,-4.1 `"
          />
        </clipPath>
      </defs>

      <!-- Left List -->
      <foreignObject x="43" y="10" width="100" height="40">
        <h2>LIST</h2>
      </foreignObject>
      <path
        d="m 179.2,51.1 h -145.8 l -27.54,-27.5 l 9.66,-22.1"
        class="stroke3"
      />
      <path
        :d="`m ${558.4 + position.horizontalRatio / 2},51.1 h ${
          -376.4 - position.horizontalRatio / 2
        }`"
        class="stroke1"
      />
      <path
        :d="`m ${
          588.4 + position.horizontalRatio / 2
        },617.2 v -536.1 l -30,-30`"
        class="stroke3"
      />

      <!-- Right Form -->
      <foreignObject
        :x="920.8 + position.horizontalRatio"
        y="10"
        width="120"
        height="40"
      >
        <h2>REGISTER</h2>
      </foreignObject>
      <path
        :d="`m ${876.1 + position.horizontalRatio},50.1 h ${
          -242.7 - position.horizontalRatio / 2
        } v 349.2`"
        class="stroke1"
      />
      <path
        :d="`m ${1097 + position.horizontalRatio},15.1 l -40,35 h -180.9`"
        class="stroke3"
      />

      <!-- List Items -->
      <ListItem
        v-for="(item, itemIndex) in items"
        :key="itemIndex"
        :transform="`translate(0, ${itemIndex * 76})`"
        :item="item"
        :position="position"
      />

      <!-- Form Objects -->
      <InputText
        :position="position"
        :y="0"
        label="First Name"
        description="Type your first name"
        v-model="form.firstName"
      />
      <InputText
        :position="position"
        :y="110"
        label="Last Name"
        description="Type your sur name"
        v-model="form.lastName"
      />
      <InputText
        :position="position"
        :y="220"
        label="Occupation"
        description="Type your sur name"
        v-model="form.occupation"
      />
      <InputText
        :position="position"
        :y="330"
        label="Avatar URL"
        description="Enter the image URL"
        v-model="form.photo"
      />

      <!-- Button -->
      <SubmitButton
        :position="position"
        @click="pressButton"
        @keypress.enter="pressButton"
        @keypress.space="pressButton"
      />
    </svg>
  </main>
</template>

<script setup lang="ts">
import ListItem from "@/components/list-item/ListItem.vue";
import Header from "../components/header/Header.vue";
import InputText from "@/components/input-text/input-text.vue";

import useComputeSVG from "../helpers/compute-svg-path.ts";
import { ref, type Ref, reactive, type Reactive } from "vue";

import { type TItem } from "@/components/list-item/ListItem.vue";
import SubmitButton from "@/components/submit-button/submit-button.vue";

const computeSVG1 = useComputeSVG();
const position = computeSVG1.position;

const items: Ref<TItem[]> = ref([
  {
    id: 1,
    firstName: "Darth",
    lastName: "Vader",
    occupation: "Luke`s Father",
    photo:
      "https://nsabers.com/cdn/shop/articles/bebec223da75d29d8e03027fd2882262.png?v=1708781179&width=1000",
  },
  {
    id: 2,
    firstName: "Captain",
    lastName: "America",
    occupation: "Super Hero",
    photo:
      "https://cdn.sortiraparis.com/images/1001/69688/1054625-a-la-tele-ce-soir-captain-america-civil-war-les-avengers-se-dechirent-sur-tmc.jpg",
  },
]);

const form: Reactive<TItem> = reactive({
  id: new Date().getTime(),
  firstName: "",
  lastName: "",
  occupation: "",
  photo: "",
});

function pressButton() {
  items.value.push({ ...form });
  resetForm();
}

function resetForm() {
  form.id = new Date().getTime();
  form.firstName = "";
  form.lastName = "";
  form.occupation = "";
  form.photo = "";
}
</script>
<style>
.HomeView {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #f00; */
  width: 100%;
  height: 100%;
}

.HomeView h2 {
  color: var(--primary-color);
  margin: 0;
  padding: 0;
  font-weight: bold;
}

.HomeView .form-svg {
  width: 100%;
  height: 100%;
  margin-top: 20px;
}

.HomeView .stroke3 {
  fill: none;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: var(--secondary-color);
}
.HomeView .stroke1 {
  fill: none;
  stroke-width: 1px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: var(--secondary-color);
}

.HomeView .listContainer {
  background-color: #0f0;
  width: 100%;
}

/** Button */
.Button .buttonStroke {
  fill: #00000000;
  stroke: var(--secondary-color);
  stroke-width: 1;
  stroke-linecap: round;
  stroke-miterlimit: 1;
}
.Button .buttonStrokeOutter {
  fill: none;
  stroke: var(--secondary-color);
  stroke-width: 1;
  stroke-linecap: round;
  stroke-miterlimit: 1;
  stroke-dasharray: 60, 60;
  stroke-dashoffset: 0;
  paint-order: markers stroke fill;
  transition: stroke-width 0.3s;
}

.Button .buttonIcon {
  fill: var(--secondary-color);
}
.Button {
  cursor: pointer;
}
.Button:is(:hover, :focus-within) {
  .buttonIcon {
    fill: var(--primary-color);
  }
  .buttonStrokeOutter {
    stroke: var(--primary-color);
    stroke-width: 5;
  }
}
</style>
