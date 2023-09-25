<template>
    <div class="w-screen h-screen  flex justify-center items-center">

        <form class="grid gap-4">
            <img class="w-30 mx-auto" src="@/assets/logo.png" title="trafalgar" alt="trafalgar">
            <input type="text" class="p-2 rounded w-80 border" placeholder="Enter your email">
            <input type="text" class="p-2 rounded w-80 border" placeholder="Enter your password">
            <button class="bg-blue text-white px-8 py-1 rounded w-max mx-auto capitalize">submit</button>
        </form>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>