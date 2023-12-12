<template>
<div class="w3-container">
  <div ref="modalRef" :class="`modal p-10 ${model ? 'block' : 'hidden'}`" @click="closeModal">
    <div 
        class="modal-content animate-top" 
        @click="(e) => e.stopPropagation()"
    >
        <svg class="absolute w-4 h-4 mr-2 right-0 text-white hover:bg-gray-500/20 hover:cursor-pointer rounded-md p-1" @click="closeModal"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <div class="bg-secondary p-4 rounded-t-lg">
            <slot name="title"></slot>
        </div>
        
        
        <slot></slot>
        
        <!-- <div class="modal-actions dark:text-black">
            <button class="
                font-bold border-2 border-black w-auto p-2 rounded-lg dark:bg-slate-300 hover:bg-gray-500/20 focus:ring-2 focus:ring-slate-300" @click="emits('cancel')">Cancelar</button>
            <button class="w-12 p-2 text-white dark:text-black text-lg font-bold bg-fourth dark:bg-primary hover:bg-fourth/70 dark:hover:bg-primary focus:ring-4 focus:outline-none rounded-lg  focus:ring-fourth dark:focus:ring-primary" @click="emits('confirm')">Confirmar</button>
        </div> -->
      
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

interface Props {
  modelValue: boolean;
  closable?: boolean;
  outsideClose?: boolean;
  width: number;
}

const props = withDefaults(defineProps<Props>(), {
    closable: true,
    modelValue: false,
    outsideClose: true,
    width: 0,
});

const emits = defineEmits(['update:modelValue', 'confirm', 'cancel']);

const model = computed({
  get () {
    return props.modelValue
  },

  set (value) {
    return emits('update:modelValue', value)
  }
})

const modalRef = ref<HTMLDivElement>();

const closeModal = () => {
    model.value = !model.value;
}
</script>

<style scoped>

.modal {
    @apply z-10 md:top-20 fixed left-0 top-0 w-full h-full overflow-auto bg-black/40;
}

.modal-content {
    @apply m-auto bg-white relative outline-0 shadow-lg rounded-lg text-black space-y-4 max-w-5xl;
}

.modal-actions {
    @apply flex gap-4 justify-center;
}

.animate-top {
    position: relative;
    animation: animatetop 0.4s
}

@keyframes animatetop {
    from {
        top: -300px;
        opacity: 0
    }

    to {
        top: 0;
        opacity: 1
    }
}
</style>