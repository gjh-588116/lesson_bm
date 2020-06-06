import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld' @代表src
import Goods from '@/components/goods/goods'
import Rating from '@/components/ratings/ratings'
import Seller from '@/components/seller/seller'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Rating
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ]
})
