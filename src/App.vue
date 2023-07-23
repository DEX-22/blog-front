

<template>

  <div  :class="{'dark':isDark}"> 
   <router-view />
    
  </div>

</template>

<script lang="ts" setup>
import { computed,onBeforeMount,onMounted } from 'vue'
import {darkModeStore} from '@/store/darkmode';
import {userStore} from '@/modules/user/store' 

onBeforeMount(async ()=>{ 

    const user = userStore()

    if(!user.hasData){ 
      await user.getInformation()   
    }

  })
  
const isDark = computed(()=>{
  return darkModeStore.isDarkModeOn
})

</script>
