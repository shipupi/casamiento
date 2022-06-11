<template>
  <section class="w-full bg-couples bg-cover h-screen">
    <section class="container-section h-screen grid content-end">
      <div 
        class="animate__animated animate__fadeInUpBig text-gray-100 text-center bg-zinc-500 bg-opacity-50 backdrop-blur-sm rounded-t-3xl px-6 py-10">
        <h1 class="tangerine-font text-title font-bold">{{ couples.join(' & ') }}</h1>
        <decoration class="fill-amber-400 mx-auto w-3/12 mb-3"></decoration>
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
