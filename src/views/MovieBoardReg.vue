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
                                    <div class="title_area ArticleWritingTitle">
                                        <div class="row">
                                            <div class="FlexableTextArea">
                                                <textarea placeholder="제목을 입력해 주세요." class="textarea_input"
                                                    style="height: 48px;"></textarea>
                                            </div>
                                        </div>
                                        <div>
                                            <p class="ipt_bottom_info mg-t10">
                                                <input type="checkbox" class="sp-chk">
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
                                            <VueEditor v-model="content" :editorToolbar="customToolbar"></VueEditor>
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
                            <button class="list-btn">목록</button>
                            <button class="reg-btn">등록</button>
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
        };
    },
}
</script>


<style>
    .ql-container {
        height: 500px !important;
    }
</style>