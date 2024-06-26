<!-- eslint-disable vue/no-parsing-error -->
<template>
    <section id="top" class="board-contents">
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
                                            </div>
                                        </div>
                                    </div>
                                    <div class="CommentBox">
                                        <div class="comment_option">
                                            <h3 class="comment_title"> 댓글 </h3>
                                        </div>
                                        <ul class="comment_list" v-if="commentLength > 0">
                                            <li v-for="clist in commentList" :key="clist.cmntId" class="CommentItem">
                                                <div class="comment_area" v-if="clist.cmntLyr === 0">
                                                    <div class="comment_thumb"
                                                        v-if="!isUpt[clist.cmntId] && clist.deltYn === 'N'">
                                                        <img :src="clist.profileUrl !== null && clist.profileUrl !== '' ? clist.profileUrl : 'https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png?type=c77_77'"
                                                            alt="프로필 사진" width="36" height="36">
                                                    </div>
                                                    <div class="comment_box">
                                                        <div class="comment_nick_box" v-if="clist.deltYn === 'N'">
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
                                                            <p class="comment_text_view" v-if="!isUpt[clist.cmntId] ">
                                                                <span class="text_comment" v-if="clist.deltYn === 'N'"
                                                                    v-html="clist.cn.replace(/\n/g, '<br>') "></span>
                                                                <span class="text_comment"
                                                                    v-if="clist.deltYn === 'Y'">삭제 된 댓글입니다.</span>
                                                            </p>
                                                            <div class="CommentWriter" v-else>
                                                                <div class="comment_inbox">
                                                                    <em
                                                                        class="comment_inbox_name">{{sessionMbrNickNm}}</em>
                                                                    <div class="comment_inbox_number">
                                                                        <span class="blind">현재 입력한 글자수</span>
                                                                        <strong class="inbox_count">{{ replyCn.length
                                                                            }}</strong>
                                                                        <span class="blind">전체 입력 가능한 글자수</span>
                                                                        <span class="inbox_total">1200</span>
                                                                    </div>
                                                                    <textarea placeholder="댓글을 남겨보세요."
                                                                        class="comment_inbox_text"
                                                                        style="overflow: hidden; overflow-wrap: break-word;"
                                                                        v-model="replyCn"
                                                                        @input="validReply"></textarea>
                                                                </div>
                                                                <div class="comment_attach">
                                                                    <div class="register_box">
                                                                        <a role="button" class="button btn-cancel"
                                                                            @click.prevent="replyUptCancel(clist.cmntId)">취소</a>
                                                                        <a role="button" class="button btn-register"
                                                                            @click.prevent="replyUpt(clist.cmntId)">등록</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="comment_info_box"
                                                            v-if="!isUpt[clist.cmntId] && clist.deltYn === 'N'">
                                                            <span class=" comment_info_date">{{ clist.rgstDay }}</span>
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
                                                        <div class="CommentWriter"
                                                            v-if="replyStates[clist.cmntId] && clist.deltYn === 'N'">
                                                            <div class="comment_inbox">
                                                                <strong class="blind">댓글을 입력하세요</strong>
                                                                <em class="comment_inbox_name">{{ sessionMbrNickNm
                                                                    }}</em>
                                                                <div class="comment_inbox_number">
                                                                    <span class="blind">현재 입력한 글자수</span>
                                                                    <strong class="inbox_count">{{ replyCn.length
                                                                        }}</strong>
                                                                    <span class="blind">전체 입력 가능한 글자수</span>
                                                                    <span class="inbox_total">1200</span>
                                                                </div>
                                                                <textarea :placeholder="`${clist.nickNm}님께 답글쓰기`"
                                                                    class="comment_inbox_text"
                                                                    style="overflow: hidden; overflow-wrap: break-word;"
                                                                    v-model="replyCn" @input="validReply"></textarea>
                                                            </div>
                                                            <div class="comment_attach">
                                                                <div class="register_box">
                                                                    <a role="button" class="button btn-cancel"
                                                                        @click.prevent="replyCancel(clist.cmntId)">취소</a>
                                                                    <a role="button" class="button btn-register"
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
                                                                        <a id="" role="button" class="text_nickname">{{
                                                                            clist.upCmntNickNm }}</a>
                                                                        <span class="text_comment"
                                                                            v-html="clist.cn.replace(/\n/g, '<br>') "></span>
                                                                    </p>
                                                                    <div class="CommentWriter" v-else>
                                                                        <div class="comment_inbox">
                                                                            <em class="comment_inbox_name">{{
                                                                                sessionMbrNickNm }}</em>
                                                                            <div class="comment_inbox_number">
                                                                                <span class="blind">현재 입력한 글자수</span>
                                                                                <strong class="inbox_count">{{
                                                                                    replyCn.length }}</strong>
                                                                                <span class="blind">전체 입력 가능한 글자수</span>
                                                                                <span class="inbox_total">1200</span>
                                                                            </div>
                                                                            <textarea placeholder="댓글을 남겨보세요."
                                                                                class="comment_inbox_text"
                                                                                style="overflow: hidden; overflow-wrap: break-word;"
                                                                                v-model="replyCn"
                                                                                @input="validReply"></textarea>
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
                                                                    <a role="button" class="comment_info_button"
                                                                        v-if="isLoggedIn"
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
                                                                <div class="comment_inbox_number">
                                                                    <span class="blind">현재 입력한 글자수</span>
                                                                    <strong class="inbox_count">{{ replyCn.length
                                                                        }}</strong>
                                                                    <span class="blind">전체 입력 가능한 글자수</span>
                                                                    <span class="inbox_total">1200</span>
                                                                </div>
                                                                <textarea :placeholder="`${clist.nickNm}님께 답글쓰기`"
                                                                    class="comment_inbox_text"
                                                                    style="overflow: hidden; overflow-wrap: break-word;"
                                                                    v-model="replyCn" @input="validReply"></textarea>
                                                            </div>
                                                            <div class="comment_attach">
                                                                <div class="register_box">
                                                                    <a role="button" class="button btn-cancel"
                                                                        @click.prevent="replyCancel(clist.cmntId)">취소</a>
                                                                    <a role="button" class="button btn-register"
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
                                                <div class="comment_inbox_number">
                                                    <span class="blind">현재 입력한 글자수</span>
                                                    <strong class="inbox_count">{{ commentCn.length }}</strong>
                                                    <span class="blind">전체 입력 가능한 글자수</span>
                                                    <span class="inbox_total">1200</span>
                                                </div>
                                                <textarea placeholder="댓글을 남겨보세요" class="comment_inbox_text"
                                                    style="overflow: hidden; overflow-wrap: break-word;"
                                                    @input="validComment" v-model="commentCn"></textarea>
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
                            <button class="del-btn mg-l5" v-if="isLoggedIn && sessionMvcId === mvcId"
                                @click="boardDel">삭제</button>
                            <button class="reg-btn" v-if="isLoggedIn && sessionMvcId === mvcId"
                                @click=" boardUpdate">수정</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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

    if (commentCn.value === '') {
        alert('내용을 입력해주세요.')
        return
    }
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

    replyCn.value = ''
}

//답글 등록
const replyReg = async (cmntId, lyr, cmntGroup) => {

    if(!isLoginConfirm()) return

    if (replyCn.value === '') {
        alert('내용을 입력해주세요.')
        return
    }

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

//댓글 valid
const validComment = (e) => {

    textareaHeight(e.target)

    if (commentCn.value.length > 1200) {
        commentCn.value = commentCn.value.slice(0, 1200)
    }
}

//답글 valid
const validReply = (e) => {

    const reply = e.target

    textareaHeight(reply)

    if (reply.value.length > 1200) {
        replyCn.value = reply.value.slice(0, 1200)
    }
}

//줄바꿈하거나 글자수 많아지면 textarea창 height 늘어나게 처리하기
const textareaHeight = (target) => {

    target.style.height = 'auto'
    target.style.height = `${target.scrollHeight}px`
}

//목록으로
const boardList = () => {
    router.push(`/movieboard/${route.params.boardId}`)
}

//수정으로
const boardUpdate = () => {
    router.push(`/movieboardUpt/${route.params.boardId}/${route.params.pstId}`)
}

//삭제
const boardDel = async () => {

    const isConfirm = confirm('정말 삭제하시겠습니까?')
    
    if (isConfirm) {
        
        try{
            const cmtUser = user.value;

            const res = await proxy.$axios.post('/api/bbsDeletePost', {
                pstId: `${ route.params.pstId }`,
                mbrId: cmtUser.mbrId,
                mbrNm: cmtUser.mbrNm
            })

            if (res.status === 200) {
                alert('게시글이 삭제되었습니다.')
                boardList()
            }

        }catch(err) {
            alert('게시글 삭제 중 에러가 발생하였습니다.')
        }
    } else {
        return
    }
}
</script>

<style>

</style>