<template>
  <div class="h-screen grid grid-cols-12 grid-rows-6"> 
      <LeftComponent :user="user" class="fixed w-16 col-span-1 row-span-6"/> 
      <Navbar class="  h-16 col-span-12 row-span-1 " /> 
      <main class="col-span-8 row-span-5">
        <CreatePost /> 
        <PostList :posts="posts" /> 
      </main>
      <RightComponent class="col-span-3 row-span-6" :user="user" /> 
  </div>
</template>
  <script lang="ts" setup>
import { reactive } from "vue";


import CreatePost from "@/components/Post/CreatePost.vue";
import LeftComponent from "@/components/Left/LeftComponent.vue";
import RightComponent from "@/components/Right/RightComponent.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import PostList from "@/components/Post/PostList.vue";

const user = reactive({
  name: "John Doe",
  email: "johndoe@example.com",
  avatar: "https://bulma.io/images/placeholders/64x64.png",
});
const posts = reactive([
  {
    title: "ASDFASD ASD ASD AS asas d ",
    user: {
      name: "ASDFASD AS asas d ",
    },
    content: "ASDFASD ASD ASD AS asas d ",
  },
  {
    title: "ASDFASD ASD ASD AS asas d ",
    user: {
      name: "ASDFASD AS asas d ",
    },
    content: "ASDFASD ASD ASD AS asas d ",
  },
  {
    title: "ASDFASD ASD ASD AS asas d ",
    user: {
      name: "ASDFASD AS asas d ",
    },
    content: "ASDFASD ASD ASD AS asas d ",
  },
  {
    title: "ASDFASD ASD ASD AS asas d ",
    user: {
      name: "ASDFASD AS asas d ",
    },
    content: "ASDFASD ASD ASD AS asas d ",
  },
]);

const fetchPosts = async () => {
  // Aquí podrías hacer una llamada a una API para obtener los posts
  // Por ahora, vamos a dejarlo vacío
};
</script>
<style scoped>

</style>