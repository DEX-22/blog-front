<template>
  
      <!-- post card -->  
        <!--horizantil margin is just for display-->
        <div class="flex items-start px-4 py-6">
          <img
            class="avatar"
            :src="post.imageUrl"
            alt="avatar"
          />
          <div class="">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold text-gray-900 -mt-1">
                {{post.name}}
              </h2>
              <small class="text-sm text-gray-700">NOW</small>
            </div> 
            <p class="mt-3 text-gray-700 text-sm">
              Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit
              amet!
            </p>
            <div class="mt-4 flex items-center">
              <div class="flex mr-2 text-gray-700 text-sm mr-4">
                <DeviceTabletIcon class="h-5 w-5 text-red-800 " :class="{'fill-red-800':(post.id%2 == 1) }"/>
                <span>12</span>
              </div>
              <div class="flex mr-2 text-gray-700 text-sm mr-4">
                <DeviceTabletIcon class="h-5 w-5 text-green-600" :class="{'fill-green-600':(post.id%2 != 1)  }"/>
                <span>12</span>
              </div>
              <div class="flex mr-2 text-gray-700 text-sm mr-4">
                <ChatBubbleOvalLeftEllipsisIcon class="w-5 h-5 text-blue-800"/>
                <span>8</span>
              </div>
              <div class="flex text-sm mr-4 text-gray-700 mr-4">
               <ShareIcon class="w-5 h-5 text-pink-700" />
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
</template>

<script lang="ts" setup>
import { computed,defineProps } from "vue";
import {DeviceTabletIcon,ShareIcon,ChatBubbleOvalLeftEllipsisIcon} from '@heroicons/vue/24/outline'


const props = defineProps<{
    post : {
        name:String,
        email:String,
        role:String,
        imageUrl:String,
        lastSeen:String,
        lastSeenDateTime:String
    },
    index: number
}>() 

const post = computed(()=>{
  return props.post
})

  // const peopleOrdered = computed(() => {
  //   return people.sort((a,b)=>{a.name.length - b.name.length})
  // })

     </script>
    <style scoped>
    .avatar{
     @apply w-12 h-12 rounded-full object-cover mr-4 shadow;
    }
    </style>