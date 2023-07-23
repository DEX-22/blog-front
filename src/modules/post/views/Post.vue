<template>
<Navbar  />
    <main class="overflow-y-scroll p-4 h-full overflow-scroll ">
      <CreatePost class="w-full"  />
      <PostList class="w-full " />
    </main>
</template>
<script lang="ts" setup> 
import { reactive } from "vue";
import CreatePost from '@/components/Post/CreatePost.vue'
import PostList from '@/components/Post/PostList.vue';

const user = reactive({
  name: "John Doe",
  email: "johndoe@example.com",
  avatar: "https://bulma.io/images/placeholders/64x64.png",
});



</script>
