<template>
    <div class="member_content mg-b20">
        <div class="form_section">
            <div class="contentsWrap">
                <div class="contents pd-t0 withDrawal">
                    <div class="cont-inner">
                        <div class="ta-c">
                            <div class="pd-20 fw-b fs-25 mg-b50">회원탈퇴를 신청하기 전에 아래 안내 사항을 꼭 확인해주세요.</div>
                            <div class="mg-b20">사용하고 계신 아이디<span class="fw-b">(kans**)</span>는 탈퇴할 경우 재사용 및 복구가 불가능합니다.
                                <br />
                                또한 탈퇴한 아이디는 본인과 타인 모두 재사용 및 복구가 불가하니 신중하게 선택하시기 바랍니다.
                            </div>

                            <div class="mg-b20">
                                확인하셨다면, 아래 입력칸에 <span class="fw-b">[탈퇴확인]</span> 문구를 적어주시기 바랍니다.<br />
                            </div>
                            <div class="input-inbox w-100p mg-t20 mg-b20 withDrawal-input">
                                <input type="text" id="" name="" maxlength="4" placeholder="탈퇴확인" />
                            </div>

                            <div class="w-100p mg-t20 mg-b20">탈퇴 후 회원정보는 모두 삭제됩니다.</div>
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
import { useRouter } from 'vue-router'
import { inject } from "vue";

const router = useRouter();
const isLogin = inject("isLogin")

const withDrwalComp = () => {

  isLogin.value = false

  if (!isLogin.value) {
    router.push({
      path: '/withDrwalComp',
    })
  }
}
</script>

<style></style>