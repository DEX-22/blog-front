<template>
    <div class="container">
    <!-- Sección de información adicional del usuario -->
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <!-- <figure class="image is-64x64">
              <img :src="user.avatar" :alt="user.name" />
            </figure> -->
          </div>
          <div class="media-content">
            <p class="title is-4">{{ user.name }}</p>
            <p class="subtitle is-6">{{ user.email }}</p>
          </div>
        </div>
        <div class="content">
          <h5 class="title is-5">Opciones adicionales</h5>
          <ul>
            <li><a href="#">Configuración</a></li>
            <li><a href="#">Mensajes</a></li>
            <li><a href="#">Actividad</a></li>
            <li><a href="#">Ayuda</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

import {defineProps} from 'vue'

defineProps<{
  user: {
    name:string,
    email:string
  }
}>()

</script>