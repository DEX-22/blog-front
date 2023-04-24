<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <button class="button is-white" @click="toggleSidebar">
            <span class="icon" :class="{ 'has-text-grey-lighter': !isOpen }">
                <i class="fas fa-bars"></i>
            </span>
        </button>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    Home
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
                        <RouterLink v-if="$route.name === 'login'" class="button is-primary" :to="{name:'register'}">Register</RouterLink>
                        <RouterLink v-else class="button is-light" :to="{name:'login'}">Logout</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import {userStore} from '@/modules/user/store'
// import { ActionTypes } from '@/store/user/types'

export default defineComponent({
  name: 'Header',
  setup() {
    const store = userStore()

    const isOpen = ref(false)

    const toggleSidebar = () => {
      isOpen.value = !isOpen.value
    }

    const logout = () => {
      store.dispatch(ActionTypes.LOGOUT)
    }

    return {
      isOpen,
      toggleSidebar,
      logout,
    }
  },
})
</script>