import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue'
import LoginPage from '../views/LoginPage.vue'
import JoinPage from '../views/JoinPage.vue'
import JoinPage2 from '../views/JoinPage2.vue'
import FindIdPw from '../views/FindIdPw.vue'
import MovieGrade from '../views/MovieGrade_.vue'
import MovieBoard from '../views/MovieBoard_.vue'
import MovieBoardDetail from '../views/MovieBoardDetail_.vue'
import MovieBoardReg from '../views/MovieBoardReg_.vue'
import MovieBoardUpt from '../views/MovieBoardUpt_.vue'
import MovieGradeReg from '../views/MovieGradeReg_.vue'
import MovieGradeUpt from '../views/MovieGradeUpt_.vue'
import MyPage from '../views/MyPage.vue'
import MemberInfo from '../views/MemberInfo.vue'
import MyPost from '../views/MyPost.vue'
import MyComment from '../views/MyComment.vue'
import MyGrade from '../views/MyGrade.vue'

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
    path:'/movieboardReg/:boardId',
    component : MovieBoardReg
  },
  {
    path:'/movieboardUpt/:boardId/:detailId',
    component : MovieBoardUpt
  },
  {
    path:'/moviegradeReg/:boardId',
    component : MovieGradeReg
  },
  {
    path:'/moviegradeUpt/:boardId',
    component : MovieGradeUpt
  },
  {
    path:'/myPage',
    component : MyPage,
    children: [
      {
        path: 'memberInfo',
        components: {
          myPageContents: MemberInfo
        }
      },
      {
        path: 'myPost',
        components: {
          myPageContents : MyPost
        }
      },
      {
        path: 'myComment',
        components: {
          myPageContents : MyComment
        }
      },
      {
        path: 'myGrade',
        components: {
          myPageContents : MyGrade
        }
      }]
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});