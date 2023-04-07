<template>
    <form @submit.prevent="login">
      <div class="field">
        <label class="label">Correo electrónico</label>
        <div class="control">
          <input class="input" type="email" v-model="email" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Contraseña</label>
        <div class="control">
          <input class="input" type="password" v-model="password" required>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary">Iniciar sesión</button>
        </div>
      </div>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { userStore } from '@/modules/user/store'
  
  export default defineComponent({
    name: 'InicioSesion',
    setup() {
      const user = userStore()
  
      const email = ref('')
      const password = ref('')
  
      const login = async () => {
        try {
          // const response = await api.post('/login', { email: email.value, password: password.value })
          // user.login(response.data.token)
          // router.push('/perfil')
        } catch (error) {
          console.error(error)
        }
      }
  
      return { email, password, login }
    },
  })
  </script>
  