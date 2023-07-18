export default {
    path: '/posts',
    name: 'post',
    component: () => import('@/modules/post/views/Post.vue')
}