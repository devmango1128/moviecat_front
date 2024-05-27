<template>
    <section class="board-contents">
        <div class="inner-wrap">
            <div class="block review_box">
                <div class="board-area">
                    <div class="board-title">
                        <span class="title">
                            영화 리뷰
                        </span>
                        <span class="more">
                            <a>+more</a>
                        </span>
                    </div>
                    <div class="board-content">
                        <table>
                            <colgroup>
                                <col style="width:88px">
                                <col>
                                <col style="width:85px">
                                <col style="width:90px">
                                <col style="width:95px">
                            </colgroup>
                            <tbody>
                                <tr class="popularity">
                                    <td colspan="2" class="tit">
                                        <div class="board-tag">
                                            <strong class="board-tag-txt">
                                                <span class="inner">인기</span>
                                            </strong>
                                        </div>
                                        <div class="board-list">
                                            <div class="inner_list">
                                                <a href="#" class="article">
                                                    <span>
                                                        범죄도시4 완전 재밌게 봤음!!! 니네들도 꼭 봐!!
                                                    </span>
                                                </a>
                                                <a href="#" class="cmt">
                                                    <span>
                                                        [<em>259</em>]
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="writer">
                                        마석도
                                    </td>
                                    <td class="ro">
                                        <span class="rcmdtn">999+</span>
                                        <span class="">/</span>
                                        <span class="objc">30</span>
                                    </td>
                                    <td class="date">16:29</td>
                                </tr>
                                <tr class="popularity">
                                    <td colspan="2" class="tit">
                                        <div class="board-tag">
                                            <strong class="board-tag-txt">
                                                <span class="inner">인기</span>
                                            </strong>
                                        </div>
                                        <div class="board-list">
                                            <div class="inner_list">
                                                <a href="#" class="article">
                                                    <span class="list-new">N</span>
                                                    <span>
                                                        시민덕희 실화를 바탕으로 해서 그런지 몰입감이 장난아니였다.
                                                    </span>
                                                </a>
                                                <a href="#" class="cmt">
                                                    <span>
                                                        [<em>10</em>]
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="writer">
                                        김강산
                                    </td>
                                    <td class="ro">
                                        <span class="rcmdtn">999+</span>
                                        <span class="">/</span>
                                        <span class="objc">999+</span>
                                    </td>
                                    <td class="date">2024.05.07</td>
                                </tr>
                                <tr class="popularity">
                                    <td colspan="2" class="tit">
                                        <div class="board-tag">
                                            <strong class="board-tag-txt">
                                                <span class="inner">인기</span>
                                            </strong>
                                        </div>
                                        <div class="board-list">
                                            <div class="inner_list">
                                                <a href="#" class="article">
                                                    <span>
                                                        범죄도시 난 재미없더라
                                                    </span>
                                                </a>
                                                <a href="#" class="cmt">
                                                    <span>
                                                        [<em>20</em>]
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="writer">
                                        곽철용
                                    </td>
                                    <td class="ro">
                                        <span class="rcmdtn">1</span>
                                        <span class="">/</span>
                                        <span class="objc">0</span>
                                    </td>
                                    <td class="date">2024.02.19</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="board-content">
                        <table>
                            <colgroup>
                                <col style="width:88px">
                                <col>
                                <col style="width:85px">
                                <col style="width:90px">
                                <col style="width:95px">
                            </colgroup>
                            <tbody>
                                <tr v-for="n in 7" :key="n" class="general">
                                    <td colspan="2" class="tit">
                                        <div class="board-list">
                                            <div class="inner_list">
                                                <a href="#" class="article">
                                                    <span class="list-new">N</span>
                                                    <span>
                                                        범죄도시4 완전 재밌게 봤음!!! 니네들도 꼭 봐!!
                                                    </span>
                                                </a>
                                                <a href="#" class="cmt">
                                                    <span>
                                                        [<em>259</em>]
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="writer">
                                        경산남부준혁
                                    </td>
                                    <td class="ro">
                                        <span class="rcmdtn">999+</span>
                                        <span class="">/</span>
                                        <span class="objc">80</span>
                                    </td>
                                    <td class="date">16:29</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="block review_box">
                <div class="board-area">
                    <div class="board-title">
                        <span class="title">
                            영화 토크
                        </span>
                        <span class="more">
                            <a>+more</a>
                        </span>
                    </div>
                    <div class="board-content">
                        <table>
                            <colgroup>
                                <col style="width:88px">
                                <col>
                                <col style="width:85px">
                                <col style="width:90px">
                                <col style="width:95px">
                            </colgroup>
                            <tbody>
                                <tr class="popularity">
                                    <td colspan="2" class="tit">
                                        <div class="board-tag">
                                            <strong class="board-tag-txt">
                                                <span class="inner">인기</span>
                                            </strong>
                                        </div>
                                        <div class="board-list">
                                            <div class="inner_list">
                                                <a href="#" class="article">
                                                    <span>
                                                        범죄도시4 완전 재밌게 봤음!!! 니네들도 꼭 봐!!
                                                    </span>
                                                </a>
                                                <a href="#" class="cmt">
                                                    <span>
                                                        [<em>259</em>]
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="writer">
                                        마석도
                                    </td>
                                    <td class="ro">
                                        <span class="rcmdtn">999+</span>
                                        <span class="">/</span>
                                        <span class="objc">30</span>
                                    </td>
                                    <td class="date">16:29</td>
                                </tr>
                                <tr class="popularity">
                                    <td colspan="2" class="tit">
                                        <div class="board-tag">
                                            <strong class="board-tag-txt">
                                                <span class="inner">인기</span>
                                            </strong>
                                        </div>
                                        <div class="board-list">
                                            <div class="inner_list">
                                                <a href="#" class="article">
                                                    <span class="list-new">N</span>
                                                    <span>
                                                        시민덕희 실화를 바탕으로 해서 그런지 몰입감이 장난아니였다.
                                                    </span>
                                                </a>
                                                <a href="#" class="cmt">
                                                    <span>
                                                        [<em>10</em>]
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="writer">
                                        김강산
                                    </td>
                                    <td class="ro">
                                        <span class="rcmdtn">999+</span>
                                        <span class="">/</span>
                                        <span class="objc">999+</span>
                                    </td>
                                    <td class="date">2024.05.07</td>
                                </tr>
                                <tr class="popularity">
                                    <td colspan="2" class="tit">
                                        <div class="board-tag">
                                            <strong class="board-tag-txt">
                                                <span class="inner">인기</span>
                                            </strong>
                                        </div>
                                        <div class="board-list">
                                            <div class="inner_list">
                                                <a href="#" class="article">
                                                    <span>
                                                        범죄도시 난 재미없더라
                                                    </span>
                                                </a>
                                                <a href="#" class="cmt">
                                                    <span>
                                                        [<em>20</em>]
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="writer">
                                        곽철용
                                    </td>
                                    <td class="ro">
                                        <span class="rcmdtn">1</span>
                                        <span class="">/</span>
                                        <span class="objc">0</span>
                                    </td>
                                    <td class="date">2024.02.19</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="board-content">
                        <table>
                            <colgroup>
                                <col style="width:88px">
                                <col>
                                <col style="width:85px">
                                <col style="width:90px">
                                <col style="width:95px">
                            </colgroup>
                            <tbody>
                                <tr v-for="n in 7" :key="n" class="general">
                                    <td colspan="2" class="tit">
                                        <div class="board-list">
                                            <div class="inner_list">
                                                <a href="#" class="article">
                                                    <span>
                                                        범죄도시4 볼만하냐?
                                                    </span>
                                                </a>
                                                <a href="#" class="cmt">
                                                    <span>
                                                        [<em>259</em>]
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="writer">
                                        서울남부강산
                                    </td>
                                    <td class="ro">
                                        <span class="rcmdtn">99</span>
                                        <span class="">/</span>
                                        <span class="objc">80</span>
                                    </td>
                                    <td class="date">2024.05.18</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="inner-wrap">
            <div class="star">
                <div class="board-area">
                    <div class="board-title">
                        <span class="title">
                            영화 평점
                        </span>
                        <span class="more">
                            <a>+more</a>
                        </span>
                    </div>
                    <div class="board-content">
                        <table>
                            <colgroup>
                                <col>
                                <col style="width:150px">
                                <col style="width:85px">
                                <col style="width:90px">
                                <col style="width:95px">
                            </colgroup>
                            <tbody>
                                <tr v-for="n in 8" :key="n" class="general">
                                    <td class="tit">
                                        <div class="board-list">
                                            <div class="inner_list">
                                                <a href="#" class="article">
                                                    <span>
                                                        [그녀가 죽었다] 연출과 스토리 구성이 세련되고 감각적임 배우들 연기도 좋아서 몰입감이 높습니다.
                                                    </span>
                                                </a>
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
                                            <div class="area_text_box"><span class="blind">별점(10점 만점 중)</span>9</div>
                                        </div>
                                    </td>
                                    <td class="writer">
                                        서울남부강산
                                    </td>
                                    <td class="ro">
                                        <span class="rcmdtn">99</span>
                                        <span class="">/</span>
                                        <span class="objc">80</span>
                                    </td>
                                    <td class="date">2024.05.18</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>