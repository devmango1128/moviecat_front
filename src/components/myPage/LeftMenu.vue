<template>
  <div class="aside_box">
    <strong>마이페이지</strong>
    <ul class="mypage-nav">
      <li :class="{ active: isActive('/myPage/memberInfo')}">
        <strong><router-link to="/myPage/memberInfo">회원정보</router-link></strong>
      </li>
      <li :class="{ active: isActive('/myPage/myPost') }">
        <strong><router-link to="/myPage/myPost">내 게시글</router-link></strong>
      </li>
      <li :class="{ active: isActive('/myPage/myComment') }">
        <strong><router-link to="/myPage/myComment">내 댓글</router-link></strong>
      </li>
      <li :class="{ active: isActive('/myPage/myGrade') }">
        <strong><router-link to="/myPage/myGrade">내 평점</router-link></strong>
      </li>
      <li :class="{ active: isActive('/myPage/withdrawal') }">
        <strong class="col-gray"><router-link to="/myPage/withdrawal">회원탈퇴</router-link></strong>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

const isActive = (path) => {
  return route.path === path
}
</script>

<style>

</style>