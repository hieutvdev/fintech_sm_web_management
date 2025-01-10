import AuthenticationView from '@/views/Authentication/AuthenticationView.vue'
import SignInView from '@/views/Authentication/SignInView.vue'
import SignUpView from '@/views/Authentication/SignUpView.vue'
import ForgotPasswordView from '@/views/Authentication/ForgotPasswordView.vue'
import VerifyCodeView from '@/views/Authentication/VerifyCodeView.vue'

const client_auth_router = [
  {
    path: '/auth',
    name: 'auth',
    component: AuthenticationView,
    children: [
      {
        path: '/auth/login',
        name: 'login',
        component: SignInView,
      },
      {
        path: '/auth/signup',
        name: 'signup',
        component: SignUpView,
      },
      {
        path: '/auth/forgot-password',
        name: 'forgot-password',
        component: ForgotPasswordView,
      },
      {
        path: '/auth/:email/verify',
        name: 'verify',
        component: VerifyCodeView,
      },
    ],
  },
]

export default client_auth_router
