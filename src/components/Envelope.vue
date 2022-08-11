<template>
  <section class="w-full xl:bg-slate-100 pt-12 pb-5">
    <section class="section-container">
      <HeaderSection class="max-w-9/12" title="Regalos" subtitle="Lo mas importante es que vengas! Si ademas queres sponsorear nuestro proyecto de vida, podes hacernos una transferencia:"></HeaderSection>
      <section class="">
        <template v-for="(wallet, x) in wallets" :key="x">
          <div data-aos="zoom-in" class="w-8/12 text-center border border-gray-200 mx-auto p-5 mb-5 bg-gray-100 shadow-lg rounded-tl-3xl rounded-br-3xl">
            <img :src="wallet.thumb" :alt="wallet.platform" class="w-5/12 mx-auto mb-3">
            <Clipboard header="CBU" :content="wallet.number"></Clipboard>
            <Clipboard header="Alias" :content="wallet.alias"></Clipboard>
            <p class="font-bold text-sm text-slate-800">O podes dejarnos un sobrecito</p>
            <img src="@/assets/images/sobre.png" alt="$$" class="w-5/12 mx-auto mb-3">
          </div>
        </template>
      </section>
    </section>
    
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Clipboard from '@/components/Clipboard.vue'

const wallets = [
  {
    thumb: 'wallets/santander.svg',
    platform: 'Santander',
    number: '0720210288000001131372',
    alias: 'PRISMA.MAMA.LANA'
  }
]
</script>
