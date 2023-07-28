import axios from "@/service"
import type {UserI} from "@/interfaces/login/index"


class UserService {
    async getUser(){
        try {
            const {data}  = await axios.get('/user') 

            return {hasErrors:false,data}

        } catch (error) {

            let stringErrors = error.response.data.errors
              
            return {hasErrors: true, data:stringErrors}
        }
    }
}

export default new UserService ()