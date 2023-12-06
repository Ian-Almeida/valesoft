<template>
  <div class="w-screen h-fit flex items-center justify-center flex-col">
    <div class="flex gap-4 px-6 pt-6 items-center">
      <div class="w-40 mmd:w-56 flex flex-col">
        <div class="text-primary font-black text-2xl mmd:text-3xl">Nós somos a Valesoft</div>
        <div class="text-[6px] text-justify mt-2 mmd:w-44">
          A inovadora tecnologia da Valesoft pode ajudá-lo a entender melhor como os itens e mercadorias se movem, rastreando seus caminhos ao longo da cadeia logística em tempo real.
          <br>
          <br>
          Possuímos a solução completa, desde os mais variados tamanhos e aplicações de chip à flexibilidade dos portões RFID, onde os dados podem ser coletados de vários produtos e locais.
        </div>

        <button class="w-fit bg-primary rounded flex text-[6px] p-1 px-2 gap-1 mt-4  items-center justify-center">
          <svg class="w-2 h-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <div>
            Entre em contato
          </div>
          
        </button>
      </div>
      
      <div class="relative w-fit h-fit">
        <div class="leaf-top-right bg-primary absolute -z-10 right-4"></div>
        <img class="w-9/12 mmd:w-10/12" src="assets/img1.png">
        <div class="leaf-bottom-left bg-secondary absolute -z-10 left-0 -bottom-2"></div>
      </div>
    </div>

    <p class="text-[5px] text-center my-2 mt-4 px-6">Clientes | Parceiros</p>
    <div class="flex gap-2 mb-4 px-6">
      <button class="w-fit h-3 p-2 rounded bg-secondary text-center text-[5px]">Logo parceira</button>
      <button class="w-fit h-3 p-2 rounded bg-secondary text-center text-[5px]">Logo parceira</button>
      <button class="w-fit h-3 p-2 rounded bg-secondary text-center text-[5px]">Logo parceira</button>
      <button class="w-fit h-3 p-2 rounded bg-secondary text-center text-[5px]">Logo parceira</button>
      <button class="w-fit h-3 p-2 rounded bg-secondary text-center text-[5px]">Logo parceira</button>
      <button class="w-fit h-3 p-2 rounded bg-secondary text-center text-[5px]">Logo parceira</button>
    </div>

    <div class="relative w-full flex flex-col items-center justify-center">
      <!-- <img class="absolute -top-36 -z-30 w-full object-cover" src="assets/bg-shape1-large.svg"> -->
      <img class="absolute -top-56 -z-30 w-fit object-cover" src="assets/bg-shape1.png">
      <img class="absolute top-80 -z-20 w-fit object-cover" src="assets/bg-shape2.png">
      <img class="absolute top-[400px] -z-10 w-fit object-cover" src="assets/bg-shape3.png">
      <!-- <img class="absolute" src="assets/bg-shape1.png"> -->
      
      <div class="relative flex items-center justify-center top-16 flex-col gap-2">
        <p class="text-[8px] flex gap-1 text-white">
          <img src="assets/light_bulb.svg">
          O que fazemos?
        </p>
        <p class="text-primary font-black text-2xl">Nossas Soluções</p>
      </div>
    </div>
  </div>
  
  
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped>
.leaf-top-right {
  @apply rounded-b-2xl rounded-t-2xl rounded-tr-none w-8 h-8;
}

.leaf-top-left {
  @apply rounded-b-2xl rounded-t-2xl rounded-tl-none w-8 h-8;
}

.leaf-bottom-right {
  @apply rounded-b-2xl rounded-t-2xl rounded-br-none w-8 h-8;
}

.leaf-bottom-left {
  @apply rounded-b-2xl rounded-t-2xl rounded-bl-none w-8 h-8;
}

button {
  color: white;
}
</style>