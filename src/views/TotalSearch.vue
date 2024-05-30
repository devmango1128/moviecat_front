<template>
    <section class="contentsWrap board-contents">
        <div class="contents inner-wrap dis-show">
            <div class="search-result-area">
                <span class="search-result">
                    <strong class="search-keyword col-blue">범죄도시4</strong>에 대한 검색결과 입니다.
                    <em class="search-number">15,039건</em>
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
                                <tbody>
                                    <tr v-for="n in 5" :key="n">
                                        <td class="hide-cell">영화리뷰</td>
                                        <td class="tit">
                                            <div class="board-list">
                                                <div class="inner_list">
                                                    <router-link :to="`/movieboard/${$route.params.boardId}/${n}`">
                                                        <span class="article">
                                                            <span>
                                                                <em class="sp">[스포]</em>범죄도시4 완전 재밌게 봤음!!! 니네들도 꼭 봐!!
                                                            </span>
                                                        </span>
                                                        <span class="cmt">
                                                            <span> [<em>259</em>]</span>
                                                        </span>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="hide-cell">서울남부강산</td>
                                        <td class="hide-cell">2024.05.24</td>
                                    </tr>
                                    <tr v-for="n in 5" :key="n">
                                        <td class="hide-cell">영화평점</td>
                                        <td class="tit">
                                            <div class="board-list">
                                                <div class="inner_list">
                                                    <router-link :to="`/movieboard/${$route.params.boardId}/${n}`">
                                                        <span class="article">
                                                            <span>
                                                                범죄도시 어때? 재밌어? 나도 보러갈까.....??
                                                            </span>
                                                        </span>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="hide-cell">콩순이</td>
                                        <td class="hide-cell">2024.05.22</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--paging-->
                    <div class="mg-t20 mg-b50 cs-p">
                        <paginate :page-count="getPageCount" :page-range="3" :margin-pages="2"
                            :click-handler="clickCallback" :prev-text="'＜'" :next-text="'＞'"
                            :container-class="'pagination'" :page-class="'page-item'">
                        </paginate>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
@import '@/assets/css/searchResult.css';
</style>