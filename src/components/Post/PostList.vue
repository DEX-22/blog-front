<template>
    <div class="columns mt-4 px-4" v-for="post in posts" :key="post.id">
        <div class="card column is-full  mb-2">
            <div class="card-content">
                <p class="title is-4">{{ post.title }}</p>
                <p class="subtitle is-6">{{ post.user.name }}</p>
                <div class="content">{{ post.content }}</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

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