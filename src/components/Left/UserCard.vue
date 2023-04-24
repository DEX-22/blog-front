<template>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="user.image" :alt="user.name">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="user.image" :alt="user.name">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ user.name }}</p>
            <p class="subtitle is-6">{{ user.email }}</p>
          </div>
        </div>
        <div class="content">
          <p>Amigos: {{ user.friends }}</p>
          <p>Imágenes: {{ user.images }}</p>
          <!-- Otras opciones aquí... -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserCard',
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 20px;
  }
  </style>
  