<template>
    <div>
      <h2 class="title is-5">Redes sociales</h2>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.url" target="_blank">{{ link.name }}</a>
        </li>
      </ul>
      <div>
        <h3 class="subtitle is-6">{{ feedTitle }}</h3>
        <ul>
          <li v-for="(item, index) in feedItems" :key="index">
            <a :href="item.link" target="_blank">{{ item.title }}</a>
            <p>{{ item.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        links: [
          { name: 'Facebook', url: 'https://www.facebook.com/mi-blog' },
          { name: 'Twitter', url: 'https://www.twitter.com/mi-blog' },
          { name: 'Instagram', url: 'https://www.instagram.com/mi-blog' },
          { name: 'LinkedIn', url: 'https://www.linkedin.com/company/mi-blog' }
        ],
        feedTitle: 'Últimos tweets',
        feedItems: []
      }
    },
    mounted() {
      this.getFeed()
    },
    methods: {
      async getFeed() {
        try {
          const response = await axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json', {
            params: {
              screen_name: 'mi-blog',
              count: 5
            },
            headers: {
              Authorization: 'Bearer TU_TOKEN_DE_TWITTER'
            }
          })
          this.feedItems = response.data.map(item => {
            return {
              title: item.text,
              link: `https://twitter.com/mi-blog/status/${item.id_str}`,
              description: item.created_at
            }
          })
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  </script>
  