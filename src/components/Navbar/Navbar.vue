<template><header class="flex flex-wrap items-center bg-white px-6 py-2 lg:px-16 lg:py-0">
  <div class="flex flex-1 items-center justify-between">
    <a href="#">
      LOGO
    </a>
  </div>

  <label for="menu-toggle" class="pointer-cursor block lg:hidden"
    ><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <title>menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg
  ></label>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <div class="hidden w-full lg:flex lg:w-auto lg:items-center" id="menu">
    <nav>
      <ul class="items-center justify-between pt-4 text-base text-gray-700 lg:flex lg:pt-0">
        <li><a class="block border-b-2 border-transparent px-0 py-3 hover:border-indigo-400 lg:p-4" href="#">Features</a></li>
        <li><a class="block border-b-2 border-transparent px-0 py-3 hover:border-indigo-400 lg:p-4" href="#">Pricing</a></li>
        <li><a class="block border-b-2 border-transparent px-0 py-3 hover:border-indigo-400 lg:p-4" href="#">Documentation</a></li>
        <li><a class="mb-2 block border-b-2 border-transparent px-0 py-3 hover:border-indigo-400 lg:mb-0 lg:p-4" href="#">Support</a></li>
      </ul>
    </nav>
    <a href="#" class="pointer-cursor mb-4 flex items-center justify-start lg:mb-0 lg:ml-4">
      <img class="h-10 w-10 rounded-full border-2 border-transparent hover:border-indigo-400" src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg" alt="Andy Leverenz" />
    </a>
  </div>
</header>





        <!-- <nav :class="['navbar', isDark ? 'is-dark' : 'is-success']" role="navigation" aria-label="main navigation">
       
        <IconToggleDarkMode />
        

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" @click="goTo('home')">
                    Home  
                </a>
                <a class="navbar-item" @click="goTo('chat')">
                    Chat
                </a>

                <a class="navbar-item">
                    Documentation
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        More
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link v-if="$route.name === 'login'" class="button is-primary" :to="{name:'register'}">Register</router-link>
                        <router-link v-else class="button is-light" :to="{name:'login'}">Logout</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav> -->
</template>

<script>
import IconToggleDarkMode from '@/components/icons/IconToggleDarkMode.vue'
import { darkModeStore } from "@/store/darkmode/index";



export default{
    components:{
        IconToggleDarkMode
    },
    data(){return{
        darkModeStore: darkModeStore()
    }},
    methods:{
        goTo(name){
            
            this.$router.push({name})
        }
    },
    computed:{
        isDark(){
            return this.darkModeStore.isDarkModeOn
        }
    }
}

</script>
