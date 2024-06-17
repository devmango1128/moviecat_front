<template>
    <section class="board-contents">
        <div class="inner-wrap">
            <div class="login_box">
                <div class="title" id="pageCont">
                    <h1>메뉴명</h1>
                </div>
                <div class="contentsWrap">
                    <div class="contents">
                        <div class="ArticleContentBox">
                            <div class="article_header">
                                <div class="ArticleTitle">
                                    <div class="title_area">
                                        <h3 class="title_text"><em class="sp" v-if="spoYn === 'Y'">[스포]</em>{{ ttl }}
                                        </h3>
                                        <div class="WriterInfo">
                                            <div class="thumb_area">
                                                <img :src="profileUrl" alt="프로필 사진" width="36" height="36">
                                            </div>
                                            <div class="profile_area">
                                                <div class="profile_info">
                                                    <div class="nick_box">
                                                        <button id="" class="nickname"> {{nickNm}}</button>
                                                    </div>
                                                </div>
                                                <div class="article_info">
                                                    <span class="date">{{ rgstDate }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="article_container">
                                <div class="article_viewer">
                                    <div>
                                        <div class="content CafeViewer">
                                            {{ cn }}
                                        </div>
                                    </div>
                                </div>
                                <div class="FileBox">
                                    <div class="fileContent">
                                        <div class="se-section se-section-file se-l-default se-section-align-">
                                            <div class="se-module se-module-file">
                                                <span class="se-file-icon">
                                                    <strong class="se-blind">첨부파일</strong>
                                                </span>
                                                <div class="se-file-name-container">
                                                    <span class="se-file-name">movie</span>
                                                    <span class="se-file-extension">.pdf</span>
                                                </div>
                                                <a href="https://downapi.cafe.naver.com/v1.0/cafes/article/file/af99f911-dc28-11ee-a1b7-0050568d055f/download"
                                                    class="se-file-save-button __se_link" role="button" target="_blank"
                                                    data-linktype="file"
                                                    data-linkdata="{&quot;link&quot;: &quot;https://downapi.cafe.naver.com/v1.0/cafes/article/file/af99f911-dc28-11ee-a1b7-0050568d055f/download&quot;}">
                                                    <span class="se-blind">파일 다운로드</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ReplyBox">
                                    <div class="box_left">
                                        <div class="like_article">
                                            <div class="cm_sympathy_area">
                                                <button type="button" class="area_button_upvote  _btn_upvote">
                                                    <span class="this_text_number _count_num">{{ rcmd }}</span>
                                                </button>
                                                <!-- <button type="button" class="area_button_downvote  _btn_downvote">
                                                    <span class="this_text_number _count_num">70</span>
                                                </button> -->
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="box_right">
                                        <div class="report_article">
                                            <a href="#" class="button_report" data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop">신고</a>
                                        </div>
                                    </div> -->
                                    <div class="CommentBox">
                                        <div class="comment_option">
                                            <h3 class="comment_title"> 댓글 </h3>
                                        </div>
                                        <ul class="comment_list">
                                            <li id="78075864" class="CommentItem">
                                                <div class="comment_area">
                                                    <a href="/ca-fe/cafes/29835300/members/fLBe6k9-K6w8xvJCdJLwrg"
                                                        class="comment_thumb">
                                                        <img src="https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png?type=c77_77"
                                                            alt="프로필 사진" width="36" height="36">
                                                    </a>
                                                    <div class="comment_box">
                                                        <div data-v-326b2d52="" class="comment_nick_box">
                                                            <div data-v-326b2d52="" class="comment_nick_info">
                                                                <a data-v-326b2d52="" id="cih78075864" href="#"
                                                                    role="button" aria-haspopup="true"
                                                                    aria-expanded="false" class="comment_nickname"> 처기정
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="comment_text_box">
                                                            <p class="comment_text_view">
                                                                <span class="text_comment">보러갈까말까 고민중인데 솔직한 감상평
                                                                    어때요???</span>
                                                            </p>
                                                        </div>
                                                        <div class="comment_info_box">
                                                            <span class="comment_info_date">2024.05.26. 12:57</span>
                                                            <a href="#" role="button" class="comment_info_button">
                                                                답글쓰기
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li id="78076014" class="CommentItem CommentItem--reply">
                                                <div class="comment_area">
                                                    <a href="/ca-fe/cafes/29835300/members/ml-ILJap4KnFnoBG2z2RBw"
                                                        class="comment_thumb">
                                                        <img src="https://blogpfthumb-phinf.pstatic.net/MjAyMTA4MTlfMTg4/MDAxNjI5Mzc3MzM1MTc4.0H5o2BUv__cGRIS7N6t0V7wBLr3YDlJnaPF7c0PBVQ8g.VsT22ACmE734vXJY8dlFHqXx3Xck5rE7ri9OQ-kX61Ig.JPEG.wsg201/profileImage.jpg?type=c77_77"
                                                            alt="프로필 사진" width="36" height="36">
                                                    </a>
                                                    <div class="comment_box">
                                                        <div data-v-326b2d52="" class="comment_nick_box">
                                                            <div data-v-326b2d52="" class="comment_nick_info">
                                                                <a data-v-326b2d52="" id="cih78076014" href="#"
                                                                    role="button" aria-haspopup="true"
                                                                    aria-expanded="false" class="comment_nickname">
                                                                    서울남부강산
                                                                </a>
                                                            </div>
                                                            <em data-v-326b2d52="" class="comment_badge_writer">
                                                                작성자
                                                            </em>
                                                        </div>
                                                        <div class="comment_text_box">
                                                            <p class="comment_text_view">
                                                                <span class="text_comment">
                                                                    전 괜찮았어요.<br>보러가보세요.</span>
                                                            </p>
                                                        </div>
                                                        <div class="comment_info_box">
                                                            <span class="comment_info_date">2024.05.26. 13:02</span>
                                                            <a href="#" role="button" class="comment_info_button">
                                                                답글쓰기</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li id="78076014" class="CommentItem CommentItem--reply">
                                                <div class="comment_area">
                                                    <a href="/ca-fe/cafes/29835300/members/ml-ILJap4KnFnoBG2z2RBw"
                                                        class="comment_thumb">
                                                        <img src="https://blogpfthumb-phinf.pstatic.net/MjAyMjExMDlfMjU5/MDAxNjY3OTgyNjk3OTcx.R-h0abKBaY1gD7-7aOKdqodv-NRbhENxlwHFnDfQkFwg.oys1_BvKc933cBmcGUOVdPf6nK7OSgCXPh7MDDB0TvMg.JPEG.hojoon8019/KakaoTalk_20221109_173118967.jpg/KakaoTalk_20221109_173118967.jpg?type=c77_77"
                                                            alt="프로필 사진" width="36" height="36">
                                                    </a>
                                                    <div class="comment_box">
                                                        <div data-v-326b2d52="" class="comment_nick_box">
                                                            <div data-v-326b2d52="" class="comment_nick_info">
                                                                <a data-v-326b2d52="" id="cih78076014" href="#"
                                                                    role="button" aria-haspopup="true"
                                                                    aria-expanded="false" class="comment_nickname"> 홍길동
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="comment_text_box">
                                                            <p class="comment_text_view">
                                                                <a id="commentProfile77785895" href="#" role="button"
                                                                    class="text_nickname">처기정</a>
                                                                <span class="text_comment">
                                                                    저도 괜찮았어요.<br>보러가보세요.</span>
                                                            </p>
                                                        </div>
                                                        <div class="comment_info_box">
                                                            <span class="comment_info_date">2024.05.26. 13:02</span>
                                                            <a href="#" role="button" class="comment_info_button">
                                                                답글쓰기</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="CommentItem CommentItem--reply">
                                                <div class="CommentWriter">
                                                    <div class="comment_inbox">
                                                        <strong class="blind">댓글을 입력하세요</strong>
                                                        <em class="comment_inbox_name">마동석</em>
                                                        <textarea placeholder="처기정님께 답글쓰기" rows="1"
                                                            class="comment_inbox_text"
                                                            style="overflow: hidden; overflow-wrap: break-word; height: 17px;"></textarea>
                                                    </div>
                                                    <div class="comment_attach">
                                                        <div class="register_box">
                                                            <a href="#" role="button" class="button btn-cancel">취소</a>
                                                            <a href="#" role="button" class="button btn-register">등록</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="CommentWriter">
                                            <div class="comment_inbox">
                                                <strong class="blind">댓글을 입력하세요</strong>
                                                <em class="comment_inbox_name">서울남부강산</em>
                                                <textarea placeholder="댓글을 남겨보세요" class="comment_inbox_text"
                                                    style="overflow: hidden; overflow-wrap: break-word; height: 17px;"></textarea>
                                            </div>
                                            <div class="comment_attach">
                                                <div class="register_box">
                                                    <a href="#" role="button" class="button btn_register">등록</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn-area mg-b50">
                            <button class="list-btn" @click="boardList">목록</button>
                            <button class="reg-btn" @click="boardUpdate">수정</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Modal -->
    <!-- <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">신고</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="declaration-area">
                        <div class="detail-contents">
                            <span>작성자: 서울남부강산</span>
                            <span>제목: 범죄도시4 완전 재밌게 봤음!!! 니네들도 꼭 봐!!</span>
                        </div>
                        <div class="declaration-list">
                            <span>사유 선택 : 여러 사유에 해당될 경우, 대표적인 사유 1개를 선택.</span>
                            <span><input type="radio" name="declaration" value="">부적절한 홍보 게시물</span>
                            <span><input type="radio" name="declaration" value="">음란성 또는 청소년에게 북적합한 내용</span>
                            <span><input type="radio" name="declaration" value="">명예훼손/사생활 침해 및 저작권침해 등</span>
                            <span><input type="radio" name="declaration" value="">불법촬영물등 신고</span>
                            <span><input type="radio" name="declaration" value="">기타(상세 신고 사유 작성)</span>
                            <span><input type="text" class="declaration-text"></span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                    <button type="button" class="btn btn-primary">신고</button>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { ref, getCurrentInstance } from 'vue'

const router = useRouter();
const route = useRoute();
const { proxy } = getCurrentInstance()

const ttl = ref('')
const spoYn = ref('N')
const cn = ref('')
const nickNm = ref('')
const profileUrl = ref('https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png?type=c77_77')
const rgstDate = ref('')
const rcmd = ref(0) 

onMounted(async() => {
    //TODO. 리스트 만든 후 하드코딩 수정하기
    const res = await proxy.$axios.get('/api/movieboard/1/1')

    const data = res.data;

    ttl.value = data.ttl
    spoYn.value = data.spoYn
    cn.value = data.cn
    nickNm.value = data.nickNm
    profileUrl.value = data.profileUrl !== '' ? data.profileUrl : profileUrl.value
    rgstDate.value = data.rgstDate
    rcmd.value = data.rcmd
})


const boardList = () => {
    router.push(`/movieboard/${route.params.boardId}`)
}

const boardUpdate = () => {
    router.push(`/movieboardUpt/${route.params.boardId}/${route.params.detailId}`)
}
</script>

<style>

</style>