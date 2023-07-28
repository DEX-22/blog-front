<template>
    <button
            type="button"
            @click="click"
            :class="{'dark':isDarkModeOn}"
            class="float-left rounded-full  p-2     "
          >
            <span class="sr-only">text</span>
            <component :is="miIcon" class="h-8 w-8" aria-hidden="true" />
    </button>
</template>
<script lang="ts" setup>
import { SunIcon,
  MoonIcon,
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ChatBubbleLeftRightIcon,
  NewspaperIcon,
  UserIcon} from "@heroicons/vue/24/outline";
import { computed } from "vue";
import {darkModeStore} from '@/store/darkmode/index.ts';

const isDarkModeOn = computed(() => {
   const darkMode = darkModeStore() 
  return darkMode.isDarkModeOn
})


const props = defineProps({
    icon:{
        type:String,
        default: 'UserIcon'
    }, 
    params:{
        type: Array,
        default: []
    }
})
const miIcon = computed(()=>{

    const icons = {
        SunIcon,
        MoonIcon,
        Bars3Icon,
        BellIcon,
        XMarkIcon,
        ChatBubbleLeftRightIcon,
        NewspaperIcon,
        UserIcon}

    return icons[props.icon]
})
const emit =defineEmits({
    click : () => {}
})
const click = ()=>{
    emit('click')
}


</script>