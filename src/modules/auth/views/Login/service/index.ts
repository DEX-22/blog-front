import axios from "@/service"
import type {Ilogin} from "@/interfaces/login/index"


class LoginService{

    async index(credentials:Ilogin){

        try {
            const {status,data} = await axios.post('/login',credentials)

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




export default new LoginService()