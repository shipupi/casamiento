<template>
  <section data-aos="fade-up" :class="props.textColor" class="sm:w-full w-9/12 px-4 mb-6 text-center flex justify-center flex-col items-center ml-auto mr-auto">
    <!-- Decoration -->
    <img src="@/assets/images/flores.png" class="w-6/12 md:w-6/12 mx-auto">
    <h1 class="satisfy-font text-4xl font-medium mb-5">{{ props.title }}</h1>
    <p class="text-sm" v-html="subtitle"/>
  </section>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    default: 'The Section'
  }, 
  subtitle: {
    type: String,
    default: 'Duis splople autem vel eum iriure Dapibus sit amet, tincidunt eu, nibh.'
  },
  textColor: {
    type: String,
    default: 'text-slate-800'
  }
})

</script>
