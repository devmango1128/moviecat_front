<template>
  <section class="board-contents movie-grade">
    <div class="inner-wrap">
      <div class="login_box">
        <div class="contentsWrap">
          <div class="contents">
            <div class="total-cnt">총 100건</div>
            <div class="lego_review_list">
              <ul class="dis-show area_card_outer">
                <li v-for="n in 5" :key="n" class="area_card">
                  <div class="area_title_box">
                    <div class="lego_movie_pure_star">
                      <div class="area_icon_box">
                        <div class="area_card">
                          <span class="play_star  state_fill"></span>
                          <span class="play_star  state_fill"></span>
                        </div>
                        <div class="area_card">
                          <span class="play_star  state_fill"></span>
                          <span class="play_star  state_fill"></span>
                        </div>
                        <div class="area_card">
                          <span class="play_star  state_fill"></span>
                          <span class="play_star  state_fill"></span>
                        </div>
                        <div class="area_card">
                          <span class="play_star  state_fill"></span>
                          <span class="play_star  state_fill"></span>
                        </div>
                        <div class="area_card">
                          <span class="play_star  state_fill"></span>
                          <span class="play_star "></span>
                        </div>
                      </div>
                      <div class="area_text_box">9</div>
                    </div>
                  </div>
                  <div class="area_review_content">
                    <div class="area_text_expand">
                      <span class="desc">9점인 이유는 매드맥스 분노의 도로가 10점이기 때문이다 </span>
                    </div>
                  </div>
                  <dl class="cm_upload_info">
                    <dt class="blind">작성자</dt>
                    <dd class="this_text_stress _btn_writer" data-writer-id="kbw9****">kbw9****</dd>
                    <dt class="blind">작성일</dt>
                    <dd class="this_text_normal">2024.05.22. 13:10</dd>
                    <dd class="this_text_normal">
                      <a href="#" class="this_play_btn _btn_report">삭제</a>
                    </dd>
                    <dd class="this_text_normal">
                      <a href="#" class="this_play_btn _btn_report" @click="gradeUpt">수정</a>
                    </dd>
                  </dl>
                  <div class="cm_sympathy_area">
                    <button type="button" class="area_button_upvote  _btn_upvote">
                      <span class="this_text_number _count_num">921</span>
                    </button>
                    <button type="button" class="area_button_downvote  _btn_downvote">
                      <span class="this_text_number _count_num">70</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--등록버튼-->
          <div class="reg-area">
            <button class="btn-blue" @click="gradeReg" v-if="isLoggedIn">등록</button>
          </div>
        </div>
        <!--paging-->
        <div class="mg-b50 cs-p mg-t50">
          <paginate :page-count="getPageCount" :page-range="3" :margin-pages="2" :click-handler="clickCallback"
            :prev-text="'＜'" :next-text="'＞'" :container-class="'pagination'" :page-class="'page-item'">
          </paginate>
        </div>
        <!--search-->
        <div class="search-box mg-b50 cs-p">
          <input type="text" class="input-inbox" placeholder="영화제목을 입력하세요.">
          <button class="btn-blue">검색</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import { useAuthStore } from '@/store/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const isLoggedIn = computed(() => authStore.isLoggedIn)

const gradeReg = () => {
  router.push(`/moviegradeReg/${route.params.boardId}`)
}

const gradeUpt = () => {
  router.push(`/moviegradeUpt/${route.params.boardId}`)
}
</script>

<style>

</style>