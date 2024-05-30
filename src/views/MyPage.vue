<template>
    <div class="contentsWrap l2 mg-t20">
        <LeftMenu></LeftMenu>
        <router-view name="myPageContents" />
    </div>
</template>

<script>
import LeftMenu from '../components/myPage/LeftMenu.vue'

export default {
    name: 'MyPage',
    components: {
        LeftMenu
    }
}
</script>

<style>
 @import '@/assets/css/myPage.css';
</style>