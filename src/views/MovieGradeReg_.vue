<template>
  <section class="board-contents movie-grade">
    <div class="inner-wrap">
      <div class="login_box">
        <div class="contentsWrap">
          <div class="contents">
            <div class="ArticleContentBox">
              <div class="search-box mg-b50 cs-p">
                <input type="text" class="input-inbox bc-gray" placeholder="검색 버튼을 눌러 영화를 검색하세요." disabled
                  v-model="resultMovieNm">
                <button class="btn-blue fs-16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">검색</button>
              </div>
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
                  <textarea placeholder="평점은 최대 1,000자까지 등록 가능합니다. 영화와 상관 없는 내용은 약관에 의해 제재를 받을 수 있습니다."
                    class="this_textarea _textarea_box" maxlength="1000" v-model="cn" @input="cnInput"></textarea>
                  <p class="this_numbering _count_num">({{ cn.length }}/1,000)</p>
                </div>
              </div>
            </div>
          </div>
          <!--등록버튼-->
          <div class="reg-area">
            <button class="btn-blue" @click.prevent="gradeReg">등록</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">영화검색</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="declaration-area">
            <div class="detail-contents">
              <div class="search-box cs-p mg-b10">
                <input type="text" class="input-inbox" id="movieNm" placeholder="영화제목을 입력하세요." v-model="movieNm">
                <button type="button" class="btn-blue fs-16" @click.prevent="movieSearch(currentPage)">검색</button>
              </div>
            </div>
            <div v-if="movieList.length > 0">
              <div class="declaration-list deco-movie-list pd-1 bc-white" v-for="movie in movieList"
                :key="movie.movieCd">
                <div class="movie-list">
                  <input type="radio" class="radio-btn" name="declaration" :value="movie" v-model="movieVal">
                  <span class="movie-tit fl-l">{{movie.movieNm}}</span>
                  <span class="cm-bar fl-l"></span>
                  <span class="movie-year fl-l">{{ movie.prdtYear }}</span>
                  <span class="cm-bar fl-l"></span>
                  <span class="genre-alt">{{ movie.genreAlt }}</span>
                </div>
              </div>
            </div>
            <div v-else class="declaration-list deco-movie-list pd-1 bc-white" style="border:none">
              <span class="ta-c">조회된 데이터가 없습니다.</span>
            </div>
            <!--paging-->
            <div class="mg-b10 cs-p mg-t10" v-if="movieListCnt > 0">
              <paginate v-model="currentPage" :page-count="pageCount" :page-range="3" :margin-pages="2"
                :click-handler="clickCallback" :prev-text="'＜'" :next-text="'＞'" :container-class="'pagination'"
                :page-class="'page-item'">
              </paginate>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="closeModal" data-bs-dismiss="modal">취소</button>
          <button type="button" class="btn btn-primary" @click.prevent="movieSelect">선택</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, getCurrentInstance, computed } from 'vue'
import axios from 'axios';
import starRate from '@/assets/js/starRate.js'
import { useRoute } from 'vue-router'
//import { useAuthStore } from '@/store/auth'

//const authStore = useAuthStore()
const route = useRoute()
const { proxy } = getCurrentInstance()
const currentPage = ref(1)
const itemsPerPage = ref(10)
const pageCount = computed(() => Math.ceil(movieListCnt.value / itemsPerPage.value))
const movieNm = ref('')
const movieList = ref([])
const movieListCnt = ref(0)
const movieVal = ref('')
const resultMovieNm = ref('')
const cn = ref('')

onMounted(() => {
  starRate();
});

onUpdated(() => {
  starRate();
});

//영화 검색
const movieSearch = async (pageNum) => {
  
  if(movieNm.value === '') {
    alert('영화 제목을 입력해주세요.')
    document.getElementById('movieNm').focus()
    return
  }

  const url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json'
  const res = await axios.get(url, {
    params : {
      key: proxy.$movieKey,
      movieNm : movieNm.value,
      curPage: pageNum,
      itemPerPage: itemsPerPage.value
    }
  })

  if(res.status === 200) {
    movieList.value = res.data.movieListResult.movieList
    movieListCnt.value = res.data.movieListResult.totCnt
  } else {
    alert('데이터 조회 중 에러가 발생하였습니다.')
  }
}

//페이징처리
const clickCallback = (pageNum) => {
  currentPage.value = pageNum
  movieSearch(pageNum)
}

//영화 선택 후
const movieSelect = () => {

  if (movieVal.value === '') {
    alert('영화를 선택해주세요.')
    return
  }

  const data = movieVal.value;

  resultMovieNm.value = data.movieNm + '·' + data.prdtYear + '·' + data.genreAlt

  // 모달 닫기
  document.getElementById('closeModal').click()

}

//글쓰기 체크
const cnInput = () => {
  if (cn.value.length > 1000) {
    cn.value = cn.value.slice(0, 1000)
  }
}

//등록
const gradeReg = () => {
  
  if (movieNm.value === '') {
    alert('영화를 선택해주세요.')
    return
  }

  const ele = document.getElementsByClassName('filled')

  if(ele.length === 0) {
    alert('평점을 등록해주세요.')
    return
  }

  if(cn.value === '') {
    alert('영화평을 입력해주세요.')
    document.getElementById('cn').focus()
    return
  }

}
</script>

<style lang="scss" scoped>
 @import '@/assets/css/starRate.scss';
</style>