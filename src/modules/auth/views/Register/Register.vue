<template>
    <div class="container " style="border:1px red solid;">
      <h2 class="title ">Registrarme</h2>
      <!-- <form @submit.prevent="handleSubmit"> -->
        <div class="field">
          <label class="label">Nombre de usuario</label>
          <div class="control">
            <input class="input" type="text" v-model="username">
          </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" v-model="email">
            </div>
          </div>
        <div class="field">
          <label class="label">Contraseña</label>
          <div class="control">
            <input class="input" type="password" v-model="password">
          </div>
        </div>
        <div class="my-4">
          <button class="button is-primary" type="submit" >Registrar</button>
        </div>
        
        <span class="is-flex is-align-self-baseline"> Ya estas registrado? vuelve al <router-link class="ml-1" :to="{name:'login'}"> login</router-link> </span>
        <!-- </form> -->
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineComponent, ref } from 'vue'
  import { userStore } from '@/modules/user/store'
  
      const user = userStore()
      
      const username = ref('')
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
  
  </script>
  <style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
  }
  .title {
    margin-bottom: 1.5rem;
  }
    .container {
  position: relative;
  width: 30rem;
  height: 31.25rem;
  border-radius: 1.25rem;
  padding: 2.5rem;
  box-sizing: border-box;
  background: #ecf0f3;
  margin-top: 10rem;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
}
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: #ecf0f3;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  place-items: center;
  overflow: hidden;
  font-family: poppins;
}
  </style>