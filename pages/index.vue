<template>
  <div >
    <div class="flex gap-3 px-6 pt-6">
      <div class="w-56">
        <div class="text-primary font-black text-4xl">Nós somos a Valesoft</div>
        <div class="text-[6px] text-justify mt-2 w-52">
          A inovadora tecnologia da Valesoft pode ajudá-lo a entender melhor como os itens e mercadorias se movem, rastreando seus caminhos ao longo da cadeia logística em tempo real.
          <br>
          <br>
          Possuímos a solução completa, desde os mais variados tamanhos e aplicações de chip à flexibilidade dos portões RFID, onde os dados podem ser coletados de vários produtos e locais.
        </div>

        <button class="bg-primary rounded flex text-[6px] p-1 px-2 gap-1 mt-4  items-center justify-center">
          <svg class="w-2 h-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <div>
            Entre em contato
          </div>
          
        </button>
      </div>
      
      <div class="relative h-fit top-4">
        <div class="leaf-top-right bg-primary absolute -z-10 -right-2"></div>
        <img src="assets/img1.png">
        <div class="leaf-bottom-left bg-secondary absolute -z-10 left-0 -bottom-4"></div>
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

    <div class="relative">
      <img class="absolute -top-36 -z-30" src="assets/bg-shape1.png">
      <img class="absolute top-80 -z-20" src="assets/bg-shape2.png">
      <img class="absolute top-[400px] -z-10" src="assets/bg-shape3.png">
    </div>
  </div>
  
  
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped>
.leaf-top-right {
  @apply rounded-b-2xl rounded-t-2xl rounded-tr-none w-11 h-11;
}

.leaf-top-left {
  @apply rounded-b-2xl rounded-t-2xl rounded-tl-none w-11 h-11;
}

.leaf-bottom-right {
  @apply rounded-b-2xl rounded-t-2xl rounded-br-none w-11 h-11;
}

.leaf-bottom-left {
  @apply rounded-b-2xl rounded-t-2xl rounded-bl-none w-11 h-11;
}

button {
  color: white;
}
</style>