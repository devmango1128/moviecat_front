<template>
    <section class="board-contents">
        <div class="inner-wrap">
            <div class="login_box">
                <div class="title" id="pageCont">
                    <h1>ID/PW 찾기</h1>
                </div>
                <div class="scanContents">
                    <div class="login-box-wrap">
                        <div class="login-inbox mg-b210">
                            <div class="toggle-button">
                                <div class="idpw-btn" :class="{ 'clk': isIdFindActive }" @click="getIdFind">아이디 찾기</div>
                                <div class="idpw-btn" :class="{ 'clk': isPwFindActive }" @click="getPwFind">비밀번호 찾기
                                </div>
                            </div>
                            <!--아이디 찾기-->
                            <div v-if="isIdFindActive" class="id-find-area">
                                <div v-if="!isIdResult">
                                    <div class="input-inbox mg-b5 mg-t50">
                                        <label for="mbrNm" class="">이름</label>
                                        <input type="text" id="mbrNm" name="mbrNm" maxlength="16"
                                            placeholder="이름을 입력하세요" class="">
                                    </div>
                                    <div class="input-inbox">
                                        <label for="email" class="">이메일</label>
                                        <input type="text" id="email" name="email" maxlength="16"
                                            placeholder="이메일을 입력하세요" class="">
                                    </div>
                                    <div class="ta-c">
                                        <button class="btn-fl-blue" @click="getId">확인</button>
                                    </div>
                                </div>
                                <!--아이디 result-->
                                <div v-else class="id-find-result">
                                    <div class="mg-b5 mg-t50 ta-c fw-b">
                                        회원님의 아이디는 <span class="col-blue">movie***</span>입니다.
                                    </div>
                                    <div class="ta-c">
                                        <button class="btn-fl-blue">확인</button>
                                    </div>
                                </div>
                            </div>
                            <!--pw find -->
                            <div v-else class="pw-find-area">
                                <div v-if="!isPwResult">
                                    <div class="input-inbox mg-b5 mg-t50">
                                        <label for="mbrId" class="">아이디</label>
                                        <input type="text" id="mbrId" name="mbrId" maxlength="16"
                                            placeholder="아이디를 입력하세요" class="">
                                    </div>
                                    <div class="input-inbox mg-b5">
                                        <label for="mbrNm" class="">이름</label>
                                        <input type="text" id="mbrNm" name="mbrNm" maxlength="16"
                                            placeholder="이름을 입력하세요" class="">
                                    </div>
                                    <div class="input-inbox">
                                        <label for="email" class="">이메일</label>
                                        <input type="text" id="email" name="email" maxlength="16"
                                            placeholder="이메일을 입력하세요" class="">
                                    </div>
                                    <div class="ta-c">
                                        <button class="btn-fl-blue" @click="getPw">확인</button>
                                    </div>
                                </div>
                                <!--아이디 result-->
                                <div v-else class="id-find-result">
                                    <div class="mg-b5 mg-t50 ta-c fw-b">
                                        등록하신 메일로 임시 비밀번호를 발송했습니다.
                                    </div>
                                    <div class="ta-c">
                                        <button class="btn-fl-blue">확인</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import { ref, defineProps, onMounted } from 'vue'

    const props = defineProps({
        div: {
            type: [String, String],
            required: true
        }
    })

    onMounted(() => {
       if(props.div === 'PW') {
            getPwFind()
       }
    })

    const isIdFindActive = ref(true)
    const isPwFindActive = ref(false)
    const isIdResult = ref(false)
    const isPwResult = ref(false)
    
    //아이디 찾기 클릭
    const getIdFind = () => {
        isIdFindActive.value = true
        isPwFindActive.value = false
    }

    //비밀번호 찾기 클릭
    const getPwFind = () => {
        isIdFindActive.value = false
        isPwFindActive.value = true
    }

    //아이디 조회해오기
    const getId = () => {
        isIdResult.value = true        
    }

    //패스워드 확인하기
    const getPw = () => {
        isPwResult.value = true   
    }

</script>

<style>

</style>