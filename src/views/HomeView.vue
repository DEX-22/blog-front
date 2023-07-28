<template>
  <div :class="{'dark':isDark}" class="min-h-screen grid grid-cols-2 sm:grid-cols-3 bg-light dark:bg-dark">
     {{isDark}}
    <router-view />
  </div>
</template>
  <script lang="ts" setup>
  import {darkMode} from '@/config/composables/darkmode.composable.ts';
import { computed } from 'vue';

const isDark = computed(()=>{
  return darkMode.isDarkModeOn
})
  
 </script>
<style scoped>
</style>