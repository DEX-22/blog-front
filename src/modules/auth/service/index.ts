import axios from "@/service"
import type {loginI,RegisterI} from "@/interfaces/login/index"


class AuthService{

    async login(credentials:loginI){

        try {
            const {status,data} = await axios.post('login',credentials)

            return {hasErrors:false,data}

        } catch (error) {

            let stringErrors =''
            
            Object.values(error.response.data.errors).map( (el) =>{
                stringErrors += `${el[0]} \n`
            })

            return {hasErrors: true, data:stringErrors}
        }

    }

    async register(credentials: RegisterI){
        try {
            const {status,data} = await axios.post('register',credentials)

            return {hasErrors:false,data}

        } catch (error) {

            let stringErrors =''
            
            Object.values(error.response.data.errors).map( (el) =>{
                stringErrors += `${el[0]} \n`
            })

            return {hasErrors: true, data:stringErrors}
        }
    }

}




export default new AuthService()