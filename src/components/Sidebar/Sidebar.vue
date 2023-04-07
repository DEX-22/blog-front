<template>
    <aside class="menu" :class="{ 'is-hidden-touch': !isOpen, 'is-hidden-desktop': !isMobile }">
      <div class="mt-5 mb-2 ml-5">
        <button class="button is-white" @click="toggleSidebar">
          <span class="icon" :class="{ 'has-text-grey-lighter': !isOpen }">
            <i class="fas fa-bars"></i>
          </span>
        </button>
      </div>
      <div class="menu-list" :class="{ 'is-hidden-touch': !isOpen, 'is-hidden-desktop': !isMobile }">
        <p class="menu-label">
          Opciones de navegación
        </p>
        <ul class="menu-list">
          <li>
            <!-- <router-link :to="{ name: 'Inicio' }" exact-active-class="is-active">
              <span class="icon">
                <i class="fas fa-home"></i>
              </span>
              <span>Inicio</span>
            </router-link> -->
          </li>
          <li>
            <!-- <router-link :to="{ name: 'Perfil' }" exact-active-class="is-active">
              <span class="icon">
                <i class="fas fa-user"></i>
              </span>
              <span>Mi perfil</span>
            </router-link> -->
          </li>
          <li>
            <!-- <router-link :to="{ name: 'Configuracion' }" exact-active-class="is-active">
              <span class="icon">
                <i class="fas fa-cog"></i>
              </span>
              <span>Configuración</span>
            </router-link> -->
          </li>
        </ul>
      </div>
    </aside>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  export default defineComponent({
    name: 'Sidebar',
    setup() {
      const isOpen = ref(false)
      const route = useRoute()
  
      const toggleSidebar = () => {
        isOpen.value = !isOpen.value
      }
  
      const isMobile = computed(() => {
        const width = window.innerWidth
        return width < 768 // Puedes ajustar el ancho de la pantalla para que se adapte a tus necesidades.
      })
  
      return { isOpen, toggleSidebar, isMobile, route }
    },
  })
  </script>
  
  <style scoped>
  .menu {
    height: 100%;
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    z-index: 20;
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
  }
  
  .menu-list {
    margin-left: 1em;
  }
  
  @media screen and (max-width: 768px) {
    .menu {
      display: none;
    }
  
    .is-hidden-touch {
      display: none !important;
    }
  
    .is-hidden-desktop {
      display: block !important;
    }
  
    .menu-label {
      display: none;
    }
  
    .menu-list {
      margin-left: 0;
    }
  }
  </style>
  