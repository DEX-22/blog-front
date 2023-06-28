<!-- Sección de información del usuario -->
<!-- Sección de crear post -->
<!-- Sección de posts -->
<template>
  <div class="columns">
      <div class="column is-full">
        <Navbar />
      </div>
  </div>
    <div class="columns">
      <div class="column is-one-quarter">
        <LeftComponent :user="user" />
      </div>
      <div class="column">
        <div class="container mb-2">
            <CreatePost />
        </div>
          <!-- <div class=""> -->
            
              <PostList :posts="posts"/>
            
          <!-- </div> -->
      </div>

      <div class="column is-one-third">
        <RightComponent  :user="user" />
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  import { reactive,  } from 'vue'
  import CreatePost from '@/components/Post/CreatePost.vue'
  import LeftComponent from '@/components/Left/LeftComponent.vue'
  import RightComponent from '@/components/Right/RightComponent.vue'
  import Navbar from '@/components/Navbar/Navbar.vue'
  import PostList from '@/components/Post/PostList.vue'

  const user = reactive({
        
          name: 'John Doe',
          email: 'johndoe@example.com',
          avatar: 'https://bulma.io/images/placeholders/64x64.png'
      })
  const posts = reactive([
    {
      title:'ASDFASD ASD ASD AS asas d ',
      user:{
        name:'ASDFASD AS asas d '
      },
      content:'ASDFASD ASD ASD AS asas d ',
    },
    {
      title:'ASDFASD ASD ASD AS asas d ',
      user:{
        name:'ASDFASD AS asas d '
      },
      content:'ASDFASD ASD ASD AS asas d ',
    },
    {
      title:'ASDFASD ASD ASD AS asas d ',
      user:{
        name:'ASDFASD AS asas d '
      },
      content:'ASDFASD ASD ASD AS asas d ',
    },
    {
      title:'ASDFASD ASD ASD AS asas d ',
      user:{
        name:'ASDFASD AS asas d '
      },
      content:'ASDFASD ASD ASD AS asas d ',
    }
  ])
  
      const fetchPosts = async () => {
        // Aquí podrías hacer una llamada a una API para obtener los posts
        // Por ahora, vamos a dejarlo vacío
      }

  </script>
  