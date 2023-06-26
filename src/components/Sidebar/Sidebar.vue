<template><div>
  asdasd    
</div>
</template>

<script>
import UserCard from '@/components/Right/UserCard.vue'

export default {
  name: 'UserPage',
  components: {
    UserCard
  },
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        image: 'https://bulma.io/images/placeholders/1280x960.png',
        friends: 500,
        images: 1000
        // Otras opciones aquí...
      }
    }
  }
}
</script>

<style scoped>
/* Estilos de la página aquí */
</style>
