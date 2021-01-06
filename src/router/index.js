import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import AddCompany from '../views/AddCompany.vue'

import FirstStep from '../components/steps/FirstStep.vue';
import SecondStep from '../components/steps/SecondStep.vue';
// import ThirdStep from '../components/steps/ThirdStep.vue';
import ViewCompanies from '../views/Companies.vue'
import viewDetails from '../views/ViewComapnyPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddCompany',
    component: AddCompany 
  },
  {
    path: '/show-companies',
    name: 'ViewCompanies',
    component: ViewCompanies 
  },
  {
    path: '/view-details/:id',
    name: 'viewDetails',
    component: viewDetails 
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '/first-step', name: 'firstStep', component: FirstStep },
  { path: '/second-step', name: 'secondStep', component: SecondStep },
    // { path: '/third-step', name: 'thirdStep', component: ThirdStep },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
