<template>
    <section class="board-contents">
        <div class="inner-wrap">
            <div class="login_box">
                <div class="title" id="pageCont">
                    <h1>메뉴명</h1>
                </div>
                <div class="contentsWrap">
                    <div class="contents">
                        <form @submit.prevent="boardReg">
                            <div class="ArticleContentBox">
                                <div class="article_header">
                                    <div class="ArticleTitle">
                                        <div class="title_area ArticleWritingTitle">
                                            <div class="row">
                                                <div class="FlexableTextArea">
                                                    <textarea placeholder="제목을 입력해 주세요." name="ttl" v-model="ttl" id="ttl" class="textarea_input h_48" maxlength="240"></textarea>
                                                </div>
                                            </div>
                                            <div>
                                                <p class="ipt_bottom_info mg-t10">
                                                    <input type="checkbox" class="sp-chk" v-model="spoYn">
                                                    <label for="spoYn" class="sp-chk">스포 포함</label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="article_container">
                                    <div class="article_viewer">
                                        <div>
                                            <div class="content CafeViewer">
                                                <VueEditor ref="editor" id="cn" v-model="cn" :editorToolbar="customToolbar"></VueEditor>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mg-b10">
                                <FileUpload @select="onFileSelect"
                                    :multiple="true" accept="image/*" :maxFileSize="500000" v-model="files">
                                    <template #empty>
                                        <p>파일을 여기로 드래그 앤 드롭하여 업로드하세요.</p>
                                    </template>
                                </FileUpload>
                            </div>
                            <div class="btn-area mg-b50">
                                <button class="list-btn" @click.prevent="goList">목록</button>
                                <button type="" class="reg-btn">등록</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { VueEditor } from 'vue3-editor'
import FileUpload from 'primevue/fileupload'
import { ref, getCurrentInstance, onMounted } from 'vue'
import { usePathStore } from '@/store/path'
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'vue-router'

const pathStore = usePathStore()
const authStore = useAuthStore()
const router = useRouter()
const { proxy } = getCurrentInstance()

const ttl = ref('')
const spoYn = ref('N')
const editor = ref(null);
const cn = ref('')
const files = ref([])

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

onMounted(() => {
    const uploadButton = document.querySelector('.p-fileupload-buttonbar .p-button[aria-label="Upload"]');
    if (uploadButton) {
        uploadButton.style.display = 'none';
    }
})

//목록
const goList = () => {
    router.push(pathStore.currentPath)
}

// 파일 선택 시 이벤트 핸들러
const onFileSelect = (event) => {
  files.value = event.files
}

//게시글등록
const boardReg = async() => {
    
    if(ttl.value === '') {
        alert('제목을 입력해주세요.')
        document.getElementById('ttl').focus()
        return
    }

    if(cn.value === '') {
        alert('내용을 입력해주세요.')
        editor.value.$el.querySelector('.ql-editor').focus();
        return
    }

    const formElement = document.querySelector('form')
    const formData = new FormData(formElement)

    //스포유무
    formData.append('spoYn', spoYn.value ? 'Y' : 'N')

    //내용(editor)
    formData.append('cn', cn.value)

    //파일(files)
    for (let i = 0; i < files.value.length; i++) {
        formData.append('files', files.value[i])
    }

    formData.append('menuId', pathStore.menuId)
    formData.append('mbrId', authStore.getUser.mbrId)
    formData.append('mbrNm', authStore.getUser.mbrNm)

    try {

        const result = await proxy.$axios.post('/api/bbsWritePost', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (result.status === 200) {
            alert("글 등록이 완료되었습니다.")
            goList()
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