<template>
    <div class="login">
      <h2 class="title">Iniciar sesión</h2>
      <form @submit.prevent="handleSubmit">
        <div class="field">
          <label class="label">Nombre de usuario</label>
          <div class="control">
            <input class="input" type="text" v-model="username">
          </div>
        </div>
        <div class="field">
          <label class="label">Contraseña</label>
          <div class="control">
            <input class="input" type="password" v-model="password">
          </div>
        </div>
        <router-link class="button is-primary" type="submit" :to="{name:'home'}">Iniciar sesión</router-link>
      </form>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  // import { useStore } from 'pinia';
  // import { login } from '@/api';
  
  export default defineComponent({
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    setup() {
      // const store = useStore();
      // const handleSubmit = async () => {
      //   try {
      //     const token = await login(username, password);
      //     store.token = token;
      //     this.$router.push('/');
      //   } catch (error) {
      //     console.error(error);
      //   }
      // };
      // return {
      //   handleSubmit
      // };
    }
  });
  </script>
  
  <style>
  .login {
    max-width: 400px;
    margin: 0 auto;
  }
  .title {
    margin-bottom: 1.5rem;
  }
  </style>
  