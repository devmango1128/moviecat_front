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
                                                    style="height: 48px;" v-model="message"></textarea>
                                            </div>
                                        </div>
                                        <div>
                                            <p class="ipt_bottom_info mg-t10">
                                                <input type="checkbox" class="sp-chk" checked>
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
                                            <VueEditor v-model="htmlForEditor" :editorToolbar="customToolbar">
                                            </VueEditor>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mg-b10">
                            <FileUpload name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)"
                                :multiple="true" accept="image/*" :maxFileSize="1000000">
                                <template #empty>
                                    <p>Drag and drop files to here to upload.</p>
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

<script>
import { VueEditor } from "vue3-editor";
import FileUpload from 'primevue/fileupload';

export default {
    name: "TextEditor",
    components: { VueEditor, FileUpload },
    data() {
        return {
            customToolbar: [
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
            ],
            message: '범죄도시4 완전 재밌게 봤음!!! 니네들도 꼭 봐!!',
            htmlForEditor: '<span>문명 붕괴 45년 후, 황폐해진 세상 속 누구에게도 알려지지 않은 풍요가 가득한 ‘녹색의 땅’에서 자란 ‘퓨리오사’(안야 테일러-조이)는 바이커 군단의 폭군 ‘디멘투스’(크리스 헴스워스)의 손에 모든 것을 잃고 만다. 가족도 행복도 모두 빼앗기고 세상에 홀로 내던져진 ‘퓨리오사’는 반드시 고향으로 돌아가겠다는 어머니와의 약속을 지키기 위해 인생 전부를 건 복수를 시작하는데... ‘매드맥스’ 시리즈의 전설적인 사령관 ‘퓨리오사’의 대서사시 마침내 분노가 깨어난다!</span>'
        };
    },
    methods() {
        
    }
}
</script>


<style>
    .ql-container {
        height: 500px !important;
    }
</style>