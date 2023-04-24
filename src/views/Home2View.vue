<template>
  <header>
    <Navbar />
  </header>
  <main class="is-flex h-full" style="border:1px red solid;">
    <aside>
      <Sidebar />
    </aside>
    <article>
        <Post/>
    </article>
    <aside>

    </aside>
    <router-view />
  </main>
</template>

<script setup lang="ts">

import Navbar from '@/components/Navbar/Navbar.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import Post from '@/components/Post/Post.vue';


</script>
<style scoped>

.h-full{
  height: auto;
}

</style>
