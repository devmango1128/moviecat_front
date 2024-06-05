<template>
    <section class="board-contents">
        <div class="inner-wrap">
            <div class="login_box">
                <div class="title" id="pageCont">
                    <h1>회원가입</h1>
                </div>
                <div class="form_content join_content mg-t20 mg-b20">
                    <div class="form_section">
                        <table class="tbl_model">
                            <colgroup>
                                <col style="width:15%">
                                <col>
                                <col style="width:15%">
                                <col>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <div class="thcell">프로필 사진</div>
                                    </th>
                                    <td colspan="3">
                                        <div class="tdcell">
                                            <div class="profile_photo">
                                                <img id="imgThumb"
                                                    :src="previewImage"
                                                    width="100" height="100">
                                                <span class="mask"></span>
                                            </div>
                                            <div class="btn_area_btm">
                                                <span class="btn_file">
                                                    <label for="profileImage" class="btn_model">
                                                        <b id="btnChangeProfile" class="btn2">사진변경</b>
                                                    </label>
                                                    <input type="file" id="profileImage" name="profileImage"
                                                        accept="image/*" @change="onImageChange">
                                                </span>
                                                <a href="#" class="btn_model" @click.prevent="removeImage">
                                                    <b id="btnDelete" class="btn2 btn_disable">삭제</b>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="thcell required">
                                            <label for="mbr_id">아이디</label>
                                        </div>
                                    </th>
                                    <td>
                                        <div class="tdcell input-inbox">
                                            <input type="text" id="mbr_id" name="mbr_id" minlength="5" maxlength="20"
                                                placeholder="아이디를 입력하세요" class="" v-model="mbr_id" @input="validMbrId"/>
                                            <span class="info-txt" :class="{'dis-hide' : !isMbrIdValid}" v-if="isMbrIdValid">5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용
                                                가능합니다.</span>
                                            <span class="error-txt" v-else>사용할 수 없는 아이디입니다.</span>
                                        </div>
                                    </td>
                                    <th scope="row">
                                        <div class="thcell required">
                                            <label for="mbr_nm">이름</label>
                                        </div>
                                    </th>
                                    <td>
                                        <div class="tdcell input-inbox">
                                            <input type="text" id="mbr_nm" name="mbr_nm" maxlength="20" placeholder="이름을 입력하세요" class="" v-model="mbr_nm" @input="validMbrNm">
                                            <span class="info-txt" :class="{'dis-hide' : !isMbrNmValid}" v-if="isMbrNmValid">최대 20자의 한글만 사용
                                                가능합니다.</span>
                                            <span class="error-txt" v-else>사용할 수 없는 이름입니다.</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="thcell required">
                                            <label for="pswd">비밀번호</label>
                                        </div>
                                    </th>
                                    <td>
                                        <div class="tdcell input-inbox">
                                            <input type="password" id="pswd" name="pswd" minlength="6" maxlength="20"
                                                placeholder="비밀번호를 입력하세요" class="" v-model="pswd" @input="validPswd">
                                            <span class="info-txt" :class="{'dis-hide' : !isPswdValid}" v-if="isPswdValid">6~20자의 영문 + 숫자 + 특수문자 조합으로 사용 가능합니다.</span>
                                            <span class="error-txt" v-else>사용할 수 없는 비밀번호입니다.</span>
                                        </div>
                                    </td>
                                    <th scope="row">
                                        <div class="thcell required">
                                            <label for="">비밀번호 확인</label>
                                        </div>
                                    </th>
                                    <td>
                                        <div class="tdcell input-inbox">
                                            <input type="password" id="pswd_confirm" minlength="6" maxlength="20"
                                                placeholder="비밀번호 확인을 입력하세요" class="" v-model="confirmPswd" @input="validConfirmPswd">
                                            <span class="error-txt" :class="{'dis-hide' : !isConfirmPswdValid}" v-if="isConfirmPswdValid">비밀번호가 일치하지 않습니다.</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="thcell required">
                                            <label for="">닉네임</label>
                                        </div>
                                    </th>
                                    <td>
                                        <div class="tdcell input-inbox">
                                            <input type="text" id="nick_nm" name="nick_nm" minlength="2" maxlength="6" placeholder="닉네임을 입력하세요" v-model="nick_nm" @input="validNickNm"
                                                class="">
                                            <span class="info-txt" :class="{'dis-hide' : !isNickNmValid}" v-if="isNickNmValid">2~6자 사이의 한글, 영문, 숫자, 특수기호(_),(-)만 사용 가능합니다.</span>
                                            <span class="error-txt" v-else>사용할 수 없는 닉네임입니다.</span>
                                        </div>
                                    </td>
                                    <th scope="row">
                                        <div class="thcell">
                                            <label for="">휴대폰번호</label>
                                        </div>
                                    </th>
                                    <td>
                                        <div class="tdcell input-inbox">
                                            <input type="text" id="phone_no" name="phone_no" maxlength="13" placeholder="휴대폰번호를 입력하세요"
                                                class="" v-model="phone_no" @input="validPhoneNo">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="thcell required">
                                            <label for="">이메일</label>
                                        </div>
                                    </th>
                                    <td colspan="3">
                                        <div class="tdcell input-inbox">
                                            <div class="w-100p dis-inb">
                                            <input type="text" id="email" name="email" maxlength="30" placeholder="이메일을 입력하세요"
                                                class="w-39p" v-model="email" @input="validEmail">
                                            </div>
                                            <span class="error-txt" :class="{'dis-hide' : !isEmailValid}" v-if="isEmailValid">유효한 이메일 주소를 입력하세요.</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="thcell">
                                            <label for="">자기소개</label>
                                        </div>
                                    </th>
                                    <td colspan="3">
                                        <div class="mg-10 area_textarea_box _input_wrap">
                                            <textarea id="intr_intrcn" name="intr_intrcn" placeholder="자기소개는 최대 200자까지 등록 가능합니다."
                                                class="this_textarea _textarea_box" maxlength="200" v-model="intr_intrcn" @input="validIntr"></textarea>
                                            <p class="this_numbering _count_num">({{ intr_intrcn.length }}/200)</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="btn_submit_wrap mg-l0">
                            <input type="hidden" name="markAgre" id="markAgre" :value="markAgre" />
                            <button type="button" class="btn_cancel w-49p mg-r10">취소</button>
                            <button type="button" class="btn_submit w-49p">등록</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useJoinStore } from '@/store/join';

const joinStore = useJoinStore();
//마케팅 동의 값 
const markAgre = computed(() => joinStore.markAgre)
//이미지 기본값
const previewImage = ref('https://static.nid.naver.com/images/web/user/default.png')
//회원 아이디 & 유효성 검사
const mbr_id = ref('')
const isMbrIdValid = ref(true)
//회원 이름 & 유효성 검사
const mbr_nm = ref('')
const isMbrNmValid = ref(true)
//비밀번호 & 유효성 검사
const pswd = ref('')
const isPswdValid = ref(true)
//비밀번호 확인 & 유효성 검사
const confirmPswd = ref('')
const isConfirmPswdValid = ref(false)
//닉네임 & 유효성 검사
const nick_nm = ref('')
const isNickNmValid = ref(true)
//휴대폰번호 & 유효성 검사
const phone_no = ref('010-')
//이메일 & 유효성 검사
const email = ref('')
const isEmailValid = ref(false)
//자기소개 & 유효성검사
const intr_intrcn = ref('')

//이미지 변경 핸들러
const onImageChange = (e) => {
 
    const file = e.target.files[0]

    if(file && file.type.startsWith('image/')) {
        const reader = new FileReader()

        reader.onload = (e2) => {
            previewImage.value = e2.target.result
        }
        reader.readAsDataURL(file)
    }
}

//이미지 삭제 핸들러
const removeImage = () => {
    previewImage.value = 'https://static.nid.naver.com/images/web/user/default.png'
    document.getElementById('inputImage').value= ''
}

//아이디 valid
const validMbrId = () => {
    const regex = /^[a-z0-9_-]{5,20}$/;

    isMbrIdValid.value = regex.test(mbr_id.value)

    if(mbr_id.value === '') isMbrIdValid.value = true
}

//이름 valid
const validMbrNm = () => {
    const regex = /^[가-힣]{2,20}$/;

    isMbrNmValid.value = regex.test(mbr_nm.value)

    if(mbr_nm.value === '') isMbrNmValid.value = true
}

//패스워드 valid
const validPswd = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,20}$/;
  
    if (pswd.value === '') {
        isPswdValid.value = true;
    } else {
        isPswdValid.value = regex.test(pswd.value);
    }
}

//패스워드 확인 valid
const validConfirmPswd = () => {
    
    isConfirmPswdValid.value = pswd.value === confirmPswd.value ? false : true

    if(confirmPswd.value === '') isConfirmPswdValid.value = false
}

//닉네임 확인 valid
const validNickNm = () => {

    const regex = /^[가-힣A-Za-z0-9_-]{2,6}$/;

    isNickNmValid.value = regex.test(nick_nm.value)

    if(nick_nm.value === '') isNickNmValid.value = true
}

//휴대폰 번호 valid
const validPhoneNo = () => {
    let number = phone_no.value.replace(/\D/g, '')

    // 010으로 시작하게 강제
    if (!number.startsWith('010')) {
        number = '010'
    }

    if (number.length <= 3) {
        phone_no.value = number
    } else if (number.length <= 7) {
        phone_no.value = number.slice(0, 3) + '-' + number.slice(3)
    } else if (number.length <= 11) {
        phone_no.value = number.slice(0, 3) + '-' + number.slice(3, 7) + '-' + number.slice(7)
    } else {
        phone_no.value = number.slice(0, 3) + '-' + number.slice(3, 7) + '-' + number.slice(7, 11)
    }
}

//이메일 유효성검사
const validEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    isEmailValid.value = !regex.test(email.value)

    if (email.value === '') isEmailValid.value = false
}

//자기소개 유효성검사
const validIntr = () => {
    
    if(intr_intrcn.value.length > 200) {
        intr_intrcn.value = intr_intrcn.value.slice(0, 200)
    }
}
</script>

<style>

</style>