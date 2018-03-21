import Vue from 'vue'
import Router from 'vue-router'

const Manager = () => import('@/view/manager')
const Login = () => import('@/view/login')
const ForgetPsw = () => import('@/view/forgetpsw')
const ChangePwd = () => import('@/view/changepassword')
const Register = () => import('@/view/register')
const MemberManager = () => import('@/view/membermanager')
const ScoreCount = () => import('@/view/scorecount')
const ScoreHistory = () => import('@/view/scorehistory')
const OrderManager = () => import('@/view/ordermanager')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      meta: { userState: 3 }
    },
    {
      path: '/home',
      component: Manager,
      meta: { userState: 1 },
      children: [
        {
          path: 'changepwd',
          component: ChangePwd,
          meta: { userState: 1 }
        },
        {
          path: 'membermanager',
          component: MemberManager,
          meta: { userState: 1 }
        },
        {
          path: 'scorecount',
          component: ScoreCount,
          meta: { userState: 1 }
        },
        {
          path: 'scorehistory/:id/:name',
          component: ScoreHistory,
          meta: { userState: 1 }
        },
        {
          path: 'ordermanager',
          component: OrderManager,
          meta: { userState: 1 }
        }
      ]
    },
    {
      path: '/forgetpsw',
      component: ForgetPsw
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '*',
      component: Login,
      meta: { userState: 3 }
    }
  ],
  mode: 'history'
})
