import LoginRoute from '@/modules/auth/views/Login/routes/index'
import RegisterRoute from '@/modules/auth/views/Register/routes/index'

export default 
[
    LoginRoute,
    RegisterRoute,
    // { path: '/perfil', component: Perfil, meta: { requiresAuth: true } },
]