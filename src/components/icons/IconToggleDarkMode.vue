<template>
    <div class="switch">
      <input type="checkbox" class="checkbox" id="checkbox"  @click="toggleColor">
      <label for="checkbox" class="label" >
        <!-- <icon v-show="!darkModeStore.isDarkMoodeOn" :icon="['fa', 'moon']" />
        <icon v-show="!darkModeStore.isDarkMoodeOn" :icon="['fa', 'sun']" />  -->
        <div class="ball" ></div>
      </label>
  </div>
  </template>
  
  <script >
  import { computed, defineComponent } from 'vue'
  import { darkModeStore } from '@/store/darkmode/index'
  
  // const darkModeStore = darkModeStore()
  
  export default{
    data(){return{
      darkModeStore:darkModeStore()
    }},
    methods:{
      toggleColor(){
        console.log('asdasd');
        this.darkModeStore.toggle()
      }
    },
    computed:{
      isDark(){
        return this.darkModeStore.isDarkModeOn
      }
    }
  }

    
  </script>
  
  <style scoped>
  .switch{
  justify-content: center;
  align-items: center;
  display: flex;
}
.checkbox{
  opacity: 0;
  position: absolute;
}
.label{
  background-color: #a6a6a6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 50px;
  position: relative;
  width: 50px;
  height: 26px;
}
.ball{
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  transition: transform 0.2s linear;
}
.checkbox:checked + .label .ball{
  transform: translateX(24px);
}
.checkbox:checked + .label{
  background-color: #212121;
}
.fa-moon{
  color: #f1c40f;
}
.fa-sun{
  color: #f1c40f;
}
  </style>
  