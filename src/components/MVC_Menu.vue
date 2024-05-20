<template>
  <div class="header-element main">
    <div class="top_info">
      <div class="top_inner">
        <p>영화 커뮤니티 무비캣입니다.</p>
        <div class="top_right_menu">
          <ul>
            <li><a href="#">로그인</a></li>
            <li><a href="#">회원가입</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="body-area">
      <div class="gnb-element">
        <h1 class="logo-area">
          <a href="#">
            <span class="movie">MOVIE</span><span class="cat">CAT</span>
          </a>
        </h1>
        <ul class="gnb-area" id="gnb">
          <li class="gnb_menu menu1">
            <a href="#">영화리뷰</a>
          </li>
          <li class="gnb_menu menu2">
            <a href="#">영화토크</a>
          </li>
          <li class="gnb_menu menu3">
            <a href="#">생활토크</a>
          </li>
          <li class="gnb_menu menu4">
            <a href="#">영화평점</a>
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
// Function to handle scroll event
const handleScroll = () => {
  const header = document.querySelector('.body-area');
  const scroll = window.scrollY;

  if (scroll >= 60) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

// Add scroll event listener to window after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', handleScroll);
});

// Function to handle window resize
const handleResize = () => {
  const header = document.querySelector('.body-area');

  if (header && window.innerWidth <= 1280) {
    // Remove sticky class if window width is less than or equal to 1280
    header.classList.remove('sticky');
  }
};

// Add resize event listener to window
window.addEventListener('resize', handleResize);

// Execute handleResize initially to handle the initial window size
handleResize();
</script>

<style>

</style>