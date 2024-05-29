import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue'
import LoginPage from '../views/LoginPage.vue'
import JoinPage from '../views/JoinPage.vue'
import JoinPage2 from '../views/JoinPage2.vue'
import FindIdPw from '../views/FindIdPw.vue'
import MovieGrade from '../views/MovieGrade_.vue'
import MovieBoard from '../views/MovieBoard_.vue'
import MovieBoardDetail from '../views/MovieBoardDetail_.vue'
import MovieBoardReg from '../views/MovieBoardReg.vue'
import MovieBoardUpt from '../views/MovieBoardUpt_.vue'
import MovieGradeReg from '../views/MovieGradeReg.vue'
import MovieGradeUpt from '../views/MovieGradeUpt.vue'
import MyPage from '../views/MyPage.vue'

const routes = [
  {
    name: 'main',
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
    path:'/movieboard/:boardId/:detailId',
    component : MovieBoardDetail
  },
  {
    path:'/movieboardReg',
    component : MovieBoardReg
  },
  {
    path:'/movieboardUpt/:boardId/:detailId',
    component : MovieBoardUpt
  },
  {
    path:'/moviegradeReg',
    component : MovieGradeReg
  },
  {
    path:'/moviegradeUpt',
    component : MovieGradeUpt
  },
  {
    path:'/myPage',
    component : MyPage
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});