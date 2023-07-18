<template>
  <div class="min-h-screen grid grid-cols-2 sm:grid-cols-3">
  
    <!-- <LeftComponent :user="user"  class="hidden md:bock"  /> -->
  
  <div class="col-span-2">
    <Navbar class="h-20  w-screen " />
    <router-view />
  <!-- </div>   -->
   
</div>
</template>
  <script lang="ts" setup>
import { reactive } from "vue";


import CreatePost from "@/components/Post/CreatePost.vue";
import LeftComponent from "@/components/Left/LeftComponent.vue";
import RightComponent from "@/components/Right/RightComponent.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import PostList from "@/components/Post/PostList.vue";

 
</script>
<style scoped>

</style>