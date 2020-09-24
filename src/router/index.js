import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Contactus from '../views/Contactus.vue'

Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  base:process.env.BASE_URL, 
 routes : [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About

   },
   {
    path: '/services',
    name: 'Services',
    component: Services

   },
   {
    path: '/contactus',
    name: 'Contactus',
    component: Contactus

   }
]

})


