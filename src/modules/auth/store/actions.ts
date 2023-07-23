
import AuthService from '@/modules/auth/service'
import type { AuthActions,RegisterI,LoginI} from '@/interfaces/login/index'
import router from '@/router'
import { userStore } from '@/modules/user/store'


export default{
    async register(this:AuthActions,info:RegisterI){
      
      const user = await AuthService.register(info)
  
      if(user.hasErrors){
          return user
      } 

      return user
    },
    async login(this: AuthActions, credentials:LoginI) {
        const userSt = userStore()
        const {user_name,password} = credentials
  
        this.user_name = user_name
        this.password = password
        
        const login = await AuthService.login(credentials)
  
        if(login.hasErrors){
            return login
        }
          
        const {token,user} = login.data 
        this.token = token
        userSt.getInformation(user)
        localStorage.setItem('token', this.token)
  
        return login
      },
      logout(this: AuthActions):void {
        localStorage.removeItem('token')
        this.token = ''

        // router.push({name:'login'})
      },
}