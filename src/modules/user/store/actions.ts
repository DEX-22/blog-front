import type { UserStateI } from '@/interfaces/login'
import UserService from '@/modules/user/service'


export default {
    async getInformation(user = null){
         
        try {
            
            const data = user ? user :  (await UserService.getUser()).data
            
            this.id = data.id
            this.email = data.email
            this.name = data.name
            this.avatar = data.avatar

        } catch (error) {
            throw new Error("no se encontro el usuario");
            
        }
        
        
    },
}