<template>
    <div class="container" >
      <h2 class="title">Iniciar sesión</h2>
      <!-- <form @submit.prevent="handleSubmit"> -->
        <div class="field">
          <label class="label">Nombre de usuario</label>
          <div class="control">
              <input class="input" type="text" v-model="user_name">
          </div>
        </div>
        <div class="field">
          <label class="label">Contraseña</label>
          <div class="control">
              <input class="input" type="password" v-model="password">
          </div>
        </div>
        <div>
          <button @click="handleSubmit" class="button is-primary" type="submit" >Iniciar sesión</button>
        </div>
        
        <span> Aun no tienes una cuenta? <router-link :to="{name:'register'}"> Registrese</router-link> </span>
        <!-- </form> -->
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineComponent,ref,inject } from 'vue';
  import { userStore } from '@/modules/user/store'
import { useRouter } from 'vue-router';
  
  const router = useRouter()
  const swal = inject('$swal')

  let user_name = ref('')
  let password = ref('')


  const store = userStore();
  const handleSubmit = async () => {
  
      const {hasErrors,data} = await store.login( {
              user_name: user_name.value,
              password: password.value
              })
     
      if(hasErrors)
        swal(data);
      
      // store.token = token;
      router.push('/home');
   
  };

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
  width: 350px;
  height: 500px;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
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
  