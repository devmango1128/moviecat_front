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
                                    <col>
                                    <col style="width:150px">
                                    <col style="width:100px">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col" class="hide-cell"></th>
                                        <th scope="col" class="hide-cell">내용</th>
                                        <th scope="col" class="hide-line">평점</th>
                                        <th scope="col" class="hide-cell">날짜</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="n in 10" :key="n">
                                        <td class="pd-l4 pd-r10">
                                            <input type="checkbox">
                                        </td>
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
                                        <td class="star-grade">
                                            <div class="lego_movie_pure_star">
                                                <div class="area_icon_box">
                                                    <div class="area_card">
                                                        <span class="play_star state_fill"></span>
                                                        <span class="play_star state_fill"></span>
                                                    </div>
                                                    <div class="area_card">
                                                        <span class="play_star state_fill"></span>
                                                        <span class="play_star state_fill"></span>
                                                    </div>
                                                    <div class="area_card">
                                                        <span class="play_star state_fill"></span>
                                                        <span class="play_star state_fill"></span>
                                                    </div>
                                                    <div class="area_card">
                                                        <span class="play_star state_fill"></span>
                                                        <span class="play_star state_fill"></span>
                                                    </div>
                                                    <div class="area_card">
                                                        <span class="play_star state_fill"></span>
                                                        <span class="play_star "></span>
                                                    </div>
                                                </div>
                                                <div class="area_text_box"><span class="blind">별점(10점 만점 중)</span>9
                                                </div>
                                            </div>
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

<style></style>