import type { UserStateI } from '@/interfaces/login'
import UserService from '@/modules/user/service'


export default {
    async getInformation(user = null){
         
        try {
            
            const data = user ? user :  (await UserService.getUser()).data
            
            this.email = data.email
            this.id = data.id
            this.name = data.name

        } catch (error) {
            throw new Error("no se encontro el usuario");
            
        }
        
        
    },
}