<template>
  <div class="header-element main">
    <div class="top_info">
      <div class="top_inner">
        <p>영화 커뮤니티 무비캣입니다.</p>
        <div class="top_right_menu">
          <ul v-if="!isLogin">
            <li><router-link to="/login">로그인</router-link></li>
            <li><router-link to="/join">회원가입</router-link></li>
          </ul>
          <ul v-else>
            <li><span class="login-name">홍길동님</span></li>
            <li><router-link to="/myPage/memberInfo">마이페이지</router-link></li>
            <li @click="goLogout">
              <span class="logout">로그아웃</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="body-area">
      <div class="gnb-element">
        <h1 class="logo-area">
          <router-link to="/">
            <span class="movie">MOVIE</span><span class="cat">CAT</span>
          </router-link>
        </h1>
        <ul class="gnb-area" id="gnb">
          <li class="gnb_menu menu1" :class="$route.params.boardId == 1 ? 'active' : ''">
            <router-link to="/movieboard/1">영화리뷰</router-link>
          </li>
          <li class="gnb_menu menu2" :class="$route.params.boardId == 2 ? 'active' : ''">
            <router-link to="/movieboard/2">영화토크</router-link>
          </li>
          <li class="gnb_menu menu3" :class="$route.params.boardId == 3 ? 'active' : ''">
            <router-link to="/movieboard/3">생활토크</router-link>
          </li>
          <li class="gnb_menu menu4" :class="$route.params.boardId == 4 ? 'active' : ''">
            <router-link to="/moviegrade/4">영화평점</router-link>
          </li>
        </ul>
        <div class="input-search">
          <input type="text" class="main-input-search-pc" name="" id="" placeholder="검색어를 입력하세요." title="검색어 입력"
            autocomplete="off">
          <button type="submit" class="btn-search" @click="totalSearch">검색버튼</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router';
import { inject } from "vue";

const router = useRouter()

const isLogin = inject("isLogin")

const goLogout = () => {

  isLogin.value = false

  if (!isLogin.value) {
    router.push({
      path: '/',
    })
  }
}

const totalSearch = () => {
  router.push({
    path: '/totalSearch'
  })
}

</script>

<style>

</style>