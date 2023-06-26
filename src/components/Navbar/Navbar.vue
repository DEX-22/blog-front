<template>
        <nav :class="['navbar', isDark ? 'is-dark' : 'is-success']" role="navigation" aria-label="main navigation">
       
        <IconToggleDarkMode />
        

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    Home  
                </a>
                <router-link class="navbar-item" :to="{name:'chat'}">
                    Chat
                </router-link>

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
    </nav>
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
    computed:{
        isDark(){
            return this.darkModeStore.isDarkModeOn
        }
    }
}

</script>
