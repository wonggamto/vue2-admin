import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import index from '@/views/index/index.vue'
import customer from '@/views/customer/customer.vue';
import employee from '@/views/employee/employee.vue';
import notice from '@/views/notice/notice.vue';
import order from '@/views/order/order.vue';
import stock from '@/views/stock/stock.vue';
import system from '@/views/system/system.vue';
import user from '@/views/user/user.vue';
import notFound from '@/views/notFound/notFound.vue';
import test from '@/views/test.vue';
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:'/',
    component:index,
    children:[
      {
        path:'customer',
        component:customer,
        children:[
          {path:'test',component:test}
        ]
      },
      {
        path:'employee',
        component:employee
      },
      {
        path:'notice',
        component:notice
      },
      {
        path:'order',
        component:order
      },
      {
        path:'/stock',
        component:stock
      },
      {
        path:'/system',
        component:system
      },
      {
        path:'user',
        component:user
      },
    ]
  },

  {
    path:'*',
    component:notFound
  }
]

const router = new VueRouter({
  routes
})

export default router
