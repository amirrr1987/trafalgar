<template>
<span  class="flex justify-evenly w-28">

<svg
v-for="item in 5" :key="item"
    width="20px"
    height="17.5px"
    viewBox="0 0 300 275"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <polygon
      fill="transparent"
      stroke="#34495E"
      stroke-width="10"
      color="orange"
      points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111"
    />
  </svg>
 
</span>
</template>
<script lang="ts">
import {  defineComponent, } from "vue";
export default defineComponent({
  name: "Star",
  props:{
    active:{type: Number, default:0}
  },
  setup() {

  },
});
</script>
