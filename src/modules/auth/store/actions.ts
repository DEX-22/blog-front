
import LoginService from '@/modules/auth/service'
import type { AuthActions,LoginI} from '@/interfaces/login/index'


export default{
    async login(this: AuthActions, credentials:LoginI) {
        const {user_name,password} = credentials
  
        this.user_name = user_name
        this.password = password
        
        const login = await LoginService.index(credentials)
  
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