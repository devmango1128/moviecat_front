<template>
  <section class="board-contents">
    <div class="inner-wrap">
      <div class="login_box">
        <div class="contentsWrap">
          <div class="contents">
            <div class="total-cnt">총 {{totalCnt}}건</div>
            <div class="cont-inner">
              <template v-if="!isLoading">
                <div class="tbl-list border">
                  <table>
                    <colgroup>
                      <col style="width:88px">
                      <col>
                      <col style="width:200px">
                      <col style="width:120px">
                      <col style="width:100px">
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col" class="hide-cell">번호</th>
                        <th scope="col" class="hide-line">제목</th>
                        <th scope="col" class="hide-line">좋아요</th>
                        <th scope="col" class="hide-line">작성자</th>
                        <th scope="col" class="hide-cell">작성일</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="board in boardList" :key="board.pstId">
                        <td class="hide-cell">{{ board.postNumber }}</td>
                        <td class="tit">
                          <div class="board-list">
                            <div class="inner_list">
                              <router-link :to="`/movieboard/${$route.params.boardId}/${board.pstId}`">
                                <span class="article">
                                  <span class="list-new" v-if="board.new === 'Y'">N</span>
                                  <span class="list-title">
                                    <em class="sp" v-if="board.spoYn === 'Y'">[스포]</em>{{ board.ttl }}
                                  </span>
                                </span>
                                <span class="cmt">
                                  <span> [<em>{{ board.cmntTotal }}</em>]</span>
                                </span>
                              </router-link>
                            </div>
                          </div>
                        </td>
                        <td class="ro hide-line">
                          <span class="rcmdtn">{{ board.rmcdTotal }}</span>
                        </td>
                        <td class="hide-line">{{ board.nickNm }}</td>
                        <td class="hide-cell">{{ board.rgstDate }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </template>
              <!--등록버튼-->
              <div class="reg-area" v-if="isLoggedIn">
                <button class="btn-blue" @click="boardReg">등록</button>
              </div>
            </div>
            <!--paging-->
            <div class="mg-b50 cs-p">
              <paginate v-model="currentPage" :page-count="pageCount" :page-range="3" :margin-pages="2"
                :click-handler="clickCallback" :prev-text="'＜'" :next-text="'＞'" :container-class="'pagination'"
                :page-class="'page-item'">
              </paginate>
            </div>
            <!--search-->
            <div class="search-box mg-b50 cs-p">
              <select class="form-select" v-model="searchSelect">
                <option value="1">제목</option>
                <option value="2">제목 + 내용</option>
                <option value="3">작성자</option>
              </select>
              <input type="text" class="input-inbox" placeholder="검색어를 입력하세요." id="searchText" v-model="searchText" maxlength="240">
              <button class="btn-blue" @click.prevent="searchClick(1)">검색</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, getCurrentInstance, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const { proxy } = getCurrentInstance()

const isLoggedIn = computed(() => authStore.isLoggedIn)

const boardList = ref([])
const totalCnt = ref(0)
const isLoading = ref(true)

const currentPage = ref(1)
const itemsPerPage = ref(10)
const pageCount = computed(() => Math.ceil(totalCnt.value / itemsPerPage.value))

const searchSelect = ref(1)
const searchText = ref('')
const isSearch = ref('N')

const searchClick = (page) => {
  isSearch.value = searchText.value !== '' ? 'Y' : 'N'
  fetchBoardData(page)
}

const fetchBoardData = async(page) => {
  
  try{

    const params = {
      page: page,
      limit: itemsPerPage.value
    };

    if (isSearch.value === 'Y') {
      params.div = searchSelect.value
      params.srchWord = searchText.value
    }

    const res = await proxy.$axios.get(`/api/movieboard/${route.params.boardId}`,{
      params: params
    })

    boardList.value = res.data.data
    totalCnt.value = res.data.total

  }catch(error) {
    alert('데이터 조회 중 에러가 발생했습니다')
  } finally {
    isLoading.value = false // 데이터 로드가 완료되면 로딩 상태를 false로 설정
  }
}

fetchBoardData(currentPage.value)

watch(() => route.params.boardId, () => {
  currentPage.value = 1
  fetchBoardData(currentPage.value)
})

const clickCallback = (pageNum) => {
  currentPage.value = pageNum
  fetchBoardData(pageNum)
}

const boardReg = () => {
  router.push(`/movieboardReg/${route.params.boardId}`);
}
</script>

<style>
</style>