<template>
  <nav class="shadow py-4">
    <div class="container mx-auto px-4 flex items-center gap-x-4">
      <NuxtLink to="/"
        ><img
          class="w-12 h-12 object-contain"
          src="../assets/logo.png"
          title="trafalgar"
          alt="trafalgar"
      /></NuxtLink>
      <ul class="flex-1 flex gap-x-4">
        <li><NuxtLink to="/" class="capitalize">home</NuxtLink></li>
        <li><NuxtLink to="#service" class="capitalize">service</NuxtLink></li>
        <li><NuxtLink to="#healthcare" class="capitalize">healthcare</NuxtLink></li>
        <li><NuxtLink to="#download" class="capitalize">download</NuxtLink></li>
        <li><NuxtLink to="#articles" class="capitalize">articles</NuxtLink></li>
      </ul>
      <ul class="flex gap-x-4">
        <li><NuxtLink to="/signup" class="capitalize">signup</NuxtLink></li>
        <li><NuxtLink to="/register" class="capitalize">register</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>
