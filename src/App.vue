

<template>

  <div  :class="{'dark':isDarkModeOn}"> 
   <router-view />
  </div>

</template>

<script lang="ts" setup>
import { computed,onMounted } from 'vue'
import {darkModeStore} from '@/store/darkmode/index.ts';

  
 

</script>
