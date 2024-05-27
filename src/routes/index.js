import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue'
import LoginPage from '../views/LoginPage.vue'
import JoinPage from '../views/JoinPage.vue'
import JoinPage2 from '../views/JoinPage2.vue'
import FindIdPw from '../views/FindIdPw.vue'
import MovieGrade from '../views/MovieGrade_.vue'
import MovieBoard from '../views/MovieBoard_.vue'
import MovieBoardDetail from '../views/MovieBoardDetail_.vue'

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/join',
    component: JoinPage,
  },
  {
    path: '/join2',
    component: JoinPage2,
  },
  {
    path: '/findIdPw',
    component : FindIdPw
  },
  {
    path: '/movieboard/:boardId',
    component : MovieBoard
  },
  {
    path: '/moviegrade/:boardId',
    component : MovieGrade
  },
  {
    path:'/moveiboard/:boardId/:detailId',
    component : MovieBoardDetail
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});