<template>
  <Modal v-model="modalOpen">
    <template #title>
      <div class="p-2">
        <p class=" flex gap-1 text-black justify-center text-[8px] md:text-base">
          <img class="md:w-7 md:h-7" src="assets/light_bulb.svg">
          O que fazemos?
        </p>
        <div class="text-black font-black text-xl md:text-6xl lg:text-7xl text-center mt-2">Controle e Expedição</div>
      </div>

    </template>

    <template #default>
      <div class="grid grid-cols-3 gap-4 p-2 md:gap-10 md:p-12">
        <div class="col-span-2">
          <div class="text-justify text-[5px] mmd:text-[8px] mlg:text-[9px] md:text-sm text-black mt-4 ">
            Converse braveheart beepers bill gates generation Y trl. Macaulay culkin yin yang baywatch slacker. Spiked
            hair boy meets world hey arnold nike, animated gifs vcr wallet chains moby nylon windbreaker. Men in black
            super mario world michael jordan bubble tape, scrunchies light up sneakers vanilla ice buddy list.
            Personalized mixtapes t-shirts baby got back free willy.
          </div>
        </div>

        <div class="col-span-1 flex w-full h-full items-center justify-end">
          <img src="assets/img3.png" alt="" class="max-w-[280px] md:max-w-xs w-full" />
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
        <div class="text-[6px] mmd:w-44 md:text-[12px] md:w-full text-justify mt-2 font-light">
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

    <!-- Parceiros -->
    <p class="text-[5px] font-light md:text-sm text-center my-2 mt-6 px-6 md:mt-24 lg:mt-40">Parceiros | Canais</p>
    <div class="flex gap-2 md:gap-4 mb-4 px-6 flex-wrap justify-center text-white">
      <button class="w-fit h-fit p-2 rounded-lg bg-secondary text-center text-[5px] md:text-sm ">Logo
        parceira</button>
      <button class="w-fit h-fit p-2 rounded-lg bg-secondary text-center text-[5px] md:text-sm ">Logo
        parceira</button>
      <button class="w-fit h-fit p-2 rounded-lg bg-secondary text-center text-[5px] md:text-sm ">Logo
        parceira</button>
      <button class="w-fit h-fit p-2 rounded-lg bg-secondary text-center text-[5px] md:text-sm ">Logo
        parceira</button>
      <button class="w-fit h-fit p-2 rounded-lg bg-secondary text-center text-[5px] md:text-sm ">Logo
        parceira</button>
      <button class="w-fit h-fit p-2 rounded-lg bg-secondary text-center text-[5px] md:text-sm ">Logo
        parceira</button>
    </div>
    <section id="servicos" class="py-20"></section>

    <!-- Nossas soluções -->
    <div class="relative w-full flex flex-col items-center justify-center">

      <div class="relative flex items-center justify-center flex-col gap-2">
        <p class="text-[8px] md:text-2xl flex gap-1 text-white font-light">
          <img class="md:w-7 md:h-7" src="assets/light_bulb.svg">
          O que fazemos?
        </p>
        <p class="text-primary font-black text-3xl md:text-6xl lg:text-7xl ">Nossas Soluções</p>

        <!-- Mobile -->
        <div class="flex lg:hidden gap-10 2xl:gap-6 mt-10 md:mt-20">
          <div id="ball1" class="w-8 h-8 md:w-12 md:h-12 md:-top-8 rounded-full shadow-md animate-bounce bg-white">
            <img v-if="showBall1" class="relative w-4 md:w-6 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              src="assets/programmingarrows.svg">
          </div>

          <div v-if="showBall2" id="ball2" class="w-8 h-8 md:w-12 md:h-12 md:-top-8 rounded-full shadow-md animate-bounce bg-white">
            <img class="relative w-4 md:w-6 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              src="assets/codecircle.svg">
          </div>

          <div v-if="showBall3" id="ball3" class="w-8 h-8 md:w-12 md:h-12 md:-top-8 rounded-full shadow-md animate-bounce bg-white">
            <img class="relative w-4 md:w-6 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              src="assets/candle.svg">
          </div>

        </div>

        <!-- Desktop -->
        <div class="hidden lg:flex gap-4 2xl:gap-6 mt-10 md:mt-20">

          <div class="hidden mmd:flex flex-col gap-1 mlg:gap-2 md:gap-4 items-center justify-center md:mr-2">
            <div class="leaf-bottom-right w-9 h-9 mlg:w-11 mlg:h-11 md:w-20 md:h-20 2xl:w-36 2xl:h-36 bg-white"></div>
            <div class="leaf-top-right w-9 h-9 mlg:w-11 mlg:h-11 md:w-20 md:h-20 2xl:w-36 2xl:h-36 bg-primary"></div>
          </div>

          <div @click="modalOpen = true"
            class="relative w-20 h-fit md:w-36 lg:w-56 2xl:w-80  rounded-2xl bg-primary mt-4 shadow-md p-8">
            <div
              class="absolute w-8 h-8 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 md:-top-8 2xl:-top-14 rounded-full bg-white left-1/2 -translate-x-1/2 -top-4  shadow-md">
              <img class="relative w-4 lg:w-10 2xl:w-14 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                src="assets/programmingarrows.svg">
            </div>
            <ul
              class="text-white font-light text-[5px] md:text-xs lg:text-sm 2xl:text-xl p-3 pt-4 md:pt-8 w-full flex flex-col md:gap-2">
              <li>Consultoria Especializada para projetos de automação com RFID</li>
              <li>Mapeamento e dimensionamento de escopo de tecnologia</li>
              <li>Implantação de Projetos</li>
              <li>POC – Provas de Conceito da tecnologia e índice de aderência</li>
              <li>MVP – Validação da tecnologia utilizando um Produto Mínimo Viável</li>
            </ul>
          </div>

          <div class="relative w-24 h-fit md:w-40 lg:w-72 2xl:w-[390px] 2xl:h-[670px] rounded-2xl bg-secondary shadow-md p-10 pb-20">
            <div
              class="absolute w-8 h-8 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 md:-top-8 2xl:-top-14 rounded-full bg-white left-1/2 -translate-x-1/2 -top-4 shadow-md">
              <img class="relative w-4 lg:w-10 2xl:w-14 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                src="assets/codecircle.svg">
            </div>
            <ul
              class="text-white font-light text-[4pt] md:text-xs lg:text-sm 2xl:text-xl p-5 pt-6 md:pt-10 w-full flex flex-col md:gap-2">
              <li>V.Log – Software para automação de leitura em processos logísticos (Matéria Prime e Produto Acabado)
              </li>
              <li>V.Prod – Software para automação para rastreabilidade de lotes de MP, Apontamento de Produção,
                Movimentação de materiais entres depósitos</li>
              <li>V.Station – Software autônomo sem necessidade de integração para conferência de materiais e packings de
                terceiros</li>
            </ul>
          </div>

          <div
            class="relative w-20 md:w-36 lg:w-56 2xl:w-80 rounded-2xl bg-primary mt-4 shadow-md h-[178px] lg:h-[560px] 2xl:h-[600px] p-8">
            <div
              class="absolute w-8 h-8 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 md:-top-8 2xl:-top-14 rounded-full bg-white left-1/2 -translate-x-1/2 -top-4 shadow-md">
              <img class="relative w-4 lg:w-10 2xl:w-14 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" src="assets/candle.svg">
            </div>
            <ul
              class="text-white font-light text-[5px] md:text-xs lg:text-sm 2xl:text-xl p-3 pt-4 md:pt-8 w-full flex flex-col md:gap-2">
              <li>Coletores de dados RFID</li>
              <li>Estações de conferência</li>
              <li>Impressoras</li>
              <li>Portais</li>
              <li>Antenas, Cabos e Suportes</li>
            </ul>
          </div>

          <div class="hidden mmd:flex flex-col gap-1 mlg:gap-2 md:gap-4 items-center justify-center md:ml-2">
            <div class="leaf-bottom-left w-9 h-9 mlg:w-11 mlg:h-11 md:w-20 md:h-20 2xl:w-36 2xl:h-36 bg-white"></div>
            <div class="leaf-top-left w-9 h-9 mlg:w-11 mlg:h-11 md:w-20 md:h-20 2xl:w-36 2xl:h-36 bg-primary"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mercado de Atuação -->
    <div class="relative w-full px-8 msm:px-14 mt-12 flex flex-col gap-2 py-10 ">
      <div class="
                absolute rounded-bl-[1.5rem] lg:rounded-bl-[60px]
                w-16 h-16 mmd:w-20 mmd:h-20 lg:w-44 lg:h-44 bg-white -right-10 top-28 md:-mx-20 lg:-mx-32 2xl:-mx-56"></div>
      <div class="absolute 
                rounded-tr-[1.5rem] lg:rounded-tr-[60px]
                w-16 h-16 mmd:w-20 mmd:h-20 lg:w-44 lg:h-44 bg-primary bottom-0 -left-10 md:-mx-20 lg:-mx-32 2xl:-mx-56"></div>

      <div class="self-center max-w-[270px] md:max-w-[540px] lg:max-w-3xl">
        <div class="text-primary font-bold text-xl md:text-4xl ">Mercado de Atuação</div>
        <div class="text-justify text-[10px] md:text-xl text-white mt-6 font-light">
          A Valesoft é uma empresa dedicada a construir soluções para automação de coleta de dados para processos
          industriais e
          logístico, focando os desafios dos segmentos Metalmecânico, Plástico e Celulose.

          <div>
            <br>
            <br>
          </div>
          <div class="hidden lg:block">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
          </div>

          
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

        <div class="relative w-40 md:w-full h-fit z-0 flex justify-end">
          <div class="relative">
            <div class="leaf-top-left w-8 h-8 md:w-14 md:h-14 bg-secondary absolute left-2 -z-10"></div>
            <img class="w-full max-w-[135px] md:max-w-[220px]" src="assets/img2.png">
          </div>
        </div>

        <!-- <div class="relative w-fit h-fit z-0">
          <div class="leaf-top-left w-8 h-8 bg-secondary absolute left-2 -z-10"></div>
          <img class="relative w-10/12 mmd:w-11/12 left-1/2 -translate-x-1/2" src="assets/img2.png">
        </div> -->

        <!-- <div class="z-0 relative w-fit">
          <div class="absolute bg-primary rounded-full w-5 h-5 flex items-center justify-center shadow-lg left-4">
            <img class="w-3 h-3" src="assets/medalstar.svg">
          </div>
          <img class="relative w-10/12 mmd:w-11/12 left-1/2 -translate-x-1/2 -z-10" src="assets/img3.png">
          <div
            class="leaf-top-right w-6 h-6 mmd:w-9 mmd:h-9 mmd:-bottom-3 bg-secondary absolute right-2 -bottom-1 msm:right-4 mmd:right-2  ">
          </div>
        </div> -->
        <div class="relative w-40 md:w-full h-fit z-0 flex justify-end">
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

      <div class="text-justify text-[10px] md:text-xl text-black mt-8 font-light max-w-[270px] md:max-w-[540px]">
        Programa de Parceira com <strong>Integradores</strong> e <strong>Canais Revenda</strong>.
        <br>
        <br>
        A <strong>Valesoft</strong> possui um programa amplo de parcerias de negócios, modelados para melhor atender cada
        extensão de nossa
        atuação no mercado.
        <br>
        <br>
        Por meio de nossos parceiros <strong>Integradores</strong>, abrimos nosso portfólio de consultoria especializada e
        fornecimento de
        equipamentos, permitindo que possa focar no escopo de negócio de seus projetos podendo contar com a Valesoft em
        sua composição de solução.
        <br>
        <br>
        Nossos Canais Revenda possuem acesso ao nosso portfólio completo de software, serviços e equipamentos, onde pode
        atuar com solução em formato <i>White Label</i>, permitindo que escalem sua força de vendas e time de entrega de
        projetos.
      </div>

    </div>

    <!-- Sobre nós Desktop-->
    <div class="container mx-auto p-4 hidden lg:block">

      <div class="flex text-[7px] md:text-base font-light text-white gap-1 w-full max-w-3xl">
        <img class="md:w-4 md:h-4" src="assets/people.svg">
        Sobre nós
      </div>

      <div class="font-black text-xl text-white w-full md:text-6xl lg:text-7xl break-words max-w-3xl">Nativos em RFID</div>

      <div class="grid grid-cols-2 gap-32">

        <div class="col-span-1 mt-8">
          
          <div class="text-justify text-[10px] md:text-xl text-white font-light max-w-md">
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

        <!-- <div class="">
          <img src="assets/img3.png" alt="" class="max-w-xs w-full" />
        </div> -->

        <div class="col-span-1 flex items-center justify-center max-w-md">
          <div class="relative">
            <div class=" w-28 h-28 bg-secondary absolute left-0 -z-10 rounded-b-[3rem] rounded-tr-[3rem]"></div>
            <img class="max-w-xs w-full" src="assets/img2.png">
            <div
              class=" w-32 h-32 bg-secondary absolute z-10 right-0 -bottom-6 rounded-b-[3rem] rounded-tl-[3rem]">
            </div>
          </div>
        </div>

        <div class="col-span-1 flex items-center justify-center max-w-md">
          <img src="assets/img3.png" alt="" class="max-w-xs w-full" />
        </div>

        <div class="col-span-1">
          <div class="text-justify text-[10px] md:text-xl text-black mt-4 lg:mt-36 2xl:mt-44 max-w-md font-light">
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
              <img class="w-2 h-2 md:w-6 md:h-6" src="assets/instagram.svg">
            </div>
            <div class="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center">
              <img class="w-2 h-2 md:w-6 md:h-6" src="assets/youtube.svg">
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center">
              <img class="w-2 h-2 md:w-6 md:h-6" src="assets/facebook.svg">
            </div>
            <div class="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center">
              <img class="w-2 h-2 md:w-6 md:h-6" src="assets/linkedin.svg">
            </div>
          </div>
        </div>

        <div class="w-3/5 h-full flex flex-col p-4 gap-4">
          <label>
            <p class="text-[5px] sm:text-[9px] md:text-base text-white font-semibold">Número</p>
            <input class="w-1/2 h-4 rounded-xl  p-1 text-[6px] sm:text-[10px]
                  md:w-4/5 md:h-10 md:rounded-full md:text-base
                  " v-model="newContact.number" v-maska data-maska="+55 (##) # ####-####" />
        </label>
        <label>
          <p class="text-[5px] sm:text-[9px] md:text-base text-white font-semibold">Seu e-mail</p>
          <input class="w-full h-4 rounded-xl  p-1 text-[6px] sm:text-[10px]
                  md:h-10 md:rounded-full md:text-base
                  " v-model="newContact.email" />
        </label>
        <label>
          <p class="text-[5px] sm:text-[9px] md:text-base text-white font-semibold mb-1">Sua mensagem</p>
          <textarea class="w-full h-full rounded-xl p-1 text-[6px] sm:text-[10px]
                  md:rounded-2xl md:text-base
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
const modalOpen = ref(false);
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

@media (min-width: 330px) {
  #main-content::before {
        height: 1550px;
    }
}

@media (min-width: 350px) {
  #main-content::before {
        height: 1450px;
    }
}

@media (min-width: 388px) {
  #main-content::before {
        height: 1350px;
    }
}

@media (min-width: 768px) {
  #main-content::before {
        top: 200px;
        height: 2450px;
    }
}

@media (min-width: 800px) {
  #main-content::before {
        top: 200px;
        height: 2350px;
    }
}

@media (min-width: 1024px) {
  #main-content::before {
        top: 110px;
        height: 3250px;
    }
}

@media (min-width: 1068px) {
  #main-content::before {
        top: 110px;
        height: 3150px;
    }
}

@media (min-width: 1100px) {
  #main-content::before {
        top: 180px;
        height: 3000px;
    }
}

@media (min-width: 1200px) {
  #main-content::before {
        top: 220px;
        height: 2950px;
    }
}

@media (min-width: 1260px) {
  #main-content::before {
        top: 250px;
        height: 2900px;
    }
}

@media (min-width: 1536px) {
  #main-content::before {
        top: 240px;
        height: 3000px;
    }
}
</style>