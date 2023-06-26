<template>
    <section class="hero is-success is-fullheight">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-success is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>

  <!-- Hero content: will be in the middle -->
    <div class="columns">
      <div class="column is-full">
        <Navbar />
      </div>
  </div>
    <div class="columns" style="overflow-y: scroll;">
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


  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
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
