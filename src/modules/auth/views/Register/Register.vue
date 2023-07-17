<template>
<div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6" >
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
             <input  type="text" v-model="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
             <input  type="text" v-model="name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
             <input   type="password" v-model="password"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button @click="registerUser" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
        </div>
      </div>

      <p class="mt-10 text-center text-sm text-gray-500">
        Ya estas registrado? vuelve al  
        {{ ' ' }}
           <router-link class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" :to="{name:'login'}"> Login</router-link>
          
      </p>
    </div>
  </div> 
  </template>
  
  <script lang="ts" setup>
  import { defineComponent, ref,inject } from 'vue'
  import { authStore } from '@/modules/auth/store'
  import { useRouter } from 'vue-router'
  const swal = inject("$swal");
  
      const auth = authStore()
      const router = useRouter()
      
      const name = ref('')
      const email = ref('')
      const password = ref('')
  
      const registerUser = async () => {
        try {
          const {data,hasErrors} = await auth.register({ email: email.value, password: password.value,name:name.value })
          if(hasErrors){
            swal(data)
            return
          } 
          router.push('/login')
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