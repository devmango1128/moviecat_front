<template>
  <section class="board-contents">
    <div class="inner-wrap">
      <div class="login_box">
        <div class="title" id="pageCont">
          <h1>로그인</h1>
        </div>
        <div class="scanContents">
          <div class="login-box-wrap">
            <form @submit.prevent="goLogin">
              <div class="login-inbox">
                <div>
                  <div class="input-inbox mg-b5">
                    <label for="mbrId" class="">아이디</label>
                    <input type="text" id="mbrId" name="mbrId" v-model="mbrId" maxlength="20" placeholder="아이디를 입력하세요" class="">
                  </div>
                  <div class="input-inbox">
                    <label for="pswd" class="">비밀번호</label>
                    <input type="password" id="pswd" name="pswd" v-model="pswd" maxlength="20" placeholder="비밀번호를 입력하세요"
                      class="">
                  </div>
                </div>
                <div>
                  <p class="ipt_bottom_info mg-t10">
                    <input type="checkbox" class="id-save-chk" v-model="saveId">
                    <label for="idSaveFlag" class="id-save-chk">아이디 저장</label>
                  </p>
                </div>
              </div>
              <div class="btn_login_wrap">
                <button type="submit" class="btn_login" id="log.login">
                  <span class="btn_text">로그인</span>
                </button>
              </div>
            </form>
            <div>
              <ul class="find_wrap" id="find_wrap">
                <li><span class="find_text"><router-link :to="{name : 'FindIdPw', params: {'div' : 'ID'}}">아이디 찾기</router-link></span></li>
                <li><span class="find_text"><router-link :to="{name : 'FindIdPw', params: {'div' : 'PW'}}">비밀번호 찾기</router-link></span></li>
                <li><span class="find_text"><router-link :to="{name : 'Join'}">회원가입</router-link></span></li>
              </ul>
            </div>
            <div>
              <div class="sns-login">
                <ul class="sns-top-area">
                  <li>
                    <a href="#" class="kakao border_round sns_shadow" @click.prevent="snsLogin">
                      <span class="kakao_img">
                        카카오 로그인
                      </span>
                    </a>
                  </li>
                  <!-- <li>
                    <a href="#" class="naver border_round sns_shadow">
                      <span class="naver_img">네이버 로그인</span></a>
                  </li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const router = useRouter()
const route = useRoute()
const { proxy } = getCurrentInstance()
const mbrId = ref('')
const pswd = ref('')
const saveId = ref(false)
const authStore = useAuthStore()
const code = ref('')

onMounted(() => {

  const savedId = localStorage.getItem('savedId')

  if(savedId) {
    mbrId.value = savedId
    saveId.value = true
  }
})

const goLogin = async () => {

  if(mbrId.value === '') {
    alert('아이디를 입력해주세요.')
    document.getElementById('mbrId').focus()
    return
  }

  if(pswd.value === '') {
    alert('비밀번호를 입력해주세요.')
    document.getElementById('pswd').focus()
    return
  }

  try {

    //데이터 전송
    const formElement = document.querySelector('form');
    const formData = new FormData(formElement);

    const res = await proxy.$axios.post('/login', formData)

    if(typeof res.data.token !== 'undefined') {

      setAuthStore(res)

      //아이디 저장
      if(saveId.value) localStorage.setItem('savedId', mbrId.value)
      else localStorage.removeItem('savedId')

      router.push({ name: 'Main' })
    }

  } catch ( error ) {
    alert('회원정보가 일치하지 않습니다.')
    return
  }
}

//snsLogin
const snsLogin = () => {
  getSnsCode()
}

//인가 코드 조회
const getSnsCode = () => {
  window.Kakao.Auth.authorize({
    redirectUri: 'http://localhost:8080/login'
  });
}

const setAuthStore = (res) => {
  authStore.setToken(res.data.token)

  authStore.setUser({
    mbrId: res.data.mbrId,
    mbrNm: res.data.mbrNm,
    nickNm: res.data.nickNm,
    email: res.data.email,
    atchFileUrl : res.data.atchFileUrl
  });
}

onMounted(async() => {
  
  code.value = route.query.code

  if (code.value) {
    try{
      
      const res = await proxy.$axios.get('/snsLogin',{params : {code : code.value}})
      
      if(typeof res.data.token !== 'undefined') {
        
        setAuthStore(res)
        
        router.push({ name: 'Main' })
      }
    } catch(err) {
      alert("에러가 발생하였습니다. 다시 시도해주세요.")
      return
    }
    
  }
})

</script>

<style>
</style>