import MainLayoutView from '@/layout/main_layout/MainLayoutView.vue'
import DashBoardView from '@/views/Dashboard/DashBoardView.vue'
const admin_router_group = [
  {
    path: '/',
    name: 'admin',
    component: MainLayoutView,
    children: [
      {
        path: '/',
        name: 'admin-dashboard',
        component: DashBoardView,
      },
    ],
  },
]

export default admin_router_group
