<template>
    <section class="contentsWrap board-contents">
        <div class="contents inner-wrap dis-show">
            <div class="search-result-area">
                <span class="search-result">
                    <strong class="search-keyword col-blue">{{ srcWord }}</strong>에 대한 검색결과 입니다.
                    <em class="search-number">{{ totalCnt }}건</em>
                </span>
            </div>
            <section class="sc-board cont-inner">
                <div class="api_subject_bx">
                    <div class="mod_title_area">
                        <div class="title_wrap">
                            <h2 class="title">게시글</h2>
                        </div>
                    </div>
                    <div class="group-board">
                        <div class="tbl-list border">
                            <table>
                                <colgroup>
                                    <col style="width:150px">
                                    <col>
                                    <col style="width:150px">
                                    <col style="width:100px">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col" class="hide-cell">게시판명</th>
                                        <th scope="col" class="hide-line">제목</th>
                                        <th scope="col" class="hide-cell">작성자</th>
                                        <th scope="col" class="hide-cell">작성일</th>
                                    </tr>
                                </thead>
                                <tbody v-if="resultList.length > 0">
                                    <tr v-for="result in resultList" :key="result.pstId">
                                        <td class="hide-cell">{{ result.menuNm }}</td>
                                        <td class="tit">
                                            <div class="board-list">
                                                <div class="inner_list">
                                                    <router-link
                                                        :to="`/movieboard/${result.menuId}/${result.pstId}#top`">
                                                        <span class="article">
                                                            <span>
                                                                <em class="sp" v-if="result.spoYn === 'Y'">[스포]</em>
                                                                <span
                                                                    v-html="highlightText(result.ttl, srcWord)"></span>
                                                            </span>
                                                        </span>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="hide-cell">{{ result.nickNm }}</td>
                                        <td class="hide-cell">{{ result.rgstDate }}</td>
                                    </tr>
                                </tbody>
                                <tbody v-else>
                                    <tr>
                                        <td class="ta-c" colspan="4">
                                            조회 된 데이터가 없습니다.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--paging-->
                    <div class="mg-t20 mg-b50 cs-p">
                        <paginate v-model="currentPage" :page-count="pageCount" :page-range="3" :margin-pages="2"
                            :click-handler="clickCallback" :prev-text="'＜'" :next-text="'＞'"
                            :container-class="'pagination'" :page-class="'page-item'">
                        </paginate>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script setup>

import { ref, computed, getCurrentInstance, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const { proxy } = getCurrentInstance()

const resultList = ref([])
const totalCnt = ref(0)
const currentPage = ref(1)
const itemsPerPage = ref(10)
const pageCount = computed(() => Math.ceil(totalCnt.value / itemsPerPage.value))
const srcWord = ref(route.query.srchWord)

const getResultList = async(page) => {
    try {

        const res = await proxy.$axios.get('/api/searchTotal', {
            params : {
                srchWord: srcWord.value,
                page: page,
                limit: itemsPerPage.value
            }
        })

        resultList.value = res.data.data
        totalCnt.value = res.data.total

    } catch (err) {
        alert("에러가 발생하였습니다. 다시 시도해주세요.")
        return
    }
}

onMounted(() => {
    getResultList(currentPage.value)
})

watch(() => route.query.srchWord, (newVal) => {
    srcWord.value = newVal
    currentPage.value = 1
    getResultList(currentPage.value)
})

const clickCallback = (pageNum) => {
    currentPage.value = pageNum
    getResultList(pageNum)
}

const highlightText = (ttl, word) => {
    if (!word) return ttl;
    const regex = new RegExp(`(${word})`, 'gi');
    return ttl.replace(regex, '<span class="highlight">$1</span>');
}
</script>

<style lang="css" scoped>
@import '@/assets/css/searchResult.css';
</style>