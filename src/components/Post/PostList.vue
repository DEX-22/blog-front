<template>
    <div class="columns mt-4 px-4" v-for="post in posts" :key="post.id">
        <Post /> 
    </div>
</template>
<script lang="ts" setup>
import Post from './Post.vue'
import {defineProps} from 'vue'

defineProps<{
    posts : Array<
        {
        title: String,
        user: {
            name: String
        },
        content: String
    }>
}>()

</script>