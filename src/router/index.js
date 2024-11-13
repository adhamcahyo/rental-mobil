import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import CarListView from '../views/CarListView.vue';
import RentCarView from '../views/RentCarView.vue';
import ReturnCarView from '../views/ReturnCarView.vue';
import AddCarView from '../views/AddCarView.vue';   
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/cars',
      name: 'car-list',
      component: CarListView,
      meta: { requiresAuth: true },
    },
    {
      path: '/rent/:carId',
      name: 'rent-car',
      component: RentCarView,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/return/:carId',
      name: 'return-car',
      component: ReturnCarView,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/add-car',
      name: 'add-car',
      component: AddCarView,
      meta: { requiresAuth: true },
    },
  ],
});

export default router;
