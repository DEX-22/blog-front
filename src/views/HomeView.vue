<template>
    <div class="container">
      <div class="columns">
          <!-- Sección de información del usuario -->
            <Right :user="user" />
          </div>
        </div>
        <div class="column">
          <!-- Sección de crear post -->
          <CreatePost />
          <!-- Sección de posts -->
          <div class="columns is-multiline">
            <div class="column is-one-third" v-for="post in posts" :key="post.id">
              <div class="card">
                <div class="card-content">
                  <p class="title is-4">{{ post.title }}</p>
                  <p class="subtitle is-6">{{ post.user.name }}</p>
                  <div class="content">{{ post.content }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Left />
      </div>
  </template>
  <script lang="ts" setup>
  import { reactive,  } from 'vue'
  import CreatePost from '@/components/Post/CreatePost.vue'
  import Left from '@/components/Left/Left.vue'

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
    }
  ])
  
      const fetchPosts = async () => {
        // Aquí podrías hacer una llamada a una API para obtener los posts
        // Por ahora, vamos a dejarlo vacío
      }

  </script>
  