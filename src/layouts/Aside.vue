<template>
  <aside class="grid grid-rows-silde gap-y-5 bg-primary-lightest  py-3 px-5">
    <div class="">
      <img
        class="w-36 h-36 rounded-full m-auto "
        src="@/assets/img/me.jpg"
        alt=""
      >
      <div class="text-center ">
        <div class="font-bold capitalize text-lg mt-3 text-primary-dark">amir maghami</div>
        <div class="capitalize text-base text-primary-dark ">front end developer </div>
        <div class="text- font-light text-gray">
          (
            <span class="text-green-600">Vue</span>
             <span class="text-yellow-500">.js</span>
          )
        </div>
      
        
    
      </div>
    </div>
      <hr>
    <div class="">
      <div class="capitalize font-bold text-primary-dark">about me:</div>
      <div class="p-1 text-xs font-light text-gray">
        This is Amir Maghami. <br> I'm a Front End Developer with 5 years commercial experience.<br>my skill is Vue.js and CSS animation. I hope help you to create intersting apps..
      </div>
    </div>
    <div class="">
      <div class="capitalize font-bold text-primary-dark">contact me:</div>
      <div class="p-1 text-xs font-light  text-gray">
        <div class="flex items-center">
          <a href=""><i class="icon--phone"></i></a>
          <span class="ml-1">+989198881400</span>
        </div>
        <div class="flex items-center">
          <a href=""><i class="icon--mail"></i></a>
          <span class="ml-1">Maghami.A1987@gmail.com</span>
        </div>
      </div>
    </div>
    <div class="">
      <div class="capitalize font-bold text-primary-dark">skill summery:</div>
      <div class="p-1 text-xs capitalize font-light  text-gray">
        <div class="">web platfrom</div>
        <div class="">mobile platfrom</div>
      </div>
    </div>
    <div class="">
      <div class="capitalize font-bold text-primary-dark">education</div>
      <div class="p-1 text-xs font-light text-gray ">
        IT Bachelor’s degree at University of Applied Science and Technology
      </div>
    </div>
    <div class="grid gap-y-1 text-center auto-rows-min py-5">
      <a
        href="https://stackoverflow.com/users/11471489/amir-maghami"
        target="_blank"
        class="flex items-center"
      >
        <i class="icon--stackoverflow  text-primary-dark"></i>
        <span class="text-xs text-gray ">http://shorturl.at/rBCF5</span>
      </a>
      <a
        href="https://github.com/Amirrr1987"
        target="_blank"
        class="flex items-center"
      >
        <i class="icon--github  text-primary-dark"></i>
        <span class="text-xs text-gray ">https://github.com/Amirrr1987</span>
      </a>
      <a
        href="https://codepen.io/Amirrr1987"
        target="_blank"
        class="flex items-center"
      >
        <i class="icon--codeopen  text-primary-dark"></i>
        <span class="text-xs text-gray ">https://codepen.io/Amirrr1987</span>
      </a>
      <a
        href="https://www.codewars.com/users/Amirrr1987"
        target="_blank"
        class="flex items-center"
      >
        <CodeWars class="  text-primary-dark"/>
        <span class="text-xs text-gray ">https://codepen.io/Amirrr1987</span>
      </a>
    </div>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Star from "./../components/Star.vue";
import CodeWars from './../components/CodeWars.vue'
export default defineComponent({
  name: "Aside",
  components: { Star,CodeWars },
  setup() {},
});
</script>
