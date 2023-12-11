<template>
  <div class="w-screen h-fit flex items-center justify-center flex-col bg-slate-300">
    <!-- Nós somos -->
    <div class="flex gap-4 px-6 pt-6 items-center justify-around w-full">
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
      
      <div class="relative w-fit h-fit z-0">
        <div class="leaf-top-right w-8 h-8 bg-primary absolute -z-10 right-4"></div>
        <img class="w-9/12 mmd:w-10/12" src="assets/img1.png">
        <div class="leaf-bottom-left w-8 h-8 bg-secondary absolute -z-10 left-0 -bottom-2"></div>
      </div>
    </div>

    <!-- Parceiros -->
    <p class="text-[5px] text-center my-2 mt-4 px-6">Clientes | Parceiros</p>
    <div class="flex gap-2 mb-4 px-6 flex-wrap justify-center">
      <button class="w-fit h-3 p-2 rounded bg-secondary text-center text-[5px]">Logo parceira</button>
      <button class="w-fit h-3 p-2 rounded bg-secondary text-center text-[5px]">Logo parceira</button>
      <button class="w-fit h-3 p-2 rounded bg-secondary text-center text-[5px]">Logo parceira</button>
      <button class="w-fit h-3 p-2 rounded bg-secondary text-center text-[5px]">Logo parceira</button>
      <button class="w-fit h-3 p-2 rounded bg-secondary text-center text-[5px]">Logo parceira</button>
      <button class="w-fit h-3 p-2 rounded bg-secondary text-center text-[5px]">Logo parceira</button>
    </div>

    <!-- Nossas soluções -->
    <div class="relative w-full flex flex-col items-center justify-center">
      <!-- <img class="absolute -top-36 -z-30 w-full object-cover" src="assets/bg-shape1-large.svg"> -->
      <!-- <img class="absolute -top-36 -z-30 w-fit object-cover" src="assets/bg-shape1.png">
      <img class="absolute top-80 -z-20 w-fit object-cover" src="assets/bg-shape2.png">
      <img class="absolute top-[400px] -z-10 w-fit object-cover" src="assets/bg-shape3.png"> -->
      <!-- <img class="absolute" src="assets/bg-shape1.png"> -->
      
      <div class="relative flex items-center justify-center mt-16 flex-col gap-2">
        <p class="text-[8px] flex gap-1 text-white">
          <img src="assets/light_bulb.svg">
          O que fazemos?
        </p>
        <p class="text-primary font-black text-2xl">Nossas Soluções</p>

        <div class="flex gap-2 mt-4">

          <div class="hidden mmd:flex flex-col gap-1 mlg:gap-2 items-center justify-center">
            <div class="leaf-bottom-right w-9 h-9 mlg:w-11 mlg:h-11 bg-white"></div>
            <div class="leaf-top-right w-9 h-9 mlg:w-11 mlg:h-11 bg-primary"></div>
          </div>

          <div class="relative w-20 h-28 rounded-lg bg-primary mt-4 shadow-md">
            <div class="absolute w-8 h-8 rounded-full bg-white left-1/2 -translate-x-1/2 -top-4 shadow-md">
              <img class="relative w-4 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" src="assets/programmingarrows.svg">
            </div>
            <ul class="text-white text-[5px] p-3 pt-4 w-full">
              <li>Converse braveheart beepers</li>
              <li>Converse braveheart beepers</li>
              <li>Converse braveheart beepers</li>
              <li>Converse braveheart beepers</li>
            </ul>
          </div>

          <div class="relative w-24 h-36 rounded-lg bg-secondary shadow-md">
            <div class="absolute w-8 h-8 rounded-full bg-white left-1/2 -translate-x-1/2 -top-4 shadow-md">
              <img class="relative w-4 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" src="assets/codecircle.svg">
            </div>
            <ul class="text-white text-[4pt] p-5 pt-6 w-full">
              <li>Converse braveheart beepers</li>
              <li>Converse braveheart beepers</li>
              <li>Converse braveheart beepers</li>
              <li>Converse braveheart beepers</li>
            </ul>
          </div>

          <div class="relative w-20 h-28 rounded-lg bg-primary mt-4 shadow-md">
            <div class="absolute w-8 h-8 rounded-full bg-white left-1/2 -translate-x-1/2 -top-4 shadow-md">
              <img class="relative w-4 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" src="assets/candle.svg">
            </div>
            <ul class="text-white text-[5px] p-3 pt-4 w-full">
              <li>Converse braveheart beepers</li>
              <li>Converse braveheart beepers</li>
            </ul>
          </div>

          <div class="hidden mmd:flex flex-col gap-1 mlg:gap-2 items-center justify-center">
            <div class="leaf-bottom-left w-9 h-9 mlg:w-11 mlg:h-11 bg-white"></div>
            <div class="leaf-top-left w-9 h-9 mlg:w-11 mlg:h-11 bg-primary"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Processo contínuo -->
    <div class="relative px-8 msm:px-14 mt-12 flex flex-col gap-2 overflow-hidden py-10">
      <div class="absolute leaf-top-left w-16 h-16 mmd:w-20 mmd:h-20 bg-white -right-10"></div>
      <div class="absolute leaf-bottom-right w-16 h-16 mmd:w-20 mmd:h-20 bg-primary bottom-0 -left-10"></div>
      <div class="text-primary font-black text-xl">Processo contínuo</div>
      <div class="text-justify text-[10px]">
        Converse braveheart beepers bill gates generation Y trl. Macaulay culkin yin yang baywatch slacker. Spiked hair boy meets world hey arnold nike, animated gifs vcr wallet chains moby nylon windbreaker. Men in black super mario world michael jordan bubble tape, scrunchies light up sneakers vanilla ice buddy list. Personalized mixtapes t-shirts baby got back free willy.
        <br>
        <br>
        world michael jordan bubble tape, scrunchies light up sneakers vanilla ice buddy list. Personalized mixtapes t-shirts baby got back free willy.
      </div>
    </div>

    <!-- Sobre nós -->
    <div class="w-full h-fit px-8 msm:px-14 mt-6">

      <div class="flex text-[7px] text-white gap-1 w-full">
        <img class="" src="assets/people.svg">
        Sobre nós
      </div>

      <div class="font-black text-xl text-white w-1/2">Especialistas em RFID</div>
      
      <div class="text-justify text-[10px] text-white mt-4">
        Converse braveheart beepers bill gates generation Y trl. Macaulay culkin yin yang baywatch slacker. Spiked hair boy meets world hey arnold nike, animated gifs vcr wallet chains moby nylon windbreaker. Men in black super mario world michael jordan bubble tape, scrunchies light up sneakers vanilla ice buddy list. Personalized mixtapes t-shirts baby got back free willy.
      </div>

      <div class="relative flex gap-4 mt-10 justify-around">
        <div class="relative w-fit h-fit z-0">
          <div class="leaf-top-left w-8 h-8 bg-secondary absolute left-2 -z-10"></div>
          <img class="relative w-10/12 mmd:w-11/12 left-1/2 -translate-x-1/2" src="assets/img2.png">
        </div>
      
        <div class="z-0 relative w-fit">
          <div class="absolute bg-primary rounded-full w-5 h-5 flex items-center justify-center shadow-lg left-4">
            <img src="assets/light_bulb.svg">
          </div>
          <img class="relative w-10/12 mmd:w-11/12 left-1/2 -translate-x-1/2 -z-10" src="assets/img3.png">
          <div class="leaf-top-right w-6 h-6 mmd:w-9 mmd:h-9 mmd:-bottom-3 bg-secondary absolute right-2 -bottom-1 msm:right-4 mmd:right-2  "></div>
        </div>
      </div>

      <div class="text-justify text-[10px] text-white mt-8">
        Converse braveheart beepers bill gates generation Y trl. Macaulay culkin yin yang baywatch slacker. Spiked hair boy meets world hey arnold nike, animated gifs vcr wallet chains moby nylon windbreaker. Men in black super mario world michael jordan bubble tape, scrunchies light up sneakers vanilla ice buddy list. Personalized mixtapes t-shirts baby got back free willy.

      </div>

    </div>

    <!-- Fale conosco -->
    <div class="relative flex items-center justify-center mt-16 flex-col gap-2 w-full px-4 msm:px-7 mlg:w-4/5">
        <p class="text-[8px] flex gap-1">
          <img src="assets/call.svg">
          Fale conosco
        </p>

        <p class="text-primary font-black text-2xl">Entre em contato!</p>

        <div class="w-full h-52 bg-primary rounded-3xl shadow-lg flex mt-16">
          <div class="w-2/5 h-full flex flex-col items-center justify-center gap-2">
            <span class="text-center text-[5px] text-white">Nossas redes</span>
            <div class="flex gap-1">
              <div class="w-5 h-5 rounded-full bg-white"></div>
              <div class="w-5 h-5 rounded-full bg-white"></div>
            </div>
            <div class="flex gap-1">
              <div class="w-5 h-5 rounded-full bg-white"></div>
              <div class="w-5 h-5 rounded-full bg-white"></div>
            </div>
          </div>

          <div class="w-3/5 h-full flex flex-col p-4">
            <label>
              <span class="text-[5px] text-white">Seu nome</span>
              <input class="w-full h-4 rounded-xl p-1 text-[6px]" v-model="newContact.name" />
            </label>
            <label>
              <span class="text-[5px] text-white">Seu e-mail</span>
              <input class="w-full h-4 rounded-xl p-1 text-[6px]" v-model="newContact.email" />
            </label>
            <label>
              <span class="text-[5px] text-white">Sua mensagem</span>
              <textarea class="w-full h-full rounded-xl resize-none p-1 text-[6px] outline-none" v-model="newContact.message" />
            </label>
          </div>

        </div>
    </div>
    
    <div class="w-full font-black text-white text-center text-[5px] mt-20 mb-10">
      VALESOFT - Sistemas RFID - © Copyright 2023. Todos os Direitos Reservados.
    </div>
  </div>
  
  
</template>

<script setup lang="ts">
const route = useRoute();
const newContact = ref({
  name: '',
  email: '',
  message: '',
})
</script>

<style scoped>
.leaf-top-right {
  @apply rounded-b-2xl rounded-t-2xl rounded-tr-none;
}

.leaf-top-left {
  @apply rounded-b-2xl rounded-t-2xl rounded-tl-none;
}

.leaf-bottom-right {
  @apply rounded-b-2xl rounded-t-2xl rounded-br-none;
}

.leaf-bottom-left {
  @apply rounded-b-2xl rounded-t-2xl rounded-bl-none;
}

button {
  color: white;
}

li::before {
  content: "•";
  color: white;
  font-size: 8px;
  display: inline-block;
  padding: 0;
  width: fit-content;
  height: fit-content;
  margin-right: 4px;
  scale: 100%;
}
</style>