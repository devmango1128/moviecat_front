<template>
  <div class="header-element main">
    <div class="top_info">
      <div class="top_inner">
        <p>영화 커뮤니티 무비캣입니다.</p>
        <div class="top_right_menu">
          <ul v-if="!isLoggedIn">
            <li><router-link to="/login">로그인</router-link></li>
            <li><router-link to="/join">회원가입</router-link></li>
          </ul>
          <ul v-else>
            <li><span class="login-name">{{ user.nickNm }}님</span></li>
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
          <li v-for="menu in menuList" :key="menu.menu_id" class="gnb_menu menu1" :class="{ active: $route.params.boardId == menu.menu_id }">
            <router-link :to="`${menu.menu_path}/${menu.menu_id}`">{{ menu.menu_nm }}</router-link>
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

import { useRouter } from 'vue-router'
import { ref, onMounted, computed } from "vue"
import { getCurrentInstance } from 'vue'
import { useAuthStore } from '@/store/auth';

const { proxy } = getCurrentInstance()
const router = useRouter()
const authStore = useAuthStore()

const menuList = ref({});

const user = computed(() => authStore.getUser)
const isLoggedIn = computed(() => authStore.isLoggedIn)

const goLogout = () => {

  authStore.clearToken()
  authStore.clearUser()

  router.push({name: 'Main'})
}

const totalSearch = () => {
  router.push({
    path: '/totalSearch'
  })
}

//컴포넌트가 DOM에 마운트된 직후
onMounted(async() => {
  try{
    const res = await proxy.$axios.get('menuList')
    menuList.value = res.data.data.menu_list
  } catch( err) {
    console.log(err)
  }
});

</script>

<style>

</style>