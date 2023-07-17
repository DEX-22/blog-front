<template>
  <div class="bg-gray-800 text-md h-screen w-full flex flex-col items-center">
  <component v-for="(icon,index) in navigationIcons" :is="icon" :key="index" class="icon"  /> 
</div>
</template>

<script setup>
import {ref,reactive,defineAsyncComponent} from 'vue'
import { NewspaperIcon,Bars3Icon,ChatBubbleOvalLeftEllipsisIcon,UserIcon } from '@heroicons/vue/24/outline'
 
const isOpen = ref(false)

const navigationIcons = reactive([
  Bars3Icon,
  UserIcon,
  NewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon,
])
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

</script>
<style scoped>
.icon{
  @apply w-10 p-2 bg-gray-500 rounded-md m-3 text-gray-100 cursor-pointer hover:text-gray-400; 
}
</style>