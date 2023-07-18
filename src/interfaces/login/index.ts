import {authStore} from '@/modules/auth/store/index'


export interface UserI{
    user_id: number,
    email: string,
    name:string
}
export interface LoginI{
    user_name: string
    password: string
}
export interface RegisterI extends LoginI{
    email: string
}
export interface UserStateI {
    
}
export interface AuthStateI{
    token: string
    login: LoginI,
    currentUser: UserI
}
export interface AuthGetterI{
    isLoggedIn : (state: AuthStateI) => any
}

// export type AuthActions = ActionContext<typeof authStore> 
// export type AuthGetters = GetterContext<typeof >


