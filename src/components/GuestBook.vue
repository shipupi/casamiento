<style scoped>

.frame {
  @apply w-4/12 rotate-180;
}

.input-wrapper {
  @apply w-full flex flex-wrap gap-1 mb-3;
}

label {
  @apply text-gray-600 font-medium;
}

input, textarea, select, option {
  @apply px-2 py-3 rounded-lg bg-gray-800 border border-gray-100 shadow-lg duration-300 focus:border-gray-500 text-gray-200 placeholder:text-gray-400;
}

</style>

<template>
  <section class="w-full xl:bg-slate-100 pt-5">
    <section class="container-section xl:bg-slate-100">
      <HeaderSection title="Confirma tu asistencia!" subtitle="Para la tranquilidad del evento, se solicita a los invitados que aseguren su asistencia a nuestro evento." />
      <!-- Form -->
      <form 
        ref="form"
        @submit="sendMessage"
        class="w-10/12 mx-auto mt-6">
        <!-- Alert -->
        <Alert :statusResponse="statusResponse" :showAlert="showAlert" v-on:close="showAlert = false" />
        <!-- Guest Name -->
        <div class="input-wrapper" data-aos="zoom-in">
          <label class="w-full" for="Nombre">Nombre</label>
          <input class="w-full" v-model="Nombre" placeholder="Tu nombre completo" name="Nombre" id="Nombre" type="text" required>
        </div>
        <input type="hidden" id="Fecha" name="Fecha" v-model="Fecha"> 
        <!-- Guest Status -->
        <div class="input-wrapper" data-aos="zoom-in">
          <label class="w-full" for="Estado">Presencia</label>
          <select class="w-full" v-model="Estado" name="Estado" id="Estado" required>
            <option value="Presente">Presente</option>
            <option value="Ausente">Ausente</option>
          </select>
        </div>
        <label class="w-full text-bold" >Especificaciones Alimenticias</label>
        <div class="input-wrapper flex flex-col" data-aos="zoom-in">
          <div v-for="food in foods" :key="food" class="flex items-center align-center">
            <input class="mr-1" type="checkbox" :id="food" :value="food" v-model="Dieta"/>
            <label class="w-auto" :for="food">{{food}}</label>
          </div>
        </div>
        <!-- Guest Message -->
        <div class="input-wrapper" data-aos="zoom-in">
          <label class="w-full" for="Comentarios">Comentario</label>
          <textarea class="w-full" placeholder="Si necesitas dejar un comentario, aca podes hacerlo" v-model="Comentarios" name="Comentarios" id="Comentarios" cols="30" rows="5"></textarea>
        </div>
        <!-- Submit -->
        <button
          :disabled="sending" 
          data-aos="zoom-in"
          class="w-full bg-gray-800 text-gray-100 mt-6 rounded-lg py-2 font-medium pointer active:scale-90 border-gray-500 duration-300" type="submit">
          <i v-if="!sending" class="fa fa-paper-plane mr-1"></i>
          <i v-else class="fa fa-spinner fa-spin mr-1"></i>
          Confirmar asistencia
        </button>
      </form>
      <!-- Gift Section -->
      <!-- Message Box -->
      <!--MessagesBox :messages="messages" -->
      <!-- Frames -->
      <div class="w-full text-center pb-12 mt-12">
        <p class="text-sm text-amber-600 font-medium">Shipupi &copy; 2022</p>
      </div>
    </section>
  </section>
</template>

<script setup>

import { computed } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import HeaderSection from '@/components/HeaderSection.vue'
import Alert from '@/components/Alert.vue'
//import Gift from '@/components/Gift.vue'

// Form handler
const form = ref(null)
const Nombre = ref(null)
const Comentarios= ref(null)
const Estado = ref('Presente')
const Fecha = ref(new Date())
const Dieta = ref([]);
const foods = ref([
  'Vegetariano', 'Kosher', 'Celiaco', 'Menu Infantil (Menor a 5 años)', 'Otro (Agregar en comentarios)'
])
// Alert handler
const statusResponse = ref(false)
const showAlert = ref(false)

const sending = ref(false)

//URL
const scriptURL = "https://script.google.com/macros/s/AKfycby1ovbqWQ5T5wkb8zGGA7oK8Qv3nMUtLz1us1SwIAF7H0H0NwQtaoB7N3RptNZElaqP/exec"
const sendMessage = ( evt ) => {
  if (sending.value) {
    return;
  }
  evt.preventDefault()
  sending.value = true;
  // Post form
  const formData = new FormData(form.value);
  formData.append('Dieta', Dieta.value.join(', '))
  fetch(scriptURL, { method: 'POST', body:formData})
    .then( res => {
      sending.value = false;
      statusResponse.value = true
      showAlert.value = true
      })
    .catch( err => {
      sending.value = true;
      statusResponse.value = false
      showAlert.value = true
    })


}
</script>
