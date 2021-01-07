import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import AddCompany from '../views/AddCompany.vue';

import FirstStep from '../components/steps/FirstStep.vue';
import SecondStep from '../components/steps/SecondStep.vue';

import ViewCompanies from '../views/Companies.vue';
import viewDetails from '../views/ViewComapnyPage.vue';
import editDetails from '../components/steps/Edit.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'AddCompany',
    component: AddCompany,
  },
  {
    path: '/show-companies',
    name: 'ViewCompanies',
    component: ViewCompanies,
  },
  {
    path: '/view-details/:id',
    name: 'viewDetails',
    component: viewDetails,
  },
  {
    path: '/edit/:id',
    name: 'editDetails',
    component: editDetails,
  },
  {
    path: '/about',
    name: 'About',

    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  { path: '/first-step', name: 'firstStep', component: FirstStep },
  { path: '/second-step', name: 'secondStep', component: SecondStep },

  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
