import type {AuthStateI} from '@/interfaces/login/index'

export default ():AuthStateI => ({
        token :localStorage.getItem('token') || "",
        login:{
            user_name: '',
            password: '',
        },
        currentUser: {
            user_id: 0,
            email: '',
            name: ''
        }
})