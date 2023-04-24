<template>
    <div class="card">
      <div class="card-content">
        <div class="field">
          <label class="label">Título del Post</label>
          <div class="control">
            <input class="input" type="text" v-model="title">
          </div>
        </div>
        <div class="field">
          <label class="label">Contenido del Post</label>
          <div class="control">
            <textarea class="textarea" v-model="content"></textarea>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary" @click="createPost">Crear Post</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CreatePost',
    data() {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      createPost() {
        const data = {
          title: this.title,
          content: this.content
        }
        // Lógica para enviar datos al servidor aquí...
        this.title = ''
        this.content = ''
      }
    }
  }
  </script>
  