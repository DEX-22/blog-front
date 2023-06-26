import {authStore} from '@/modules/auth/store/index'



export interface LoginI{
    user_name: string
    password: string
}
export interface UserStateI {
    
}
export interface AuthStateI{
    token: string
    login: LoginI
}
export interface AuthGetterI{
    isLoggedIn : (state: AuthStateI) => any
}

// export type AuthActions = ActionContext<typeof authStore> 
// export type AuthGetters = GetterContext<typeof >


