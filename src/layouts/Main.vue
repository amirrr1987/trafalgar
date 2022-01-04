<template>
  <main class="bg-white grid auto-rows-max gap-y-5 p-5">
    <div class="grid auto-rows-max gap-y-3">
    <div class="grid auto-rows-max gap-y-3">
      <div class="capitalize font-bold text-lg text-primary-dark">software knowledge</div>
      <div class="grid grid-cols-max-1fr gap-x-2 gap-y-1 px-3 items-center">
        <div class="font-medium text-primary-dark">Basic:</div>
        <div class="text-sm text-gray-light">HTML, CSS, javaScript </div>
        <div class="font-medium text-primary-dark">CSS:</div>
        <div class="text-sm text-gray-light">Flex Box, Grid Layout, Animation, BEM, SCSS</div>
        <div class="font-medium text-primary-dark">CSS Framework:</div>
        <div class="text-sm text-gray-light">Bootstrap, TailwindCSS, Bulma</div>
        <div class="font-medium text-primary-dark">javaScript</div>
        <div class="text-sm text-gray-light">Bom, Dom, Axios, ES6</div>
        <div class="font-medium text-primary-dark">Vue.js</div>
        <div class="text-sm text-gray-light">Vue Option API,Vue Composition API, Vue-Router, Vuex</div>
        <div class="font-medium text-primary-dark">Vue.js Framework:</div>
        <div class="text-sm text-gray-light">Vuetify, Ant Desgin, BootstrapVue</div>
        <div class="font-medium text-primary-dark">Protocol:</div>
        <div class="text-sm text-gray-light">REST</div>
        <div class="font-medium text-primary-dark">Control Version:</div>
        <div class="text-sm text-gray-light">Git, Git Flow</div>
      </div>
    </div>

<hr class="mx-5">
      <div class="capitalize font-bold text-lg text-primary-dark">experience</div>

      <ExperienceItem
        office="hacoupian"
        officeUrl="http://hacoupian.net/"
        description="In ERP Web Application : Create customer survery module, Create laundery management panel admin, Create employment modele"
        technology="Vue.js Compotion Api, TypeScript, Ant Design Vue, Tailwind, LESS, SCSS "
        begin="Apr, 2021"
        month="8"
      />
      <ExperienceItem
        office="Asrevira"
        officeUrl="https://asrevira.com/"
        description="Protal Application width 4 user accessibility"
        technology="Vue.js, Vuetify, Vuex, SCSS"
        begin="Sep, 2020"
        end="May, 2021"
        month="8"
      />
      <ExperienceItem
        title="Web Developer"
        office="HakimTejarat"
        officeUrl="http://hakimtejarat.com/"
        description="Create local Web Applications for user and create website"
        technology="Vue.js, HTML, bootstrap, SCSS, Wordpress "
        begin="Jun, 2019"
        end="Sep, 2020"
        month="14"
      />
      <ExperienceItem
        title="Front End Developer"
        office="ABC Startup Accelerator"
        officeUrl="http://www.ablockchain.center/"
        description="create Web and Landing page for startups, create cryptocurrency stratup front-end"
        technology="HTML, CSS, javaScript, Bootstrap"
        begin="Sep, 2018"
        end="Jun, 2019"
        month="8"
      />
      <ExperienceItem
        title="Technician"
        office="Shalchilar"
        officeUrl="https://www.shalchilar.net/"
        description="Update Website"
        technology="Ventilator Technician : learn new desvice and repair"
        begin="May, 2016"
        end="Oct , 2018"
        month="29"
      />
      <ExperienceItem
        title="IT"
        office="Ansar Hoveze"
        officeUrl="https://bayatechgroup.com/bayatek-company/"
        description="handle Website width wordpress and fix users issuse"
        technology="HTML, CSS, javaScript, Bootstrap, Wordpress, Network+"
        begin="Oct, 2015"
        end="Jun, 2016"
        month="6"
      />
      <ExperienceItem
        title="Help Desk"
        office="Mofid middle school"
        officeUrl="https://mofidsch.ir/m1/"
        description="Network: fix users issuse and interm HTML CSS"
        technology="HTML, CSS,Network+"
        begin="Aug, 2014"
        end="Sep, 2015"
        month="12"
      />
      <ExperienceItem
        title="HelpDesk"
        office="Farzanegan Pouya High School"
        officeUrl="http://www.farzaneganepoya.ir/school/#/Frontpage"
        description="fix users issue"
        technology="Network+"
        begin="Sep, 2012"
        end="Sep, 2013"
        month="12"
      />

    </div>

  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ExperienceItem from "./../components/ExperienceItem.vue";

export default defineComponent({
  name: "Main",
  components: {
    ExperienceItem,
  },
  setup() {},
});
</script>
<style>
table,
td,
th {
  border: 1px solid black;
}
table {
  border-collapse: collapse;
}
</style>