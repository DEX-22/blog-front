<template>
  <header>
    <Navbar />
  </header>
  <Sidebar />
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">

import Navbar from '@/components/Navbar/Navbar.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'



</script>
