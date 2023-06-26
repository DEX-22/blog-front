<template>

<div class="container">
      <div class="box is-fullheight">
        <div class="columns is-flex-direction-column is-justify-content-space-between is-align-items-center">
          <div class="column">
            <figure class="image is-128x128">
              <img :src="user.avatar" :alt="user.name">
            </figure>
          </div>
          <div class="column">
            <p class="title is-4">{{ user.name }}</p>
            <p class="subtitle is-6">{{ user.email }}</p>
          </div>
        </div>
        <nav class="panel">
          <p class="panel-heading">
            Menú
          </p>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-image"></i>
            </span>
            Mis fotos
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-users"></i>
            </span>
            Mis amigos
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-cog"></i>
            </span>
            Configuración
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-sign-out-alt"></i>
            </span>
            Salir
          </a>
        </nav>
      </div>
</div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    name: 'LeftSidebar',
    setup() {
      const user = reactive({
        name: 'John Doe',
        email: 'johndoe@example.com',
        avatar: 'https://via.placeholder.com/128x128',
      });
  
      return {
        user,
      };
    },
  };
  </script>
  
  