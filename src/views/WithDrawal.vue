<template>
    <div class="member_content mg-b20">
        <div class="form_section">
            <div class="contentsWrap">
                <div class="contents pd-t0 withDrawal">
                    <div class="cont-inner">
                        <div class="ta-c">
                            <div class="pd-20 fw-b fs-25 mg-b50">회원탈퇴를 신청하기 전에 아래 안내 사항을 꼭 확인해주세요.</div>
                            <div class="mg-b20">사용하고 계신 아이디<span class="fw-b">({{ maskId(mbrId) }})</span>는 탈퇴할 경우 재사용 및
                                복구가 불가능합니다.
                                <br />
                                또한 탈퇴한 아이디는 본인과 타인 모두 재사용 및 복구가 불가하니 신중하게 선택하시기 바랍니다.
                            </div>

                            <div class="mg-b20">
                                확인하셨다면, 아래 입력칸에 <span class="fw-b">[탈퇴확인]</span> 문구를 적어주시기 바랍니다.<br />
                            </div>
                            <div class="input-inbox w-100p mg-t20 mg-b20 withDrawal-input">
                                <input type="text" maxlength="4" placeholder="탈퇴확인" id="dConfirm" v-model="dConfirm" />
                            </div>

                            <div class="w-100p mg-t20 mg-b20">탈퇴 후 회원정보는 모두 삭제됩니다.</div>
                            <div class="sns-info">
                                [SNS회원의 경우 무비캣 회원탈퇴와 별도로 카카오톡 > 설정 > 카카오계정 > 연결된 서비스 관리 > 연결끊기를 해주시기 바랍니다.]
                            </div>
                        </div>
                        <!--삭제버튼-->
                        <div class="withDrawal-area mg-t10">
                            <button class="btn-fl-gray" @click="withDrwalComp">회원탈퇴</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const router = useRouter()
const authStore = useAuthStore()
const { proxy } = getCurrentInstance()

const mbrId = ref(authStore.getUser.mbrId)
const dConfirm = ref('')

const withDrwalComp = async () => {

    if (dConfirm.value === '탈퇴확인') {

        try {

            const res = await proxy.$axios.post('/api/myInfoDelete', null, {
                params : {
                    mvcId: authStore.getUser.mvcId
                }
            })

            if (res.status === 200) {

                authStore.clearToken()
                authStore.clearUser()

                router.push({
                    path: '/withDrwalComp',
                })
            }
            
        } catch (err) {
            alert("에러가 발생하였습니다. 다시 시도해주세요.")
            return
        }

        
    } else {
        alert('입력값을 확인해주세요.')
        document.getElementById('dConfirm').focus()
        return
    }
}

const maskId = (id) => {
    if (id.length <= 3) {
        return '*'.repeat(id.length)
    }
    return id.slice(0, -3) + '***'
}
</script>

<style></style>