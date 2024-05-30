<template>
  <div class="withDrwalComp-area">
    <div class="widthDrwalComp-child">
      정상적으로 탈퇴가 완료 되었습니다.<br/>
      그동안 <span class="col-blue fw-b">무비캣</span>을 이용해주셔서 감사합니다.
      <div class="withDrawal-area mg-t10">
          <button class="btn-fl-blue" @click="goMain">메인으로 이동</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goMain = () => {
  router.push('/')
}
</script>

<style>

</style>