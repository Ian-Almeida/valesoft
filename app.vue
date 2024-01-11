<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
/* https://codepen.io/Coding_Journey/pen/yWjWKd */
html {
   font-family: "Montserrat";
   @apply scroll-smooth;
}

.leaf-top-right {
  @apply rounded-b-2xl rounded-tl-2xl md:rounded-b-3xl md:rounded-tl-3xl 2xl:rounded-b-[3rem] 2xl:rounded-tl-[3rem] rounded-tr-none;
}

.leaf-top-left {
  @apply rounded-b-2xl rounded-tr-2xl md:rounded-b-3xl md:rounded-tr-3xl 2xl:rounded-b-[3rem] 2xl:rounded-tr-[3rem] rounded-tl-none;
}

.leaf-bottom-right {
  @apply rounded-bl-2xl rounded-t-2xl md:rounded-bl-3xl md:rounded-t-3xl 2xl:rounded-bl-[3rem] 2xl:rounded-t-[3rem] rounded-br-none;
}

.leaf-bottom-left {
  @apply rounded-br-2xl rounded-t-2xl md:rounded-br-3xl md:rounded-t-3xl 2xl:rounded-br-[3rem] 2xl:rounded-t-[3rem] rounded-bl-none;
}
</style>