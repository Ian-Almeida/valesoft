<template>
  <Modal v-model="modalInfo.open">
    <template #title>
      <div class="p-2 flex items-center justify-center">
        <div id="ball1" class="w-12 h-12 lg:w-16 lg:h-16 md:-top-8 rounded-full shadow-md bg-white">
          <img v-if="showBall1" class="relative w-6 lg:w-8 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
            :src="modalInfo.icon">
        </div>
      </div>

    </template>

    <template #default>
      <div class="p-10">
        <ul class="text-xs sm:text-base lg:text-xl flex flex-col gap-2 modal_ul text-justify">
          <li v-for="val in modalInfo.content">{{ val }}</li>
        </ul>

        <div class="flex w-full h-fit justify-center">
          <a href="#contato">
            <button @click="modalInfo.open = false"
              class="w-fit bg-primary rounded flex text-[11px] md:text-sm p-1 px-2 gap-1 mt-6  items-center justify-center text-white">
              <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <div>
                Entre em contato
              </div>
            </button>
          </a>
        </div>
      </div>
    </template>
  </Modal>

  <!-- Header -->
  <div class="w-full h-20 bg-secondary/90 fixed px-20 lg:px-32 2xl:px-56 items-center justify-between hidden md:flex z-50">
    <img src="assets/logo.svg">
    <div class="flex gap-4">
      <a href="#servicos"><button class="bg-white text-secondary rounded-full w-20 h-7 text-xs">Serviços</button></a>
      <a href="#sobrenos"><button class="bg-white text-secondary rounded-full w-20 h-7 text-xs">Sobre nós</button></a>
      <a href="#parceiros-canais"><button class="bg-white text-secondary rounded-full w-fit h-7 text-xs px-2">Parceiros e Canais</button></a>
      <a href="#contato"><button class="bg-white text-secondary rounded-full w-20 h-7 text-xs">Contato</button></a>
    </div>
  </div>

  <div
    id="main-content"
    :class="`w-full h-fit relative z-0 flex flex-col items-center justify-center md:px-20 lg:px-32 2xl:px-56 md:pt-20 overflow-x-hidden
      before:top-[150px] before:w-full before:h-[1560px] before:-z-10 max-w-[2000px]
    `"
    >

    <!-- Nós somos -->
    <div class="flex gap-4 px-6 pt-6 md:p-0 items-center justify-around w-full mt-4 md:mt-14">
      <div class="w-40 mmd:w-56 md:w-full md:max-w-md flex flex-col">
        <div class="text-primary font-black text-2xl mmd:text-3xl md:text-6xl lg:text-7xl">Nós somos a Valesoft</div>
        <div class="text-[6px] mmd:w-44 md:text-[15px] md:w-full text-justify mt-2 font-light">
          Uma empresa de tecnologia que desenvolve soluções para a evolução industrial através da digitalização e rastreabilidade de processos no chão fábrica. Nosso propósito é entregar uma jornada completa de coleta de dados e entrega de informações gerenciais e estratégicas para elevar sua capacidade operacional.
        </div>

        <a href="#contato">
          <button
            class="w-fit bg-primary rounded flex text-[6px] md:text-sm p-1 px-2 gap-1 mt-6  items-center justify-center text-white">
            <svg class="w-2 h-2 md:w-4 md:h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <div>
              Entre em contato
            </div>
          </button>
        </a>

      </div>

      <div class="relative w-40 md:w-full h-fit z-0 flex justify-end">
        <div class="relative">
          <div class="leaf-top-right w-10 h-10 md:w-20 md:h-20 lg:w-32 lg:h-32 bg-primary absolute -z-10 right-2"></div>
          <img class="w-fit" src="assets/img1.png">
          <div
            class="leaf-bottom-left w-10 h-10 md:w-20 md:h-20 lg:w-32 lg:h-32 bg-secondary absolute -z-10 md:left-0 bottom-0">
          </div>
        </div>
      </div>

    </div>

    <div class="py-10 md:py-14 lg:py-16 relative">
    </div>
    
    <section id="servicos" class="py-14"></section>
    <!-- Nossas soluções -->
    <div class="relative w-full flex flex-col items-center justify-center">

      <div class="relative flex items-center justify-center flex-col gap-2">
        <p class="text-[8px] md:text-2xl flex gap-1 text-white font-light">
          <img class="md:w-7 md:h-7" src="assets/light_bulb.svg">
          O que fazemos?
        </p>
        <p class="text-primary font-black text-3xl md:text-6xl lg:text-7xl ">Nossas Soluções</p>

        <!-- Mobile -->
        <div class="flex lg:hidden gap-4 sm:gap-10 2xl:gap-6 mt-10 md:mt-20">
          <div class="flex flex-col justify-between items-center gap-3">
            <div id="ball1" @click="openModal(1)" class="w-8 h-8 md:w-12 md:h-12 md:-top-8 rounded-full shadow-md animate-bounce bg-white">
              <img v-if="showBall1" class="relative w-4 md:w-6 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                :src="'/programmingarrows.svg'">
            </div>
            <p class="w-[80px] sm:w-[140px] h-1/2 text-center text-white font-light text-[8pt]">Serviços de implementação Consultorias Projetos</p>
          </div>
          
          <div class="flex flex-col justify-between items-center gap-3">
            <div v-if="showBall2" id="ball2" class="w-8 h-8 md:w-12 md:h-12 md:-top-8 rounded-full shadow-md animate-bounce bg-white">
              <img @click="openModal(2)" class="relative w-4 md:w-6 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                :src="'/codecircle.svg'">
            </div>
            <p class="w-[80px] h-1/2 text-center text-white font-light text-[8pt]">Software Interações</p>
          </div>
          
          <div class="flex flex-col justify-between items-center gap-3">
            <div v-if="showBall3" id="ball3" class="w-8 h-8 md:w-12 md:h-12 md:-top-8 rounded-full shadow-md animate-bounce bg-white">
              <img @click="openModal(3)" class="relative w-4 md:w-6 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                :src="'/candle.svg'">
            </div>
            <p class="w-[80px] h-1/2 text-center text-white font-light text-[8pt]">Portfólio Dispositivos Acessórios</p>
          </div>
          

        </div>

        <!-- Desktop -->
        <div class="hidden lg:flex gap-4 2xl:gap-6 mt-10 md:mt-20">

          <div class="hidden mmd:flex flex-col gap-1 mlg:gap-2 md:gap-4 items-center justify-center md:mr-2">
            <div class="leaf-bottom-right w-9 h-9 mlg:w-11 mlg:h-11 md:w-20 md:h-20 2xl:w-36 2xl:h-36 bg-white"></div>
            <div class="leaf-top-right w-9 h-9 mlg:w-11 mlg:h-11 md:w-20 md:h-20 2xl:w-36 2xl:h-36 bg-primary"></div>
          </div>
          <div class="flex gap-10 2xl:gap-6 mt-10 md:mt-20">
            <div class="flex flex-col justify-between items-center gap-3">
              <div id="ball1" @click="openModal(1)" class="w-16 min-h-[64px] xl:w-20 xl:min-h-[80px] rounded-full shadow-md bg-white hover:bg-gray-300 hover:cursor-pointer">
                <img v-if="showBall1" class="relative w-10 xl:w-12 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                  :src="'/programmingarrows.svg'">
              </div>
              <p class="w-[140px] h-1/2 text-center text-white font-light text-[8pt] xl:text-[10pt]">Serviços de implementação Consultorias Projetos</p>
            </div>

            <div class="flex flex-col justify-between items-center gap-3">
              <div v-if="showBall2" id="ball2" class="w-16 min-h-[64px] xl:w-20 xl:min-h-[80px] rounded-full shadow-md  bg-white hover:bg-gray-300 hover:cursor-pointer">
                <img @click="openModal(2)" class="relative w-10 xl:w-12 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                  :src="'/codecircle.svg'">
              </div>
              <p class="w-[140px] h-1/2 text-center text-white font-light text-[8pt] xl:text-[10pt]">Software Interações</p>
            </div>

            <div class="flex flex-col justify-between items-center gap-3">
              <div v-if="showBall3" id="ball3" class="w-16 min-h-[64px] xl:w-20 xl:min-h-[80px] rounded-full shadow-md  bg-white hover:bg-gray-300 hover:cursor-pointer">
                <img @click="openModal(3)" class="relative w-10 xl:w-12 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                  :src="'/candle.svg'">
              </div>
              <p class="w-[140px] h-1/2 text-center text-white font-light text-[8pt] xl:text-[10pt]">Portfólio Dispositivos Acessórios</p>
            </div>
        </div>

          <!-- <div
            class="relative w-20 h-fit md:w-36 lg:w-56 2xl:w-80  rounded-2xl bg-primary mt-4 shadow-md p-8"
            @click="openModal(1)"
          >
            <div
              class="absolute w-8 h-8 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 md:-top-8 2xl:-top-14 rounded-full bg-white left-1/2 -translate-x-1/2 -top-4  shadow-md">
              <img class="relative w-4 lg:w-10 2xl:w-14 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                src="/programmingarrows.svg">
            </div>
            <ul
              class="text-white font-light text-[5px] md:text-xs lg:text-sm 2xl:text-xl p-3 pt-4 md:pt-8 w-full flex flex-col md:gap-2">
              <li>Serviços de Implantação</li>
              <li>Projetos</li>
              <li>Consultorias</li>
            </ul>
          </div>

          <div class="relative w-24 h-fit md:w-40 lg:w-72 2xl:w-[390px] 2xl:h-[670px] rounded-2xl bg-secondary shadow-md p-10 pb-20"
          @click="openModal(2)"
          >
            <div
              class="absolute w-8 h-8 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 md:-top-8 2xl:-top-14 rounded-full bg-white left-1/2 -translate-x-1/2 -top-4 shadow-md">
              <img class="relative w-4 lg:w-10 2xl:w-14 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                src="/codecircle.svg">
            </div>
            <ul
              class="text-white font-light text-[4pt] md:text-xs lg:text-sm 2xl:text-xl p-5 pt-6 md:pt-10 w-full flex flex-col md:gap-2">
              <li>Solução completa de Software</li>
              <li>Integrações</li>
            </ul>
          </div>

          <div
            class="relative w-20 md:w-36 lg:w-56 2xl:w-80 rounded-2xl bg-primary mt-4 shadow-md h-[178px] lg:h-[560px] 2xl:h-[600px] p-8"
            @click="openModal(3)"
          >
            <div
              class="absolute w-8 h-8 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 md:-top-8 2xl:-top-14 rounded-full bg-white left-1/2 -translate-x-1/2 -top-4 shadow-md">
              <img class="relative w-4 lg:w-10 2xl:w-14 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" src="/candle.svg">
            </div>
            <ul
              class="text-white font-light text-[5px] md:text-xs lg:text-sm 2xl:text-xl p-3 pt-4 md:pt-8 w-full flex flex-col md:gap-2">
              <li>Portfólio de Equipamentos</li>
              <li>dispositivos</li>
              <li>acessórios</li>
            </ul>
          </div> -->

          <div class="hidden mmd:flex flex-col gap-1 mlg:gap-2 md:gap-4 items-center justify-center md:ml-2">
            <div class="leaf-bottom-left w-9 h-9 mlg:w-11 mlg:h-11 md:w-20 md:h-20 2xl:w-36 2xl:h-36 bg-white"></div>
            <div class="leaf-top-left w-9 h-9 mlg:w-11 mlg:h-11 md:w-20 md:h-20 2xl:w-36 2xl:h-36 bg-primary"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mercado de Atuação -->
    <div class="relative w-full px-8 msm:px-14 mt-12 flex flex-col gap-2 py-10">
      <div class="
                absolute rounded-bl-[1.5rem] lg:rounded-bl-[60px]
                w-16 mmd:w-20 h-full bg-white  -right-10  md:-mx-20 lg:-mx-32 2xl:-mx-56"></div>
      <div class="absolute 
                rounded-tr-[1.5rem] lg:rounded-tr-[60px]
                w-16 mmd:w-20 h-full bg-primary -left-10 md:-mx-20 lg:-mx-32 2xl:-mx-56"></div>

      <div class="self-center max-w-[270px] md:max-w-[540px] lg:max-w-3xl">
        <div class="text-primary font-bold text-xl md:text-4xl ">Mercado de Atuação</div>
        <div class="text-justify text-[10px] md:text-xl text-white mt-6 font-light flex flex-col gap-14">
          A Valesoft é uma empresa dedicada a construir soluções para automação de coleta de dados para processos
          industriais e
          logístico, focando os desafios dos segmentos Metalmecânico, Plástico e Celulose.

          <img class="rounded-r-full rounded-bl-full" src="https://i.pinimg.com/originals/8a/90/98/8a909882b3c6a2fcba6e1d4a42dabd42.jpg"/>

          
          Através do foco em segmentos chaves conseguimos evoluir cada vez mais nossas soluções, elevando sempre o índice
          de
          aderência dos nossos produtos, e como resultado conseguimos realizar entregas mais efetivas e em menor tempo,
          preservando e otimizando cada vez mais os recursos de nossos clientes e parceiros de negócios.

        </div>
      </div>

    </div>

    <section id="sobrenos" class="py-10"></section>
    <!-- Sobre nós Mobile-->
    <div class="w-full h-fit px-8 msm:px-14 mt-6 lg:hidden flex flex-col justify-center items-center">

      <div class="flex text-[7px] md:text-base text-white gap-1 w-full max-w-[270px] md:max-w-[540px]">
        <img class="md:w-4 md:h-4" src="assets/people.svg">
        Sobre nós
      </div>

      <div class="font-black text-xl md:text-6xl text-white w-full max-w-[270px]  md:max-w-[540px]">Nativos em RFID</div>

      <div class="text-justify text-[10px] md:text-xl text-white mt-4 font-light max-w-[270px] md:max-w-[540px]">
        A Valesoft é uma empresa pertencente ao grupo <strong>Desafio Agora</strong>, que por mais de 7 anos atua e domina
        o mercado Latino
        Americano com fornecimento de tecnologia RFID no segmento de cronometragem esportiva.
        <br>
        <br>
        Com uma demanda latente na indústria a Valesoft foi concebida com o propósito de levar produtos de alta qualidade
        em
        automação de processos, permitindo que esse mercado usufrua da tecnologia RFID em sua melhor aplicação, permitindo
        resultados sólidos em cada projeto.
        <br>
        <br>
        Hoje a Valesoft conta com times dedicados a entrega de projetos, desenvolvimento de software e suporte técnico
        especializado para garantir um pós venda de qualidade ao nossos clientes e parceiros.
        <br>
        <br>
        Seja um cliente final que deseja internalizar o projeto ou nossos parceiros de negócio, nosso compromisso é sempre
        em
        entregar o melhor da tecnologia e a satisfação em poder contar com nosso apoio.
      </div>

      <div class="relative flex gap-4 mt-11 justify-around">
        <div id="sobrenos-bg-mobile" class="absolute bg-primary w-screen h-[450px] -z-10 -top-[350px] md:-top-[700px] md:h-[850px]"></div>

        <div class="relative w-40 md:w-full h-fit z-0 flex justify-end">
          <div class="relative">
            <div class="leaf-top-left w-8 h-8 md:w-14 md:h-14 bg-secondary absolute left-2 -z-10"></div>
            <img class="w-full max-w-[135px] md:max-w-[220px]" src="assets/img2.png">
          </div>
        </div>
      </div>

      <div class="text-justify text-[10px] md:text-xl text-black mt-8 font-light max-w-[270px] md:max-w-[540px]">
        <div class="flex text-[7px] md:text-base font-light text-black gap-1 w-full max-w-3xl items-center justify-start">
          <p>Clientes | Parceiros</p>
        </div>

        <div class="font-black text-xl text-primary w-full md:text-6xl lg:text-7xl break-words flex text-left">
          <p>Parceria que impulsiona</p>
        </div>
        <br>
        A <strong>Valesoft</strong> possui um programa amplo de parcerias de negócios, modelados para melhor atender
        cada extensão de nossa
        atuação no mercado.
        <br>
        <br>
        Por meio de nossos parceiros <strong>Integradores</strong>, abrimos nosso portfólio de consultoria
        especializada e fornecimento de
        equipamentos, permitindo que possa focar no escopo de negócio de seus projetos podendo contar com a Valesoft
        em
        sua composição de solução.
      </div>

      <div class="relative w-40 md:w-full h-fit z-0 flex justify-center py-4">
        <div class="relative">
          <div class="absolute bg-primary rounded-full w-5 h-5 md:w-11 md:h-11 flex items-center justify-center shadow-lg left-2 top-2">
            <img class="w-3 h-3 md:w-6 md:h-6" src="assets/medalstar.svg">
          </div>
          <img class="w-full max-w-[135px] md:max-w-[220px]" src="assets/img3.png">
          <div
            class="leaf-top-right w-9 h-9 md:w-16 md:h-16 bg-secondary absolute z-10 right-0 -bottom-2">
          </div>
        </div>
      </div>

    </div>

    <!-- Sobre nós Desktop-->
    <div class="container mx-auto p-4 hidden lg:block">

      <div class="grid grid-cols-2 gap-32">

        <div class="relative col-span-1 mt-8">
          <div id="sobrenos-bg-desktop" class="absolute w-screen h-[900px] lg:h-[700px] xl:h-[400px] mt-56 bg-primary -z-10 -left-36 2xl:-left-60"></div>
          <div class="flex text-[7px] md:text-base font-light text-white gap-1 w-full max-w-3xl">
            Sobre nós
          </div>
          <div class="font-black text-xl text-white w-full md:text-6xl lg:text-7xl break-words">Nativos em RFID</div>
          <br>
          <div class="text-justify text-[10px] md:text-xl text-white font-light max-w-lg">
            A Valesoft é uma empresa pertencente ao grupo <strong>Desafio Agora</strong>, que por mais de 7 anos atua e
            domina o mercado Latino
            Americano com fornecimento de tecnologia RFID no segmento de cronometragem esportiva.
            <br>
            <br>
            Com uma demanda latente na indústria a Valesoft foi concebida com o propósito de levar produtos de alta
            qualidade em
            automação de processos, permitindo que esse mercado usufrua da tecnologia RFID em sua melhor aplicação,
            permitindo
            resultados sólidos em cada projeto.
          </div>
        </div>

        <div class="col-span-1 flex items-center justify-end max-w-md">
          <div class="relative">
            <div class=" w-28 h-28 bg-secondary absolute left-0 -z-10 rounded-b-[3rem] rounded-tr-[3rem]"></div>
            <img class="max-w-sm w-full" src="assets/img2.png">
            <div
              class=" w-32 h-32 bg-secondary absolute z-10 right-0 -bottom-6 rounded-b-[3rem] rounded-tl-[3rem]">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Parceiros e Canais -->
    <div class="relative">
      <section id="parceiros-canais" class="absolute -top-10"></section>
    </div>
    <div class="w-full lg:mt-36 2xl:mt-44 lg:block hidden">
        <div class="grid grid-cols-2 gap-32">
          <div class="col-span-1 flex items-center justify-center max-w-md relative">
            <div class="relative">
              <div class="absolute bg-primary rounded-full w-5 h-5 md:w-14 md:h-14 flex items-center justify-center shadow-lg left-5 top-5">
                <img class="w-3 h-3 md:w-10 md:h-10" src="assets/medalstar.svg">
              </div>
              <img src="https://digitalland.com.br/wp-content/uploads/2019/02/Parceiros.jpg" alt="" class="max-w-sm w-full h-[384px] rounded-full" />
            </div>
            
          </div>

          <div class="col-span-1 flex items-center justify-center">
            <div class="text-justify text-[10px] md:text-xl text-black mt-4 lg:mt-36 2xl:mt-44 h-full max-w-lg font-light">
              <div class="flex text-[7px] md:text-base font-light text-black gap-1 w-full max-w-3xl items-center justify-end">
                <p>Clientes | Parceiros</p>
              </div>

              <div class="font-black text-xl text-primary w-full md:text-6xl lg:text-7xl break-words flex text-right">
                <p>Parceria que impulsiona</p>
              </div>
              <br>
              A <strong>Valesoft</strong> possui um programa amplo de parcerias de negócios, modelados para melhor atender
              cada extensão de nossa
              atuação no mercado.
              <br>
              <br>
              Por meio de nossos parceiros <strong>Integradores</strong>, abrimos nosso portfólio de consultoria
              especializada e fornecimento de
              equipamentos, permitindo que possa focar no escopo de negócio de seus projetos podendo contar com a Valesoft
              em
              sua composição de solução.
            </div>
          </div>
        </div>
      </div>
    
    <Carousel class="max-w-[270px]  md:max-w-[540px] lg:max-w-full">
      <li><img class="lg:w-28 md:w-20 w-12 lg:h-9 h-5 md:h-6" src="/abc.png" /></li>
      <li><img class="lg:w-36 md:w-24 w-12 lg:h-9 h-5 md:h-6" src="/advantag.png" /></li>
      <li><img class="lg:w-28 md:w-20 w-12 lg:h-9 h-5 md:h-6" src="/avery.png" /></li>
      <li><img class="lg:w-28 md:w-20 w-12 lg:h-9 h-5 md:h-6" src="/chainway.png" /></li>
      <li><img class="lg:w-28 md:w-20 w-12 lg:h-9 h-5 md:h-6" src="/cinnco.png" /></li>
      <li><img class="lg:w-28 md:w-20 w-12 lg:h-9 h-5 md:h-6" src="/prime.png" /></li>
      <li><img class="lg:w-36 md:w-24 w-12 lg:h-9 h-5 md:h-6" src="/projeta.png" /></li>
      <li><img class="lg:w-28 md:w-20 w-12 lg:h-9 h-5 md:h-6" src="/sato.png" /></li>
      <li><img class="lg:w-28 md:w-20 w-12 lg:h-9 h-5 md:h-6" src="/tsc.png" /></li>
      <li><img class="lg:w-28 md:w-20 w-12 lg:h-9 h-5 md:h-6" src="/zabra.png" /></li>
    </Carousel>

    <section id="contato" class="py-7 md:py-14"></section>
    <div class="absolute bg-secondary h-72 w-full -z-10 -mx-20 bottom-0"></div>
    <!-- Fale conosco -->
    <div class="relative flex items-center justify-center flex-col gap-2 w-full px-4 msm:px-7 mlg:w-4/5 md:w-full">
      
      <p class="text-[8px] flex gap-1 md:text-base items-center">
        <img class="md:w-4 md:h-4" src="assets/call.svg">
        Fale conosco
      </p>

      <p class="text-primary font-black text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl">Entre em contato!</p>

      <div class="w-full md:max-w-lg lg:max-w-xl 2xl:max-w-3xl h-52 md:h-96 bg-primary rounded-3xl shadow-xl flex mt-11">
        <div class="w-2/5 h-full flex flex-col items-center justify-center gap-4">
          <span class="text-center text-[5px] sm:text-[9px] md:text-base text-white font-semibold">Nossas redes</span>
          <div class="flex gap-4">
            <div class="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center">
              <a href="https://www.instagram.com/valesoft_rfid/" target="_blank"><img class="w-2 h-2 md:w-6 md:h-6" src="assets/instagram.svg"></a>
            </div>
            <div class="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center">
              <a><img class="w-2 h-2 md:w-6 md:h-6" src="assets/youtube.svg"></a>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center">
              <a href="https://www.facebook.com/valesoftrfid" target="_blank"><img class="w-2 h-2 md:w-6 md:h-6" src="assets/facebook.svg"></a>
            </div>
            <div class="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center">
              <a href="https://www.linkedin.com/company/83051513/admin/feed/posts/" target="_blank"><img class="w-2 h-2 md:w-6 md:h-6" src="assets/linkedin.svg"></a>
            </div>
          </div>
        </div>

        <div class="w-3/5 h-full flex flex-col p-4 gap-4 items-center justify-center">
          <label class="w-full">
            <p class="text-[5px] sm:text-[9px] md:text-base text-white font-semibold">Número</p>
            <input class="w-1/2 h-4 rounded md:rounded-xl  p-1 text-[6px] sm:text-[10px]
                  md:w-4/5 md:h-10 md:text-base focus:outline-none
                  " v-model="newContact.number" v-maska data-maska="+55 (##) # ####-####" />
        </label>
        <label class="w-full">
          <p class="text-[5px] sm:text-[9px] md:text-base text-white font-semibold">Seu e-mail</p>
          <input class="w-full h-4 rounded md:rounded-xl  p-1 text-[6px] sm:text-[10px]
                  md:h-10 md:text-base focus:outline-none
                  " v-model="newContact.email" type="email"/>
        </label>
        <label class="w-full">
          <p class="text-[5px] sm:text-[9px] md:text-base text-white font-semibold mb-1">Sua mensagem</p>
          <textarea class="w-full h-full rounded md:rounded-xl p-1 text-[6px] sm:text-[10px]
                   md:text-base focus:outline-none
                  " v-model="newContact.message" />
        </label>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="w-full font-black text-white text-center text-[5px] md:text-[11px] mt-20 mb-10">
    VALESOFT - Sistemas RFID - © Copyright 2023. Todos os Direitos Reservados.
  </div>

</div>
</template>
  
<script setup lang="ts">
const route = useRoute();
const modalInfo = ref({
  open: false,
  icon: '',
  content: [] as Array<string>,
})
const newContact = ref({
  name: '',
  number: '',
  email: '',
  message: '',
})
const showBall1 = ref(false);
const showBall2 = ref(false);
const showBall3 = ref(false);

const startAnimation = () => {
  setTimeout(() => {
    showBall1.value = true;
  }, 0);
  setTimeout(() => {
    showBall2.value = true;
  }, 150);
  setTimeout(() => {
    showBall3.value = true;
  }, 300);
}

const openModal = (num: number) => {
  modalInfo.value.open = true;
  
  if (num === 1) {
    modalInfo.value.icon = "/programmingarrows.svg";
    modalInfo.value.content = [
      'Consultoria Especializada para projetos de automação com RFID',
      'Mapeamento e dimensionamento de escopo de tecnologia',
      'Implantação de Projetos',
      'POC – Provas de Conceito da tecnologia e índice de aderência',
      'MVP – Validação da tecnologia utilizando um Produto Mínimo Viável'
    ];
    return
  }

  if (num === 2) {
    modalInfo.value.icon = "/codecircle.svg";
    modalInfo.value.content = [
      'V.Log – Software para automação de leitura em processos logísticos (Matéria Prime e Produto Acabado)',
      'V.Prod – Software para automação para rastreabilidade de lotes de MP, Apontamento de Produção, Movimentação de materiais entres depósitos',
      'V.Station – Software autônomo sem necessidade de integração para conferência de materiais e packings de terceiros',
    ];
    return
  }

  if (num === 3) {
    modalInfo.value.icon = "/candle.svg";
    modalInfo.value.content = [
      'Coletores de dados RFID',
      'Estações de conferência',
      'Impressoras',
      'Portais',
      'Antenas, Cabos e Suportes'
    ];
    return
  }
}

onMounted(() => {
  startAnimation();
})

</script>
  
<style scoped> 
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

.modal_ul li::before {
  content: "•";
   color: black;
   font-size: 12pt;
   display: inline-block;
   padding: 0;
   width: fit-content;
   height: fit-content;
   margin-right: 4px;
   scale: 100%;
}

#main-content::before {
  content: "";
  z-index: -10;
  /* background: red;   */
  background: url('/bg.svg')  
                no-repeat center center/cover;
                max-width: 2000px;
  position: absolute;
}

@media (min-width: 768px) {
  li::before {
   font-size: 20pt;
}
}

@media (min-width: 280px) {
  #main-content::before {
        top: 0px;
        height: 1700px;
    }
}

@media (min-width: 285px) {
  #main-content::before {
        top: 0px;
        height: 1700px;
    }
}

@media (min-width: 299px) {
  #main-content::before {
        top: 0px;
        height: 1600px;
    }
}

@media (min-width: 309px) {
  #main-content::before {
        top: 0px;
        height: 1600px;
    }
  #sobrenos-bg-mobile {
    height: 600px;
    top: -550px;
  }
}

@media (min-width: 320px) {
  #main-content::before {
        top: 0px;
        height: 1600px;
    }
}

@media (min-width: 329px) {
  #main-content::before {
    top: 0px;
        height: 1550px;
    }
}

@media (min-width: 345px) {
  #main-content::before {
        top: 0px;
        height: 1450px;
    }
}

@media (min-width: 366px) {
  #main-content::before {
        top:0px;
        height: 1450px;
    }
}

@media (min-width: 388px) {
  #main-content::before {
    top: 0px;
        height: 1450px;
    }
}

@media (min-width: 768px) {
  #main-content::before {
        top: 250px;
        height: 2250px;
    }
}

@media (min-width: 800px) {
  #main-content::before {
        top: 250px;
        height: 2200px;
    }
}

@media (min-width: 810px) {
  #main-content::before {
        top: 240px;
        height: 2250px;
    }
}

@media (min-width: 830px) {
  #main-content::before {
        top: 250px;
        height: 2200px;
    }
}

@media (min-width: 855px) {
  #main-content::before {
        top: 250px;
        height: 2150px;
    }
}

@media (min-width: 865px) {
  #main-content::before {
        top: 190px;
        height: 2150px;
    }
}

@media (min-width: 894px) {
  #main-content::before {
        top: 220px;
        height: 2150px;
    }
}

@media (min-width: 898px) {
  #main-content::before {
        top: 180px;
        height: 2150px;
    }
}

@media (min-width: 960px) {
  #main-content::before {
        top: 200px;
        height: 2150px;
    }
}

@media (min-width: 990px) {
  #main-content::before {
        top: 210px;
        height: 2150px;
    }
}

@media (min-width: 1024px) {
  #main-content::before {
        top: 60px;
        height: 3000px;
    }
}

@media (min-width: 1068px) {
  #main-content::before {
        top: 60px;
        height: 3000px;
    }
}

@media (min-width: 1085px) {
  #main-content::before {
        top: 60px;
        height: 2900px;
    }
    #sobrenos-bg-desktop {
      height: 600px;
    }
}

@media (min-width: 1100px) {
  #main-content::before {
        top: 50px;
        height: 2900px;
    }
    #sobrenos-bg-desktop {
      height: 500px;
    }
}

@media (min-width: 1200px) {
  #main-content::before {
        top: 30px;
        height: 2950px;
    }
    #sobrenos-bg-desktop {
      height: 600px;
    }
}

@media (min-width: 1260px) {
  #main-content::before {
        top: 50px;
        height: 2900px;
    }
    #sobrenos-bg-desktop {
      height: 400px;
    }
}

@media (min-width: 1536px) {
  #main-content::before {
        top: 30px;
        height: 3000px;
    }
}

@media (min-width: 1800px) {
  #main-content::before {
        top: 50px;
        height: 3000px;
    }
}

@media (min-width: 1900px) {
  #main-content::before {
        top: 250px;
        height: 2700px;
    }
}

@media (min-width: 1950px) {
  #main-content::before {
        top: 230px;
        height: 2700px;
    }
}
</style>