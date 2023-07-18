import type { CreatePostI } from "@/interfaces/post"
import axios from "@/service"

class PostService {

    token:string= ""

    constructor(){
        // axios.config
    }

    async createNewPost(post:CreatePostI){
        try {
            const data = await axios.post('post/new',{...post})
            return data

        } catch (error) {
            console.table(error);
            
        }

    }
    async getAllPosts(){
        const {data,status} = await axios.post('auth/post/get-all')

        return data
    }
}

export default new PostService()

 