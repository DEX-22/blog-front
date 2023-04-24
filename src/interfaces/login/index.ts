export interface Ilogin{
    user_name: string
    password: string
}
export interface UserState {
    token: string
    login:Ilogin
}

