<template>
  <div
    class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl"
  >
    <div>
      <label
        for="email"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Content</label
      >
      <div class="mt-2">
        <textarea
          v-model="description"
          class="input"
          rows="2"
          placeholder="Describe everything about this post here"
        ></textarea>
      </div>
    </div>

    <!-- icons -->
    <div class="icons flex text-gray-500 m-2">
      <svg
        class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <svg
        class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <svg
        class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
        />
      </svg>
      <div class="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
    </div>
    <!-- buttons -->
    <div class="buttons flex gap-4">
      <button class="btn bg-red-300 hover:bg-red-800">Cancel</button>
      <button @click="createPost" class="btn bg-gray-600 hover:bg-gray-800">
        Publish
      </button>
    </div>
  </div>
</template>
  
  <script lang="ts" setup>
import { computed, ref } from "vue";
import PostService from "@/modules/post/post.service.ts";
import {authStore} from "@/modules/auth/store/index.ts";
import { storeToRefs } from 'pinia'

const auth = authStore()
const {currentUser} = storeToRefs(auth) 
const { id } = currentUser.value
const description = ref('')

const createPost = async () => {
  
  const data = {
    description: description.value,
    user_id: id  ,
  };
  const status = await PostService.createNewPost(data);
};
</script>
  