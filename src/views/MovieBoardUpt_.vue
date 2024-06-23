<template>
    <section class="board-contents">
        <div class="inner-wrap">
            <div class="login_box">
                <div class="contentsWrap">
                    <div class="contents">
                        <div class="ArticleContentBox">
                            <div class="article_header">
                                <div class="ArticleTitle">
                                    <div class="title_area ArticleWritingTitle">
                                        <div class="row">
                                            <div class="FlexableTextArea">
                                                <textarea placeholder="제목을 입력해 주세요." class="textarea_input"
                                                    style="height: 48px;" v-model="ttl"></textarea>
                                            </div>
                                        </div>
                                        <div>
                                            <p class="ipt_bottom_info mg-t10">
                                                <input type="checkbox" class="sp-chk" v-model="spoYn">
                                                <label for="spFlag" class="sp-chk">스포 포함</label>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="article_container">
                                <div class="article_viewer">
                                    <div>
                                        <div class="content CafeViewer">
                                            <VueEditor ref="editor" v-model="cn" :editorToolbar="customToolbar">
                                            </VueEditor>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="FileBox mg-b10" v-for="file in fileLists" :key="file.seq">
                            <div class="fileContent" v-if="fileState[file.seq]">
                                <div class="se-section se-section-file se-l-default se-section-align-">
                                    <div class="se-module se-module-file">
                                        <span class="se-file-icon">
                                            <strong class="se-blind">첨부파일</strong>
                                        </span>
                                        <div class="se-file-name-container">
                                            <span class="se-file-name">{{ file.fileName }}</span>
                                            <span class="se-file-extension">{{ file.fileExtn }}</span>
                                        </div>
                                        <span role="button" class="se-toolbar-icon"
                                            @click.prevent="fileDelete(file)"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mg-b10">
                            <FileUpload @select="onFileSelect" :multiple="true" accept="image/*" :maxFileSize="500000"
                                v-model="files">
                                <template #empty>
                                    <p>파일을 여기로 드래그 앤 드롭하여 업로드하세요.</p>
                                </template>
                            </FileUpload>
                        </div>
                        <div class="btn-area mg-b50">
                            <button class="list-btn" @click="boardList">목록</button>
                            <button class="reg-btn" @click="boardUpdate">등록</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { VueEditor } from 'vue3-editor'
import FileUpload from 'primevue/fileupload'
import { ref, onMounted, getCurrentInstance } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePathStore } from '@/store/path'
import { useAuthStore } from '@/store/auth'

const pathStore = usePathStore()
const authStore = useAuthStore()

const { proxy } = getCurrentInstance()
const route = useRoute()
const router = useRouter()

const ttl = ref('')
const spoYn = ref(false)
const cn = ref('')
const nickNm = ref('')
const profileUrl = ref('https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png?type=c77_77')
const rgstDate = ref('')
const rcmd = ref(0)
const fileLists = ref([])
const editor = ref(null)
const files = ref([])
const mvcId = ref('')
const delFileList = ref([])
const fileState = ref({})

onMounted(async () => {
    try {
        // 상세 페이지 내용 조회
        const res = await proxy.$axios.get(`/api/movieboard/${route.params.boardId}/${route.params.pstId}`)
        const data = res.data;

        ttl.value = data.ttl
        spoYn.value = data.spoYn === 'Y' ? true : false
        cn.value = data.cn
        nickNm.value = data.nickNm
        profileUrl.value = data.profileUrl !== '' ? data.profileUrl : profileUrl.value
        rgstDate.value = data.rgstDate
        rcmd.value = data.rcmd
        mvcId.value = data.mvcId

        if (data.atchFileId) getFileList()
    } catch (error) {
        console.log(error)
        alert('게시글 조회 중 에러가 발생하였습니다.')
    }
})

const customToolbar = ref([
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" }
    ],
    [{ color: [] }],
    ["link", "image"],
])

// 파일 선택 시 이벤트 핸들러
const onFileSelect = (event) => {
    files.value = event.files
}

// 파일 리스트 조회
const getFileList = async () => {
    try {
        const res = await proxy.$axios.get(`/api/movieboard/${route.params.boardId}/${route.params.pstId}/files`)
        fileLists.value = res.data.data

        for (let file of fileLists.value) {
            fileState.value[file.seq] = true
        }
    } catch (error) {
        console.log('file 데이터 없음')
    }
}

// 파일 삭제 클릭 시 
const fileDelete = (file) => {
    delFileList.value.push({
        fileId: file.fileId,
        seq: file.seq
    });

    fileState.value[file.seq] = false
}

// 목록
const boardList = () => {
    router.push(`/movieboard/${route.params.boardId}`)
}

// 등록(수정)
const boardUpdate = async () => {
    if (ttl.value === '') {
        alert('제목을 입력해주세요.')
        document.getElementById('ttl').focus()
        return
    }

    if (cn.value === '') {
        alert('내용을 입력해주세요.')
        editor.value.$el.querySelector('.ql-editor').focus();
        return
    }

    const formData = new FormData()

    // 제목
    formData.append('ttl', ttl.value)
    // 스포일러 여부
    formData.append('spoYn', spoYn.value ? 'Y' : 'N')
    // 내용(editor)
    formData.append('cn', cn.value)

    // 파일 추가
    files.value.forEach((file, index) => {
        formData.append(`files_${index}`, file)
    })

    // 삭제할 파일 리스트 추가
    delFileList.value.forEach((item, index) => {
        formData.append(`delFileList[${index}][fileId]`, item.fileId);
        formData.append(`delFileList[${index}][seq]`, item.seq);
    });

    formData.append('pstId', `${route.params.pstId}`)
    formData.append('menuId', pathStore.menuId)
    formData.append('mbrId', authStore.getUser.mbrId)
    formData.append('mbrNm', authStore.getUser.mbrNm)

    try {
        const result = await proxy.$axios.post('/api/bbsEditPost', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (result.status === 200) {
            alert("글 수정이 완료되었습니다.")
            router.push(`/movieboard/${route.params.boardId}/${route.params.pstId}`);
        }
    } catch (error) {
        console.error('There was an error!', error);
    }
}
</script>

<style>
.ql-container {
    height: 500px !important;
}
</style>
