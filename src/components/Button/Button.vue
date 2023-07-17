<template>
    <button @click="click">

    </button>
</template>
<script lang="ts" setup>
import { emit } from "process"

const click = () => emit('click') 
</script>
