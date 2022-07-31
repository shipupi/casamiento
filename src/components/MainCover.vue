<template>
  <section class="w-full h-screen">
    <section class="container-section h-screen grid content-center">
      <div 
        class="text-center text-black bg-opacity-50 backdrop-blur-sm rounded-3xl pt-20">
        <h1 class="tangerine-font text-title font-bold">{{ couples.join(' & ') }}</h1>
        <img src="@/assets/images/flores.png" class=" w-6/12 md:w-6/12 mx-auto">
        <div class="text-sm">
          <p class="font-medium"></p>
          <p class="font-medium my-2 text-lg">Hola{{ query.first }}!</p>
          <p class="font-medium my-2 text-lg">Te invitamos a nuestro</p>
          <p class="font-medium my-2 text-lg">Casamiento!</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import decoration from '@/assets/svg/decoration-2.svg'

const couples = ['Chelu', 'Brian']

const route = useRoute()
let query = computed(() => route.query)

if ( route.query.first === undefined ) query = { first: '' }

</script>
