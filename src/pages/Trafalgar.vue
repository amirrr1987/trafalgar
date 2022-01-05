<template>
  <header class="relative">
    <nav class="bg-red-400 hidden absolute w-full h-screen">
      <div class="container mx-auto px-5 md:px-0">
       <div class="grid grid-cols-2 items-center">
            <div
                class=" capitalize text-xl bg-blue-500 rounded-full text-white w-8 h-8 flex justify-center items-center">
                t</div>
            <h1 class="">Trafalgar</h1>
        </div>
        <ul class="grid auto-rows-fr   text-center bg-blue-500">
            <li class="mx-4"><a href="" class="">Home</a></li>
            <li class="mx-4"><a href="" class="">Find a doctor</a></li>
            <li class="mx-4"><a href="" class="">Apps</a></li>
            <li class="mx-4"><a href="" class="">Testimonials</a></li>
            <li class="mx-4"><a href="" class="">About us</a></li>
        </ul>
      </div>
    </nav>

    <div class="container mx-auto px-5 md:px-0">
      <div class="grid md:grid-cols-2 items-center">
        <img
          src="@/assets/img/trafalgar-header.svg"
          alt=""
          class="mb-10 md:mb-0"
        >
        <div class="md:px-32">
          <h3 class="text-4xl text-center md:text-left md:text-6xl font-bold mb-5 text-black">
            Virtual healthcare
            for you
          </h3>
          <p class="text-[#7D7987] mb-10 text-center md:text-left">
            Trafalgar provides progressive, and affordable
            healthcare, accessible on mobile and online
            for everyone
            <a href="https://github.com/amirrr1987/trafalgar">
              <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
             </a>
          </p>
          <button class="bg-[#458FF6] text-white block mx-auto md:ml-0 px-8 py-3 rounded-3xl">Consult today</button>
          
        </div>
      </div>
    </div>

  </header>
  <main class="">
    <section class="py-16">
      <div class="container mx-auto px-5 md:px-0">
        <h3 class="text-black text-4xl font-bold capitalize text-center">our service</h3>
        <hr class="border-2 border-black w-36 mx-auto my-10">
        <p class="text-base text-[#7D7987] md:px-80 text-center mb-24">
          We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
        </p>
        <div class="grid md:grid-cols-3 gap-24 md:px-48 mb-20">
          <div class="flex flex-col items-center">
            <img
              class="mb-4"
              src="@/assets/img/icon-1.svg"
              alt=""
            >
            <h4 class="text-black mb-2">Consultation</h4>
            <p class="text-[#7D7987] text-sm text-center">
              Free consultation with our trusted doctors and get the best recomendations
            </p>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="mb-4"
              src="@/assets/img/icon-2.png"
              alt=""
            >
            <h4 class="text-black mb-2">Online pharmacy</h4>
            <p class="text-[#7D7987] text-sm text-center">Buy  your medicines with our mobile application with a simple delivery system</p>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="mb-4"
              src="@/assets/img/icon-3.png"
              alt=""
            >
            <h4 class="text-black mb-2">Search doctor</h4>
            <p class="text-[#7D7987] text-sm text-center">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="mb-4"
              src="@/assets/img/icon-4.png"
              alt=""
            >
            <h4 class="text-black mb-2">Tracking</h4>
            <p class="text-[#7D7987] text-sm text-center">
Track and save your medical history and health data             </p>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="mb-4"
              src="@/assets/img/icon-5.png"
              alt=""
            >
            <h4 class="text-black mb-2">Emergency care</h4>
            <p class="text-[#7D7987] text-sm text-center">You can get 24/7 urgent care for yourself or your children and your
lovely family</p>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="mb-4"
              src="@/assets/img/icon-6.png"
              alt=""
            >
            <h4 class="text-black mb-2">Details info</h4>
            <p class="text-[#7D7987] text-sm text-center">Free consultation with our trusted doctors and get the best recomendations</p>
          </div>
        </div>
        <button class="border border-[#458FF6] mx-auto block px-20 py-3 rounded-full text-[#458FF6]">Learn more</button>
      </div>
    </section>
    <section class="py-16">
      <div class="container mx-auto px-5 md:px-0">
        <div class="grid md:grid-cols-2 md:items-center">
          <div class="mb-10 md:mb-0">
            <img
              src="@/assets/img/sec02.svg"
              title=""
              alt=""
              class=""
            >
          </div>
          <div class="text-center md:text-left">
            <h3 class="text-3xl md:text-4xl font-bold leading-normal">Leading healthcare <br class="hidden md:inline-block"> providers</h3>
            <hr class="border-2 border-black my-6 mx-auto md:ml-0 w-36">
            <p class="text-[#7D7987] md:pr-72 mb-16">
              Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride
              in the solutions we deliver
            </p>
            <button class="border border-[#458FF6]  px-20 py-3 rounded-full text-[#458FF6]">Learn more</button>
          </div>
        </div>

      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-5 md:px-0">
        <div class="grid md:grid-cols-2 md:items-center">
          <div class="row-start-2 md:row-start-1 md:w-1/2 text-center md:text-left">
            <h3 class="text-4xl font-bold leading-normal">Download our
              mobile apps</h3>
            <hr class="border-2 border-black my-6 w-36">
            <p class="text-[#7D7987] mb-16">
              Our dedicated patient engagement app and
              web portal allow you to access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </p>
            <button class="border border-[#458FF6]  px-20 py-3 rounded-full text-[#458FF6]">Download</button>
          </div>
          <div class="row-start-1 mb-10 md:mb-0">
            <img
              src="@/assets/img/sec03.svg"
              title=""
              alt=""
              class=""
            >
          </div>
        </div>
      </div>
    </section>
    <section class="py-16">
      <div class="container mx-auto px-5 md:px-0">
        <h3 class="font-bold text-4xl text-center">Check out our latest article</h3>
        <hr class="border border-gray-600 w-16 mt-6 mb-16 mx-auto block">
        <div class="grid md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-x-12 mb-10">
          <div class="">
            <img
              src="@/assets/img/image3.png"
              title=""
              alt=""
              class="w-full rounded-t-xl"
            >
            <div class="p-5">
              <h4 class="font-bold text-xl mb-3">Disease detection, check
                up in the laboratory</h4>
              <p class="font-light  text-gray-500 text-base leading-7 mb-7">
                In this case, the role of the health laboratory is very important to do
                a disease detection...
              </p>
              <a
                href=""
                class="flex items-center justify-between text-blue-400 w-28"
              >
                Read more
                <img
                  src="@/assets/img/morde-arow.svg"
                  alt=""
                >
              </a>
            </div>
          </div>
          <div class="">
            <img
              src="@/assets/img/article1.jpg"
              title=""
              alt=""
              class="w-full rounded-t-xl"
            >
            <div class="p-5">
              <h4 class="font-bold text-xl mb-3">Disease detection, check
                up in the laboratory</h4>
              <p class="font-light  text-gray-500 text-base leading-7 mb-7">
                In this case, the role of the health laboratory is very important to do
                a disease detection...
              </p>
              <a
                href=""
                class="flex items-center justify-between text-blue-400 w-28"
              >
                Read more
                <img
                  src="@/assets/img/morde-arow.svg"
                  alt=""
                >
              </a>
            </div>
          </div>
          <div class="">
            <img
              src="@/assets/img/article2.png"
              title=""
              alt=""
              class="w-full rounded-t-xl"
            >
            <div class="p-5">
              <h4 class="font-bold text-xl mb-3">Disease detection, check
                up in the laboratory</h4>
              <p class="font-light  text-gray-500 text-base leading-7 mb-7">
                In this case, the role of the health laboratory is very important to do
                a disease detection...
              </p>
              <a
                href=""
                class="flex items-center justify-between text-blue-400 w-28"
              >
                Read more
                <img
                  src="@/assets/img/morde-arow.svg"
                  alt=""
                >
              </a>
            </div>
          </div>
        </div>
        <a
          href=""
          class="text-blue-400 border border-blue-400 rounded-full w-44 h-12 flex justify-center items-center mx-auto"
        >View all</a>
      </div>
    </section>

  </main>
  <footer class="from-[#5A98F2] to-[#67C3F3] bg-gradient-to-t py-16 text-white relative">
    <div class="container mx-auto px-5 md:px-0">
      <div class="grid gap-y-5 md:gap-y-0 md:grid-cols-5 md:place-items-center">

        <div class="text-center md:text-left md:col-span-2">
          <h4 class="text-2xl font-bold mb-3">
            <div class="w-8 h-8 bg-white text-[#5B9BF3] rounded-full inline-flex justify-center items-center capitalize">t</div>
            Trafalgar
          </h4>
          <p class="md:w-4/5 mb-8">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
            for everyone
          </p>
          <span class="">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </span>
        </div>
        <div class="text-center">
          <h5 class="font-bold text-lg mb-3">Company</h5>
          <ul class="grid gap-y-2">
            <li>About</li>
            <li>Testimonials</li>
            <li>Findza doctor</li>
            <li>Apps</li>
          </ul>
        </div>
        <div class="text-center">
          <h5 class="font-bold text-lg mb-3">Region</h5>
          <ul class="grid gap-y-2">
            <li>Indonesia</li>
            <li>Singapore</li>
            <li>Hongkong</li>
            <li>Canada</li>
          </ul>
        </div>
        <div class="text-center">
          <h5 class="font-bold text-lg mb-3">Help</h5>
          <ul class="grid gap-y-2">
            <li>Help center</li>
            <li>Contact support</li>
            <li>Instructions</li>
            <li>How it works</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="absolute right-0 bottom-0 grid grid-cols-4 gap-4">
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
      <div class="bg-gray-300 opacity-50 w-3 h-3 rounded-full"></div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Trafalgar",
  setup() {},
});
</script>
