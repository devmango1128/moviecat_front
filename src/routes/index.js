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
import WithDrawal from '../views/WithDrawal.vue'
import TotalSearch from '../views/TotalSearch.vue'
import WithDrwalComp from '../views/WithDrwalComp.vue'
import { useJoinStore } from '@/store/join.js'

const routes = [
  {
    name: 'Main',
    path: '/',
    component: MainPage,
  },
  {
    name : 'Login',
    path: '/login',
    component: LoginPage,
  },
  {
    name : 'Join',
    path: '/join',
    component: JoinPage,
  },
  {
    name : 'Join2',
    path: '/join2',
    component: JoinPage2,
    beforeEnter: (to, from, next) => {

      const accessStore = useJoinStore()

      if (accessStore.canAccessJoin2) {
        next()
      } else {
        alert("잘못된 접근방법입니다.")
        next('/')
      }
    }
  },
  {
    name : 'FindIdPw',
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
    path:'/totalSearch',
    component : TotalSearch
  },
  {
    path:'/withDrwalComp',
    component : WithDrwalComp
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
      },
      {
        path: 'withdrawal',
        components: {
          myPageContents : WithDrawal
        }
      }]
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});