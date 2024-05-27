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
            <li><router-link to="/">홍길동님</router-link></li>
            <li><router-link to="/">마이페이지</router-link></li>
            <li><router-link to="/">로그아웃</router-link></li>
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
          <button type="submit" class="btn-search">검색버튼</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLogin = ref(false)

</script>

<style>

</style>