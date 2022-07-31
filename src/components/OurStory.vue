<template>
  <section class="w-full">
    <section class="container-section">
      <HeaderSection title="Kisah Cinta Kami" />
      <div class="mt-6">
        <Card>
          <template v-slot:body>
            <template v-for="(story, x) in stories" :key="x">
              <div 
                data-aos="zoom-in"
                class="w-10/12 text-center text-sm p-4 mx-auto mb-4">
                <img src="@/assets/images/flores.png" class="w-6/12 md:w-6/12 mx-auto">
                <p class="satisfy-font text-3xl text-amber-500 text-xl">{{ story.title }}</p>
                <p class="font-medium mb-0">{{ story.place }}</p>
                <p class="text-justify">{{ story.description }}</p>
              </div>
            </template>
          </template>
          <template v-slot:footer><img src="@/assets/images/couples.jpg" alt=""></template>
        </Card>
      </div>
    </section>
  </section>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import Card from '@/components/Card.vue'
import decoration from '@/assets/svg/decoration-2.svg'

const stories = ref(null)
onMounted(() => {
  axios.get('contents/story.json')
    .then( res => stories.value = res.data.stories )
    .catch( err => alert(err) )
})

</script>
