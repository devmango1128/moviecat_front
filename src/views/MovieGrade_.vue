<template>
  <section class="board-contents movie-grade">
    <div class="inner-wrap">
      <div class="login_box">
        <div class="contentsWrap">
          <div class="contents">
            <div class="total-cnt">총 {{ totalCnt }}건</div>
            <div class="lego_review_list">
              <ul class="dis-show area_card_outer">
                <li v-for="grade in gradeList" :key="grade.scrId" class="area_card">
                  <div class="grade-title">
                    <div class="area-grade-title">
                      <span class="tit">{{ grade.vdoNm }}</span>
                      <span class="sub-tit">
                        <span class="txt mg-l10">{{ grade.vdoNmEn }} </span>
                        <span class="cm-bar"></span>
                        <span class="txt">{{grade.opngYear }}</span>
                      </span>
                    </div>
                  </div>
                  <div class="area_title_box">
                    <div class="lego_movie_pure_star">
                      <div class="area_icon_box">
                        <div class="area_card">
                          <span class="play_star" :class="{ 'state_fill': grade.scr >= 1 }"></span>
                          <span class="play_star" :class="{ 'state_fill': grade.scr >= 2 }"></span>
                        </div>
                        <div class="area_card">
                          <span class="play_star" :class="{ 'state_fill': grade.scr >= 3 }"></span>
                          <span class="play_star" :class="{ 'state_fill': grade.scr >= 4 }"></span>
                        </div>
                        <div class="area_card">
                          <span class="play_star" :class=" { 'state_fill' : grade.scr>= 5 }"></span>
                          <span class="play_star" :class=" { 'state_fill' : grade.scr>= 6 }"></span>
                        </div>
                        <div class="area_card">
                          <span class="play_star" :class="{ 'state_fill': grade.scr >= 7 }"></span>
                          <span class="play_star" :class="{ 'state_fill': grade.scr >= 8 }"></span>
                        </div>
                        <div class="area_card">
                          <span class="play_star" :class="{ 'state_fill': grade.scr >= 9 }"></span>
                          <span class="play_star" :class="{ 'state_fill': grade.scr === 10 }"></span>
                        </div>
                      </div>
                      <div class=" area_text_box">{{ grade.scr }}
                      </div>
                    </div>
                  </div>
                  <div class="area_review_content">
                    <div class="area_text_expand">
                      <span class="desc">{{ grade.vdoEvl}} </span>
                    </div>
                  </div>
                  <dl class="cm_upload_info">
                    <dt class="blind">작성자</dt>
                    <dd class="this_text_stress _btn_writer">{{ grade.nickNm }}</dd>
                    <dt class="blind">작성일</dt>
                    <dd class="this_text_normal">{{ grade.rgstDate }}</dd>
                    <dd class="this_text_normal">
                      <a role="button" class="this_play_btn _btn_report"
                        v-if="isLoggedIn && grade.mvcId === sessionMvcId" @click.prevent="gradeDel(grade)">삭제</a>
                    </dd>
                  </dl>
                  <div class="cm_sympathy_area">
                    <button type="button" class="area_button_upvote _btn_upvote" :class="{'state_on' : grade.likeYn === 'Y'}" @click="likeClick(grade.scrId)">
                      <span class="this_text_number _count_num">{{ grade.likeCnt }}</span>
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
          <paginate v-model="currentPage" :page-count="pageCount" :page-range="3" :margin-pages="2"
            :click-handler="clickCallback" :prev-text="'＜'" :next-text="'＞'" :container-class="'pagination'"
            :page-class="'page-item'">
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
import { ref, computed, getCurrentInstance } from 'vue'
import { useAuthStore } from '@/store/auth'
import { usePathStore } from '@/store/path'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const pathStore = usePathStore()
const { proxy } = getCurrentInstance()

const gradeList = ref([])
const totalCnt = ref(0)
const currentPage = ref(1)
const itemsPerPage = ref(5)
const pageCount = computed(() => Math.ceil(totalCnt.value / itemsPerPage.value))

const user = computed(() => authStore.getUser || {});
const isLoggedIn = computed(() => authStore.isLoggedIn)
const sessionMvcId = computed(() => user.value.mvcId)

const getGradeList = async(page) => {

  try {

    const res = await proxy.$axios.get(`/api/scrboard/${route.params.boardId}`, {
      params: { 
        page: page, 
        limit: itemsPerPage.value, 
        mbrId: authStore.getUser.mbrId
      } 
    })

    gradeList.value = res.data.data
    totalCnt.value = res.data.total

  } catch (err) {
    alert('데이터 조회 중 에러가 발생했습니다')
  }
}

const gradeDel = async(grade) => {

  if (!isLoginConfirm()) return
  
  try {
    
    await proxy.$axios.post('/api/scrBbsDelete', {
        scrId: grade.scrId,
        mbrId: authStore.getUser.mbrId,
        mbrNm: authStore.getUser.mbrNm
    })

    getGradeList(currentPage.value)

  } catch (err) {
    alert('데이터 삭제 중 에러가 발생했습니다')
  }
}

const likeClick = async(scrId) => {
  
  if (!isLoginConfirm()) return

  try {
    
    await proxy.$axios.post('/api/recommend', {
      rcmdtnSeId: scrId,
      menuId: pathStore.menuId,
      mbrId: user.value.mbrId,
      mbrNm: user.value.mbrNm
    })

    clickCallback(currentPage.value)

  } catch (error) {
    alert('에러가 발생하였습니다. 관리자에게 문의해주세요.')
  }
}

//로그인 체크
const isLoginConfirm = () => {

  if (!isLoggedIn.value) {
    alert('로그인 후 이용해주세요.')
    router.push('/login')
    return false
  }

  return true
}

getGradeList(currentPage.value)

const clickCallback = (pageNum) => {
  currentPage.value = pageNum
  getGradeList(pageNum)
}

const gradeReg = () => {
  router.push(`/moviegradeReg/${route.params.boardId}`)
}
</script>

<style>

</style>