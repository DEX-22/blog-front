
import AuthService from '@/modules/auth/service'
import type { AuthActions,RegisterI,LoginI} from '@/interfaces/login/index'


export default{
    async register(this:AuthActions,info:RegisterI){
      
      const user = await AuthService.register(info)
  
      if(user.hasErrors){
          return user
      } 

      return user
    },
    async login(this: AuthActions, credentials:LoginI) {
        const {user_name,password} = credentials
  
        this.user_name = user_name
        this.password = password
        
        const login = await AuthService.login(credentials)
  
        if(login.hasErrors){
            return login
        }
          
  
        this.token = login.data.token
        localStorage.setItem('token', this.token)
  
        return login
      },
      logout(this: AuthActions):void {
        this.token = ''
        localStorage.removeItem('token')
      },
}