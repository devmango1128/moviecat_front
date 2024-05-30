<template>
    <div class="member_content mg-b20">
        <div class="form_section">
            <div class="contentsWrap">
                <div class="contents pd-t0">
                    <div class="cont-inner">
                        <div class="tbl-list border">
                            <table>
                                <colgroup>
                                    <col style="width:50px">
                                    <col style="width:150px">
                                    <col>
                                    <col style="width:200px">
                                    <col style="width:100px">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col" class="hide-cell"></th>
                                        <th scope="col" class="hide-cell">게시판명</th>
                                        <th scope="col" class="hide-line">제목</th>
                                        <th scope="col" class="hide-line">추천/반대</th>
                                        <th scope="col" class="hide-cell">작성일</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="n in 10" :key="n">
                                        <td class="pd-l4 pd-r10">
                                            <input type="checkbox">
                                        </td>
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
                                        <td class="ro hide-line">
                                            <span class="rcmdtn">999+</span><span class="">/</span>
                                            <span class="objc">80</span>
                                        </td>
                                        <td class="hide-cell">2024.05.22</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!--삭제버튼-->
                        <div class="del-area mg-t10">
                            <button class="btn-red" @click="boardDel">선택삭제</button>
                        </div>
                    </div>
                    <!--paging-->
                    <div class="mg-b50 cs-p">
                        <paginate :page-count="getPageCount" :page-range="3" :margin-pages="2"
                            :click-handler="clickCallback" :prev-text="'＜'" :next-text="'＞'"
                            :container-class="'pagination'" :page-class="'page-item'">
                        </paginate>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>