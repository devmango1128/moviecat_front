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
                                        <input type="text" id="mbrNm" name="mbrNm" v-model="mbrNm" maxlength="20"
                                            placeholder="이름을 입력하세요" class="">
                                    </div>
                                    <div class="input-inbox">
                                        <label for="email" class="">이메일</label>
                                        <input type="text" id="email" name="email" v-model="email" maxlength="30"
                                            placeholder="이메일을 입력하세요" class="">
                                    </div>
                                    <div class="ta-c">
                                        <button class="btn-fl-blue" @click="getId">확인</button>
                                    </div>
                                </div>
                                <!--아이디 result-->
                                <div v-else class="id-find-result">
                                    <div class="mg-b5 mg-t50 ta-c fw-b" v-if="findIdOk">
                                        회원님의 아이디는 <span class="col-blue">{{ findMbrId }}</span>입니다.
                                        <div class="ta-c">
                                            <button class="btn-fl-blue" @click.prevent="$router.push('/login')">로그인</button>
                                        </div>
                                    </div>
                                    <div class="mg-b5 mg-t50 ta-c fw-b" v-else>
                                        해당 정보로 조회되는 아이디가 없습니다.
                                        <div class="ta-c">
                                            <button class="btn-fl-blue" @click.prevent="$router.push('/join')">회원가입</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--pw find -->
                            <div v-else class="pw-find-area">
                                <div v-if="!isPwResult">
                                    <div class="input-inbox mg-b5 mg-t50">
                                        <label for="mbrId" class="">아이디</label>
                                        <input type="text" id="mbrId" name="mbrId" v-model="mbrId" maxlength="20"
                                            placeholder="아이디를 입력하세요" class="">
                                    </div>
                                    <div class="input-inbox mg-b5">
                                        <label for="mbrNm" class="">이름</label>
                                        <input type="text" id="mbrNm" name="mbrNm" v-model="mbrNm" maxlength="20"
                                            placeholder="이름을 입력하세요" class="">
                                    </div>
                                    <div class="input-inbox">
                                        <label for="email" class="">이메일</label>
                                        <input type="text" id="email" name="email" v-model="email" maxlength="30"
                                            placeholder="이메일을 입력하세요" class="">
                                    </div>
                                    <div class="ta-c">
                                        <button class="btn-fl-blue" @click="getPw">확인</button>
                                    </div>
                                </div>
                                <!--아이디 result-->
                                <div v-else class="id-find-result">
                                    <div class="mg-b5 mg-t50 ta-c fw-b" v-if="findPswdOk">
                                        등록하신 메일로 임시 비밀번호를 발송했습니다.
                                        <div class="ta-c">
                                            <button class="btn-fl-blue" @click.prevent="$router.push('/login')">로그인</button>
                                        </div>
                                    </div>
                                    <div class="mg-b5 mg-t50 ta-c fw-b" v-else>
                                        해당 정보로 조회되는 회원이 없습니다.
                                        <div class="ta-c">
                                            <button class="btn-fl-blue" @click.prevent="$router.push('/join')">회원가입</button>
                                        </div>
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

    import { ref, defineProps, onMounted, getCurrentInstance } from 'vue'

    const { proxy } = getCurrentInstance()

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

    const mbrId = ref('')
    const mbrNm = ref('')
    const email = ref('')

    const findIdOk = ref(false)
    const findMbrId = ref('')

    const findPswdOk = ref(false)
    
    //아이디 찾기 클릭
    const getIdFind = () => {
        initData()
        isIdFindActive.value = true
        isPwFindActive.value = false
    }

    //비밀번호 찾기 클릭
    const getPwFind = () => {
        initData()
        isIdFindActive.value = false
        isPwFindActive.value = true
    }

    //데이터 초기화
    const initData = () => {
        mbrId.value = ''
        mbrNm.value = ''
        email.value = ''
    }

    //아이디 조회해오기
    const getId = async () => {

        if(mbrNm.value === '') {
            alert('이름을 입력해주세요.')
            document.getElementById('mbrNm').focus()
            return
        }

        if(email.value === '') {
            alert('이메일을 입력해주세요.')
            document.getElementById('email').focus()
            return
        }

        try{
            const result = await proxy.$axios.get('/findId', {params : {'mbrNm' : mbrNm.value, 'email' : email.value}})

            //사용가능 id
            if(result.status === 200) {
                findIdOk.value = true
                findMbrId.value = result.data
            }
        } catch(error) {
            //id 없는 경우
            if(error.response && error.response.status === 404) {
                findIdOk.value = false
            }
        }
        
        isIdResult.value = true        
    }

    //패스워드 확인하기
    const getPw = async () => {

        if(mbrId.value === '') {
            alert('아이디를 입력해주세요.')
            document.getElementById('mbrId').focus()
            return
        }

        if(mbrNm.value === '') {
            alert('이름을 입력해주세요.')
            document.getElementById('mbrNm').focus()
            return
        }

        if(email.value === '') {
            alert('이메일을 입력해주세요.')
            document.getElementById('email').focus()
            return
        }

        try{
           
            const result = await proxy.$axios.get('/findPswd', {params : {'mbrId': mbrId.value, 'mbrNm' : mbrNm.value, 'email' : email.value}})
        
            if(result.status === 200) {
                findPswdOk.value = true
            }
            

        } catch(error) {
            
            if(error.response && error.response.status === 404) {
                findPswdOk.value = false
            }
        }

        isPwResult.value = true   
    }

</script>

<style>

</style>