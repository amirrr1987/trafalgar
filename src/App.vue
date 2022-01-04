<script setup lang="ts">
import Header from './layouts/Header.vue'
import Main from './layouts/Main.vue'
import Aside from './layouts/Aside.vue'
</script>

<template>

<div class="">home</div>

<div id="printMe" class="text-secondary overflow-hidden container mx-auto relative h-screen grid print grid-cols-app grid-rows-1 gap-px font-body bg-gray-200 border border-gray-700">


<!-- <Header/> -->
<Aside/>
<Main/>

</div>
<button v-print class="print:hidden bg-green-500 px-8 py-2 fixed left-0 bottom-0">Print</button>
</template>
<style>

/* #printMe::before{
    content: '';
    background-position: right top;
    background-image: url('src/assets/img/top.svg');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;

}
#printMe::after{
    content: '';
    background-position: left top;
    background-image: url('src/assets/img/bottom.svg');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
} */
</style>