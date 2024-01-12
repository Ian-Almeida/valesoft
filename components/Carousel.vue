<template>
    <div class="flex w-full white h-fit items-center justify-center">

        <div class="marquee">
            <ul class="marquee-content flex text-black">
                <template v-for="i in 2">
                <slot></slot>
                </template>                
            </ul>
        </div>
        
    </div>
</template>

<script lang="ts" setup>

const screenWidth = ref(0);

const setNumberofElements = () => {
  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
  const marqueeContent = document.querySelector("ul.marquee-content");

  
  if (screenWidth.value < 1024) {
    root.style.setProperty("--marquee-elements", marqueeContent.children.length*1.5);
  } else if (screenWidth.value >= 1024 && screenWidth.value < 1280) {
    root.style.setProperty("--marquee-elements", marqueeContent.children.length*2);
  } else {
    root.style.setProperty("--marquee-elements", marqueeContent.children.length*3);
  }
}

const handleResize = () => {
  setNumberofElements();
}
onMounted(() => {
  screenWidth.value = window.innerWidth;
  const root = document.documentElement;
  window.addEventListener('resize', handleResize);
  nextTick(() => {
      
    setNumberofElements();
  })
})
</script>

<style>

:root {
  --marquee-width: 100%;
  --marquee-height: 3rem;
  /* --marquee-elements: 12; */ /* defined with JavaScript */
  --marquee-elements-displayed: 3;
  --marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));
  --marquee-animation-duration: calc(var(--marquee-elements) * 0.3s);
}

@media (min-width: 1024px) {
  :root {
    --marquee-elements-displayed: 4;
    --marquee-animation-duration: calc(var(--marquee-elements) * 0.3s);
  }
  .marquee:before, .marquee:after { width: 5rem; }
}

@media (min-width: 1280px) {
  :root {
    --marquee-elements-displayed: 6;
  }
  .marquee:before, .marquee:after { width: 10rem; }
}

.marquee {
  width: var(--marquee-width);
  height: var(--marquee-height);
  /* background-color: #111; */
  color: #eee;
  overflow: hidden;
  position: relative;
}
.marquee:before, .marquee:after {
  position: absolute;
  top: 0;
  width: 1.5rem;
  height: 100%;
  content: "";
  z-index: 1;
}
.marquee:before {
  left: 0;
  background: linear-gradient(to right, white 0%, transparent 100%);
}
.marquee:after {
  right: 0;
  background: linear-gradient(to left, white 0%, transparent 100%);
}
.marquee-content {
  list-style: none;
  height: 100%;
  display: flex;
  
}
/* .marquee-content:hover {
  animation-play-state: paused;
} */
@keyframes scrolling {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements))); }
}
.marquee-content li {
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  flex-shrink: 0;
  width: var(--marquee-element-width);
  max-height: 100%;
  font-size: calc(var(--marquee-height)*3/4); /* 5rem; */
  white-space: nowrap;
  animation: scrolling var(--marquee-animation-duration) linear infinite;
}

</style>