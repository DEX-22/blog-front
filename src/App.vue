

<template>

  <div :class="{'dark':isDarkModeOn}">

   <router-view />
  </div>

</template>

<script>

export default{
  data(){return {

  }},
  computed:{
    isDarkModeOn(){
      return window.localStorage.getItem('theme')?? true
    }
  }
}

</script>
