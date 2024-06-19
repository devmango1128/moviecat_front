<template>
  <section class="board-contents movie-grade">
    <div class="inner-wrap">
      <div class="login_box">
        <div class="contentsWrap">
          <div class="contents">
            <div class="ArticleContentBox">
              <div class="wrap">
                <div class="rating">
                  <label class="rating__label rating__label--half" for="starhalf">
                    <input type="radio" id="starhalf" class="rating__input" name="rating" value="">
                    <span class="star-icon"></span>
                  </label>
                  <label class="rating__label rating__label--full" for="star1">
                    <input type="radio" id="star1" class="rating__input" name="rating" value="">
                    <span class="star-icon"></span>
                  </label>
                  <label class="rating__label rating__label--half" for="star1half">
                    <input type="radio" id="star1half" class="rating__input" name="rating" value="">
                    <span class="star-icon"></span>
                  </label>
                  <label class="rating__label rating__label--full" for="star2">
                    <input type="radio" id="star2" class="rating__input" name="rating" value="">
                    <span class="star-icon"></span>
                  </label>
                  <label class="rating__label rating__label--half" for="star2half">
                    <input type="radio" id="star2half" class="rating__input" name="rating" value="">
                    <span class="star-icon"></span>
                  </label>
                  <label class="rating__label rating__label--full" for="star3">
                    <input type="radio" id="star3" class="rating__input" name="rating" value="">
                    <span class="star-icon"></span>
                  </label>
                  <label class="rating__label rating__label--half" for="star3half">
                    <input type="radio" id="star3half" class="rating__input" name="rating" checked>
                    <span class="star-icon"></span>
                  </label>
                  <label class="rating__label rating__label--full" for="star4">
                    <input type="radio" id="star4" class="rating__input" name="rating" value="">
                    <span class="star-icon"></span>
                  </label>
                  <label class="rating__label rating__label--half" for="star4half">
                    <input type="radio" id="star4half" class="rating__input" name="rating" value="">
                    <span class="star-icon"></span>
                  </label>
                  <label class="rating__label rating__label--full" for="star5">
                    <input type="radio" id="star5" class="rating__input" name="rating" value="">
                    <span class="star-icon"></span>
                  </label>
                </div>
              </div>
              <div class="area_form_box type_border_top">
                <div class="area_textarea_box _input_wrap"> 
                  <textarea class="this_textarea _textarea_box" v-model="uptText"></textarea>
                  <p class="this_numbering _count_num">(0/1,000)</p>
                </div>
              </div>
            </div>
          </div>
          <!--등록버튼-->
          <div class="reg-area">
            <button class="btn-blue">등록</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUpdated } from 'vue';
import starRate from '@/assets/js/starRate.js';

onMounted(() => {
  starRate();
});

onUpdated(() => {
  starRate();
});

const uptText = '9점인 이유는 매드맥스 분노의 도로가 10점이기 때문이다';
</script>

<style lang="scss" scoped>
 @import '@/assets/css/starRate.scss';
</style>