<template>
  <section class="w-full bg-cream">
    <section class="container-section pb-12">
      <HeaderSection text-color="text-black" subtitle="Los invitamos a los siguientes eventos:" title="Cronograma"></HeaderSection>
      <Card>
        <template v-slot:body>
          <div class="px-6 py-8 text-center text-sm font-medium" v-for="(timeline, index) in timelines" :key="index">
            <section data-aos="fade-up">
              <h1 class="text-xl satisfy-font text-amber-400">{{ timeline.title }}</h1>
              <p class="font-medium text-black">{{ timeline.date }}</p>
              <p class="font-medium text-black">{{ timeline.time }}</p>
              <img src="@/assets/images/flores.png" class="w-4/12 md:w-4/12 mx-auto rotate-180 ">
              <p class="text-amber-500">{{ timeline.location }}</p>
              <p class="text-black">{{ timeline.address }}</p>
              <a class="btn bg-rosa text-amber-500" :href="timeline.mapUrl" target="_blank">
                <i class="fa-solid fa-map"></i>
                Ver Mapa
              </a>
              <img src="@/assets/images/flores.png" class="w-4/12 md:w-4/12 mx-auto">
            </section>
          </div>
        </template>
        <template v-slot:footer>
          <section class="">
            <Countdown></Countdown>
            <!-- Button to Guest Book -->
            <div class="px-6 pt-5 pb-8 text-center">
              <p class="text-sm text-black">Por favor confirmar asistencia</p>
              <button @click="goToGuestBook" class="btn bg-rosa text-amber-500">
                <i class="fa-solid fa-clipboard-check"></i>
                Confirmar
              </button>
            </div>
            <img src="@/assets/images/couples.jpg" alt="">
          </section>
        </template>
      </Card>
    </section>
  </section>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import Card from '@/components/Card.vue'
import Countdown from '@/components/Countdown.vue'
import decoration from '@/assets/svg/decoration-2.svg'

const timelines = ref(null)
onMounted(() => {
  axios.get('contents/timelines.json')
    .then( res => timelines.value = res.data.timelines )
    .catch( err => alert(err) )
})

// Handler for navigate to guest book
const emits = defineEmits(['goToGuestBook'])

const goToGuestBook = () => setTimeout(() => { emits('goToGuestBook') }, 300)

</script>

<style scoped>

.btn {
  @apply active:scale-95 active:ring-gray-200 active:ring duration-300 rounded-3xl px-3 py-2 inline-block w-10/12 mt-4;
}

</style>