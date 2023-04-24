<template>
    <form @submit.prevent="submit">
      <div class="field has-addons">
        <div class="control">
          <input class="input" type="text" placeholder="Buscar..." v-model="query" />
        </div>
        <div class="control">
          <button class="button is-primary" type="submit">
            Buscar
          </button>
        </div>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: ''
      }
    },
    methods: {
      submit() {
        this.$emit('search', this.query)
        this.query = ''
      }
    }
  }
  </script>
  