<!-- eslint-disable vue/no-parsing-error -->
<template>
    <section class="board-contents">
        <div class="inner-wrap">
            <div class="login_box">
                <div class="contentsWrap">
                    <div class="contents">
                        <div class="ArticleContentBox">
                            <div class="article_header">
                                <div class="ArticleTitle">
                                    <div class="title_area">
                                        <h3 class="title_text">
                                            <em class="sp" v-if="spoYn === 'Y'">[스포]</em>{{ ttl }}
                                        </h3>
                                        <div class="WriterInfo">
                                            <div class="thumb_area">
                                                <div class="thumb">
                                                    <img :src="profileUrl" alt="프로필 사진" width="36" height="36">
                                                </div>
                                            </div>
                                            <div class="profile_area">
                                                <div class="profile_info">
                                                    <div class="nick_box">
                                                        <span id="" class="nickname"> {{nickNm}}</span>
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
                                        <div class="content CafeViewer" v-html="cn"></div>
                                    </div>
                                </div>
                                <div class="FileBox" v-for="file in fileLists" :key="file.fileId">
                                    <div class="fileContent">
                                        <div class="se-section se-section-file se-l-default se-section-align-">
                                            <div class="se-module se-module-file">
                                                <span class="se-file-icon">
                                                    <strong class="se-blind">첨부파일</strong>
                                                </span>
                                                <div class="se-file-name-container">
                                                    <span class="se-file-name">{{file.fileName}}</span>
                                                    <span class="se-file-extension">{{file.fileExtn}}</span>
                                                </div>
                                                <a @click="fileDownload(file.fileUrl, file.fileName + file.fileExtn)"
                                                    class="se-file-save-button __se_link" role="button">
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
                                                <a data-ishiddenlabel="false" role="button" data-type="like"
                                                    @click.prevent="rcmdClick" title="이 글 좋아요 클릭"
                                                    class="like_no u_likeit_list_btn _button"
                                                    :class="{'on': likeDelYn === 'N' || myRcmdYn }"
                                                    aria-pressed=" true">
                                                    <span class="u_ico _icon"></span>
                                                    <em class="u_txt _label">좋아요</em>
                                                    <em class="u_cnt _count">{{ rcmd }}</em>
                                                </a>
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
                                        <ul class="comment_list" v-if="commentLength > 0">
                                            <li v-for="clist in commentList" :key="clist.cmntId" class="CommentItem">
                                                <div class="comment_area" v-if="clist.cmntLyr === 0">
                                                    <div class="comment_thumb" v-if="!isUpt[clist.cmntId]">
                                                        <img :src="clist.profileUrl !== null && clist.profileUrl !== '' ? clist.profileUrl : 'https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png?type=c77_77'"
                                                            alt="프로필 사진" width="36" height="36">
                                                    </div>
                                                    <div class="comment_box">
                                                        <div class="comment_nick_box">
                                                            <div class="comment_nick_info" v-if="!isUpt[clist.cmntId]">
                                                                <a role="button" aria-haspopup="true"
                                                                    aria-expanded="false" class="comment_nickname">
                                                                    {{clist.nickNm }}
                                                                </a>
                                                            </div>
                                                            <em class="comment_badge_writer"
                                                                v-if="clist.mvcId === mvcId">
                                                                작성자
                                                            </em>
                                                        </div>
                                                        <div class="comment_text_box"
                                                            :class="{ 'CommentItem-modify': isUpt[clist.cmntId] }">
                                                            <p class="comment_text_view" v-if="!isUpt[clist.cmntId]">
                                                                <span class="text_comment">{{ clist.cn }}</span>
                                                            </p>
                                                            <div class="CommentWriter" v-else>
                                                                <div class="comment_inbox">
                                                                    <em
                                                                        class="comment_inbox_name">{{sessionMbrNickNm}}</em>
                                                                    <textarea placeholder="댓글을 남겨보세요." rows="1"
                                                                        class="comment_inbox_text"
                                                                        style="overflow: hidden; overflow-wrap: break-word; height: 17px;"
                                                                        v-model="replyCn"></textarea>
                                                                </div>
                                                                <div class="comment_attach">
                                                                    <div class="register_box">
                                                                        <a role="button"
                                                                            class="button btn-cancel"
                                                                            @click.prevent="replyUptCancel(clist.cmntId)">취소</a>
                                                                        <a role="button"
                                                                            class="button btn-register"
                                                                            @click.prevent="replyUpt(clist.cmntId)">등록</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="comment_info_box" v-if="!isUpt[clist.cmntId]">
                                                            <span class="comment_info_date">{{ clist.rgstDay }}</span>
                                                            &nbsp;&nbsp;
                                                            <a role="button" class="comment_info_button"
                                                                v-if="isLoggedIn" @click.prevent="replyShow(clist)">
                                                                답글쓰기
                                                            </a>
                                                            &nbsp;&nbsp;
                                                            <a role="button" class="comment_info_button"
                                                                v-if="isLoggedIn && clist.mvcId === sessionMvcId"
                                                                @click.prevent="replyUptShow(clist.cn, clist.cmntId)">
                                                                수정
                                                            </a>
                                                            &nbsp;&nbsp;
                                                            <a role="button" class="comment_info_button"
                                                                v-if="isLoggedIn && clist.mvcId === sessionMvcId"
                                                                @click.prevent="replyDel(clist.cmntId)">
                                                                삭제
                                                            </a>
                                                        </div>
                                                        <div class="CommentWriter" v-if="replyStates[clist.cmntId]">
                                                            <div class="comment_inbox">
                                                                <strong class="blind">댓글을 입력하세요</strong>
                                                                <em class="comment_inbox_name">{{ sessionMbrNickNm
                                                                    }}</em>
                                                                <textarea :placeholder="`${clist.nickNm}님께 답글쓰기`"
                                                                    rows="1" class="comment_inbox_text"
                                                                    style="overflow: hidden; overflow-wrap: break-word; height: 17px;"
                                                                    v-model="replyCn"></textarea>
                                                            </div>
                                                            <div class="comment_attach">
                                                                <div class="register_box">
                                                                    <a role="button" class="button btn-cancel"
                                                                        @click.prevent="replyCancel(clist.cmntId)">취소</a>
                                                                    <a role="button"
                                                                        class="button btn-register"
                                                                        @click.prevent="replyReg(clist.cmntId, 1, clist.cmntGroup)">등록</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li class="CommentItem CommentItem--reply"
                                                        v-if="clist.cmntLyr === 1 || clist.cmntLyr === 2">
                                                        <div class="comment_area">
                                                            <div class="comment_thumb" v-if="!isUpt[clist.cmntId]">
                                                                <img :src="clist.profileUrl !== null && clist.profileUrl !== '' ? clist.profileUrl : 'https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png?type=c77_77'"
                                                                    alt="프로필 사진" width="36" height="36">
                                                            </div>
                                                            <div class="comment_box">
                                                                <div class="comment_nick_box">
                                                                    <div class="comment_nick_info"
                                                                        v-if="!isUpt[clist.cmntId]">
                                                                        <a role="button" aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                            class="comment_nickname">
                                                                            {{ clist.nickNm }}
                                                                        </a>
                                                                    </div>
                                                                    <em class="comment_badge_writer"
                                                                        v-if="clist.mvcId === mvcId">
                                                                        작성자
                                                                    </em>
                                                                </div>
                                                                <div class="comment_text_box"
                                                                    :class="{ 'CommentItem-modify': isUpt[clist.cmntId] }">
                                                                    <p class="comment_text_view"
                                                                        v-if="!isUpt[clist.cmntId]">
                                                                        <a id="" role="button"
                                                                            class="text_nickname">{{ clist.upCmntNickNm }}</a>
                                                                        <span class="text_comment">{{ clist.cn }}</span>
                                                                    </p>
                                                                    <div class="CommentWriter" v-else>
                                                                        <div class="comment_inbox">
                                                                            <em class="comment_inbox_name">{{
                                                                                sessionMbrNickNm }}</em>
                                                                            <textarea placeholder="댓글을 남겨보세요." rows="1"
                                                                                class="comment_inbox_text"
                                                                                style="overflow: hidden; overflow-wrap: break-word; height: 17px;"
                                                                                v-model="replyCn"></textarea>
                                                                        </div>
                                                                        <div class="comment_attach">
                                                                            <div class="register_box">
                                                                                <a role="button"
                                                                                    class="button btn-cancel"
                                                                                    @click.prevent="replyUptCancel(clist.cmntId)">취소</a>
                                                                                <a role="button"
                                                                                    class="button btn-register"
                                                                                    @click.prevent="replyUpt(clist.cmntId)">등록</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="comment_info_box"
                                                                    v-if="!isUpt[clist.cmntId]">
                                                                    <span
                                                                        class="comment_info_date">{{clist.rgstDay}}</span>
                                                                    &nbsp;&nbsp;
                                                                    <a role="button"
                                                                        class="comment_info_button" v-if="isLoggedIn"
                                                                        @click.prevent="replyShow(clist)">답글쓰기</a>
                                                                    &nbsp;&nbsp;
                                                                    <a role="button" class="comment_info_button"
                                                                        v-if="isLoggedIn && clist.mvcId === sessionMvcId"
                                                                        @click.prevent="replyUptShow(clist.cn, clist.cmntId)">
                                                                        수정
                                                                    </a>
                                                                    &nbsp;&nbsp;
                                                                    <a role="button" class="comment_info_button"
                                                                        v-if="isLoggedIn && clist.mvcId === sessionMvcId"
                                                                        @click.prevent="replyDel(clist.cmntId)">
                                                                        삭제
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="CommentWriter" v-if="replyStates[clist.cmntId]">
                                                            <div class="comment_inbox">
                                                                <strong class="blind">댓글을 입력하세요</strong>
                                                                <em class="comment_inbox_name">{{ sessionMbrNickNm
                                                                    }}</em>
                                                                <textarea :placeholder="`${clist.nickNm}님께 답글쓰기`"
                                                                    rows="1" class="comment_inbox_text"
                                                                    style="overflow: hidden; overflow-wrap: break-word; height: 17px;"
                                                                    v-model="replyCn"></textarea>
                                                            </div>
                                                            <div class="comment_attach">
                                                                <div class="register_box">
                                                                    <a role="button" class="button btn-cancel"
                                                                        @click.prevent="replyCancel(clist.cmntId)">취소</a>
                                                                    <a role="button"
                                                                        class="button btn-register"
                                                                        @click.prevent="replyReg(clist.cmntId, 2, clist.cmntGroup)">등록</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div class="CommentWriter">
                                            <div class="comment_inbox">
                                                <strong class="blind">댓글을 입력하세요.</strong>
                                                <em class="comment_inbox_name">{{ sessionMbrNickNm }}</em>
                                                <textarea placeholder="댓글을 남겨보세요" class="comment_inbox_text"
                                                    style="overflow: hidden; overflow-wrap: break-word; height: 17px;"
                                                    v-model="commentCn"></textarea>
                                            </div>
                                            <div class="comment_attach">
                                                <div class="register_box">
                                                    <a role="button" class="button btn_register"
                                                        @click="commentReg()">등록</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn-area mg-b50">
                            <button class="list-btn" @click="boardList">목록</button>
                            <button class="reg-btn" v-if="isLoggedIn && sessionMvcId === mvcId"
                                @click=" boardUpdate">수정</button>
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
import { onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { ref, getCurrentInstance } from 'vue'
import { useAuthStore } from '@/store/auth'
import { usePathStore } from '@/store/path'

const router = useRouter();
const route = useRoute();
const { proxy } = getCurrentInstance()
const authStore = useAuthStore()
const pathStore = usePathStore()

const user = computed(() => authStore.getUser || {});
const isLoggedIn = computed(() => authStore.isLoggedIn)
const sessionMvcId = computed(() => user.value.mvcId)
const sessionMbrNickNm = computed(() => user.value.nickNm)

const ttl = ref('')
const spoYn = ref('N')
const cn = ref('')
const nickNm = ref('')
const profileUrl = ref('https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png?type=c77_77')
const rgstDate = ref('')
const rcmd = ref(0) 
const fileLists = ref([])
const likeDelYn = ref('Y')
const myRcmdYn = ref(false)
const mvcId = ref('')
const commentLength = ref(0)
const commentList = ref([])
const commentCn = ref('')
const replyStates = ref({})
const replyCn = ref('')
const isUpt = ref({})

onMounted(async() => {

    try{
        //상세 페이지 내용 조회
        const res = await proxy.$axios.get(`/api/movieboard/${route.params.boardId}/${route.params.pstId}`)
        const data = res.data;

        ttl.value = data.ttl
        spoYn.value = data.spoYn
        cn.value = data.cn
        nickNm.value = data.nickNm
        profileUrl.value = data.profileUrl !== '' ? data.profileUrl : profileUrl.value
        rgstDate.value = data.rgstDate
        rcmd.value = data.rcmd
        mvcId.value = data.mvcId

        if (data.atchFileId) getFileList()
        if (isLoggedIn.value) getRcmdYn()
        getCommentList()

    } catch(error) {
        console.log(error)
        alert('게시글 조회 중 에러가 발생하였습니다.')
    }
})

//파일 리스트 조회
const getFileList = async() => {

    try{
        
        const res = await proxy.$axios.get(`/api/movieboard/${route.params.boardId}/${route.params.pstId}/files`)
        fileLists.value = res.data.data

    } catch(error) {
        console.log('file 데이터 없음')
    }
}

//좋아요 클릭 여부
const getRcmdYn = async() => {

    const res = await proxy.$axios.get('/api/rcmdYn', {
        params : {
            menuId: route.params.boardId,
            rcmdtnSeId: route.params.pstId,
            mbrId: user.value.mbrId
        }
    })

    myRcmdYn.value = res.data
}

//댓글 리스트
const getCommentList = async() => {

    try{
        const res = await proxy.$axios.get(`/api/movieboard/${route.params.boardId}/${route.params.pstId}/cmnt`)

        commentLength.value = res.data.total
        commentList.value = res.data.data

    } catch(error) {
        alert('댓글 조회 중 에러가 발생하였습니다.')
    }
}

//파일 다운로드
const fileDownload = async (fileUrl, fileName) => {
    
    try {
        const response = await proxy.$axios.get('/api/download', {
            params: {
                fileUrl: fileUrl,
                fileName: fileName
            },
            responseType: 'blob'
        })

        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url;
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    
    } catch (error) {
        console.error('파일 다운로드 중 오류 발생:', error)
    }
}

//좋아요 클릭
const rcmdClick = async() => {

    if (!isLoginConfirm()) return

    try{
        const res = await proxy.$axios.post('/api/recommend', {
            rcmdtnSeId: route.params.pstId,
            menuId: pathStore.menuId,
            mbrId: user.value.mbrId,
            mbrNm: user.value.mbrNm
        })

        likeDelYn.value = res.data.deltYn
        myRcmdYn.value = false
        rcmd.value = res.data.total

    } catch (error) {
        alert('에러가 발생하였습니다. 관리자에게 문의해주세요.')
    }
    
}

//댓글 등록
const commentReg = async() => {

    if (!isLoginConfirm()) return

    const cmtUser = user.value

    const res = await proxy.$axios.post('/api/bbsWriteCmnt', {
        pstId: route.params.pstId,
        cmntMbrId: cmtUser.mbrId,
        cmntMbrNickNm: cmtUser.nickNm,
        cn: commentCn.value,
        mbrId: cmtUser.mbrId,
        mbrNm: cmtUser.mbrNm
    })

    if (res.status === 200) {
        commentCn.value = ''
        getCommentList()
    }
}

//답글 입력창
const replyShow = (clist) => {

    if (!isLoginConfirm()) return
   
    for (let key in replyStates.value) {
        replyStates.value[key] = false;
    }
    
    replyStates.value[clist.cmntId] = !replyStates.value[clist.cmntId]
}

//답글 등록
const replyReg = async (cmntId, lyr, cmntGroup) => {

    if(!isLoginConfirm()) return

    const cmtUser = user.value;

    const lastComment = commentList.value[commentList.value.length - 1];
    const lastSeq = lastComment ? lastComment.seq : 0;

    const res = await proxy.$axios.post('/api/bbsWriteReply', {
        pstId: route.params.pstId,
        cmntMbrId: cmtUser.mbrId,
        cmntMbrNickNm: cmtUser.nickNm,
        cn: replyCn.value,
        upCmntId: cmntId,
        mbrId: cmtUser.mbrId,
        mbrNm: cmtUser.mbrNm,
        cmntLyr: lyr,
        cmntGroup: cmntGroup,
        seq: Number(lastSeq) + 1, // 새 댓글의 seq는 마지막 seq + 1
    })

    if (res.status === 200) {
        replyCn.value = ''
        replyStates.value[cmntId] = false
        getCommentList()
    }
}

//로그인 체크
const isLoginConfirm = () => {
    
    if(!isLoggedIn.value) {
        alert('로그인 후 이용해주세요.')
        router.push('/login')
        return false
    }

    return true
}

//답글 취소
const replyCancel = (cmntId) => {
    replyCn.value = ''
    replyStates.value[cmntId] = false
}

//답글 수정
const replyUptShow = (cn, cmntId) => {
    isUpt.value[cmntId] = true
    replyCn.value = cn
}

//답글 수정 하기
const replyUpt = async(cmntId) => {

    const cmtUser = user.value;

    const res = await proxy.$axios.post('/api/bbsEditCmnt', {
        cmntId: cmntId,
        mbrId: cmtUser.mbrId,
        mbrNm: cmtUser.mbrNm,
        cn: replyCn.value
    })

    if (res.status === 200) {
        isUpt.value[cmntId] = false
        replyCn.value = ''
        getCommentList()
    }    
}

//답글 수정 취소
const replyUptCancel = (cmntId) => {
    isUpt.value[cmntId] = false
    replyCn.value = ''
    getCommentList()
}

//답글 삭제
const replyDel = async (cmntId) => {
    
    const cmtUser = user.value;

    const res = await proxy.$axios.post('/api/bbsDeleteCmnt', {
        cmntId: cmntId,
        mbrId: cmtUser.mbrId,
        mbrNm: cmtUser.mbrNm
    })

    if (res.status === 200) {
        getCommentList()
    }
}

//목록으로
const boardList = () => {
    router.push(`/movieboard/${route.params.boardId}`)
}

//수정으로
const boardUpdate = () => {
    router.push(`/movieboardUpt/${route.params.boardId}/${route.params.detailId}`)
}
</script>

<style>

</style>