<template>
    <section class="board-contents">
        <div class="inner-wrap">
            <div class="block review_box">
                <div class="board-area">
                    <div class="board-title">
                        <span class="title">
                            {{ f_menuInfo.menuNm }}
                        </span>
                        <span class="more">
                            <router-link :to="`/movieboard/${f_menuInfo.menuId}`">+more</router-link>
                        </span>
                    </div>
                    <div class="board-content">
                        <table>
                            <colgroup>
                                <col style="width:88px">
                                <col>
                                <col style="width:85px">
                                <col style="width:90px">
                                <col style="width:95px">
                            </colgroup>
                            <tbody>
                                <tr class="popularity" v-for="hot in f_hot" :key="hot.scrId">
                                    <td colspan="2" class="tit">
                                        <div class="board-tag">
                                            <strong class="board-tag-txt">
                                                <span class="inner">인기</span>
                                            </strong>
                                        </div>
                                        <div class="board-list">
                                            <div class="inner_list">
                                                <router-link :to="`/movieboard/${f_menuInfo.menuId}/${hot.scrId}`"
                                                    class="article">
                                                    <span class="list-new" v-if="hot.new === 'Y'">N</span>
                                                    <span>
                                                        {{ hot.ttl }}
                                                    </span>
                                                </router-link>
                                                <a class="cmt">
                                                    <span>
                                                        [<em>{{ hot.cmntTotal }}</em>]
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="writer">
                                        TODO
                                    </td>
                                    <td class="ro">
                                        <span class="rcmdtn">{{ hot.rcmdTotal }}</span>
                                    </td>
                                    <td class="date">{{ hot.rgstDate }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="board-content">
                        <table>
                            <colgroup>
                                <col style="width:88px">
                                <col>
                                <col style="width:85px">
                                <col style="width:90px">
                                <col style="width:95px">
                            </colgroup>
                            <tbody>
                                <tr v-for="gen in f_general" :key="gen.scrId" class="general">
                                    <td colspan="2" class="tit">
                                        <div class="board-list">
                                            <div class="inner_list">
                                                <router-link :to="`/movieboard/${f_menuInfo.menuId}/${gen.scrId}`"
                                                    class="article">
                                                    <span class="list-new" v-if="gen.new === 'Y'">N</span>
                                                    <span>
                                                        {{ gen.ttl }}
                                                    </span>
                                                </router-link>
                                                <a class="cmt">
                                                    <span>
                                                        [<em>{{ gen.cmntTotal }}</em>]
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="writer">
                                        TODO
                                    </td>
                                    <td class="ro">
                                        <span class="rcmdtn">{{ gen.rcmdTotal }}</span>
                                    </td>
                                    <td class="date">{{ gen.rgstDate }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="block review_box">
                <div class="board-area">
                    <div class="board-title">
                        <span class="title">
                            {{ s_menuInfo.menuNm }}
                        </span>
                        <span class="more">
                            <router-link :to="`/movieboard/${s_menuInfo.menuId}`">+more</router-link>
                        </span>
                    </div>
                    <div class="board-content">
                        <table>
                            <colgroup>
                                <col style="width:88px">
                                <col>
                                <col style="width:85px">
                                <col style="width:90px">
                                <col style="width:95px">
                            </colgroup>
                            <tbody>
                                <tr class="popularity" v-for="hot in s_hot" :key="hot.scrId">
                                    <td colspan="2" class="tit">
                                        <div class="board-tag">
                                            <strong class="board-tag-txt">
                                                <span class="inner">인기</span>
                                            </strong>
                                        </div>
                                        <div class="board-list">
                                            <div class="inner_list">
                                                <router-link :to="`/movieboard/${s_menuInfo.menuId}/${hot.scrId}`"
                                                    class="article">
                                                    <span class="list-new" v-if="hot.new === 'Y'">N</span>
                                                    <span>
                                                        {{ hot.ttl }}
                                                    </span>
                                                </router-link>
                                                <a href="#" class="cmt">
                                                    <span>
                                                        [<em>{{ hot.cmntTotal }}</em>]
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="writer">
                                        TODO
                                    </td>
                                    <td class="ro">
                                        <span class="rcmdtn">{{ hot.rcmdTotal }}</span>
                                    </td>
                                    <td class="date">{{ hot.rgstDate }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="board-content">
                        <table>
                            <colgroup>
                                <col style="width:88px">
                                <col>
                                <col style="width:85px">
                                <col style="width:90px">
                                <col style="width:95px">
                            </colgroup>
                            <tbody>
                                <tr v-for="gen in s_general" :key="gen.scrId" class="general">
                                    <td colspan="2" class="tit">
                                        <div class="board-list">
                                            <div class="inner_list">
                                                <router-link :to="`/movieboard/${s_menuInfo.menuId}/${gen.scrId}`"
                                                    class="article">
                                                    <span class="list-new" v-if="gen.new === 'Y'">N</span>
                                                    <span>
                                                        {{ gen.ttl }}
                                                    </span>
                                                </router-link>
                                                <a class="cmt">
                                                    <span>
                                                        [<em>{{ gen.cmntTotal }}</em>]
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="writer">
                                        TODO
                                    </td>
                                    <td class="ro">
                                        <span class="rcmdtn">{{ gen.rcmdTotal }}</span>
                                    </td>
                                    <td class="date">{{ gen.rgstDate }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="inner-wrap">
            <div class="star">
                <div class="board-area">
                    <div class="board-title">
                        <span class="title">
                            {{ t_menuInfo.menuNm }}
                        </span>
                        <span class="more">
                            <router-link :to="`/moviegrade/${t_menuInfo.menuId}`">+more</router-link>
                        </span>
                    </div>
                    <div class="board-content">
                        <table>
                            <colgroup>
                                <col>
                                <col style="width:150px">
                                <col style="width:85px">
                                <col style="width:90px">
                                <col style="width:95px">
                            </colgroup>
                            <tbody>
                                <tr v-for="gen in t_general" :key="gen.scrId" class="general">
                                    <td class="tit">
                                        <div class="board-list">
                                            <div class="inner_list">
                                                <a class="article">
                                                    <span class="vdo-nm-color">[{{ gen.vdoNm }}] </span>
                                                    <span>{{ gen.vdoEvl }}</span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="star-grade">
                                        <div class="lego_movie_pure_star">
                                            <div class="area_icon_box">
                                                <div class="area_card">
                                                    <span class="play_star"
                                                        :class="{ 'state_fill': gen.scr >= 1 }"></span>
                                                    <span class="play_star"
                                                        :class="{ 'state_fill': gen.scr >= 2 }"></span>
                                                </div>
                                                <div class="area_card">
                                                    <span class="play_star"
                                                        :class="{ 'state_fill': gen.scr >= 3 }"></span>
                                                    <span class="play_star"
                                                        :class="{ 'state_fill': gen.scr >= 4 }"></span>
                                                </div>
                                                <div class="area_card">
                                                    <span class="play_star"
                                                        :class="{ 'state_fill': gen.scr >= 5 }"></span>
                                                    <span class="play_star"
                                                        :class="{ 'state_fill': gen.scr >= 6 }"></span>
                                                </div>
                                                <div class="area_card">
                                                    <span class="play_star"
                                                        :class="{ 'state_fill': gen.scr >= 7 }"></span>
                                                    <span class="play_star"
                                                        :class="{ 'state_fill': gen.scr >= 8 }"></span>
                                                </div>
                                                <div class="area_card">
                                                    <span class="play_star"
                                                        :class="{ 'state_fill': gen.scr >= 9 }"></span>
                                                    <span class="play_star"
                                                        :class="{ 'state_fill': gen.scr === 10 }"></span>
                                                </div>
                                            </div>
                                            <div class="area_text_box"><span class="blind">별점(10점 만점
                                                    중)</span>{{ gen.scr}}</div>
                                        </div>
                                    </td>
                                    <td class="writer">
                                        {{ gen.nickNm }}
                                    </td>
                                    <td class="ro">
                                        <span class="rcmdtn">{{ gen.rcmdTotal }}</span>
                                    </td>
                                    <td class="date">{{ gen.rgstDate }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()

const main_f = ref([])
const main_s = ref([])
const main_t = ref([])

const f_menuInfo = ref({})
const s_menuInfo = ref({})
const t_menuInfo = ref({})

const f_hot = ref([])
const s_hot = ref([])

const f_general = ref([])
const s_general = ref([])
const t_general = ref([])

const getMainData = async() => {
    try {

        const res = await proxy.$axios.get('/api/mainBoard', {
            params : {
                menuId1 : 1,
                menuId2 : 2,
                menuId3 : 4
            }
        })
        
        main_f.value = res.data.menu1
        main_s.value = res.data.menu2
        main_t.value = res.data.menu3

        f_menuInfo.value = main_f.value.menuInfo
        s_menuInfo.value = main_s.value.menuInfo
        t_menuInfo.value = main_t.value.menuInfo

        f_hot.value = main_f.value.hot
        s_hot.value = main_s.value.hot

        f_general.value = main_f.value.general
        s_general.value = main_s.value.general
        t_general.value = main_t.value.general

    } catch (err) {
        alert("에러가 발생하였습니다. 다시 시도해주세요.")
        return
    }
}

onMounted(() => {
    getMainData()
})

</script>

<style>

</style>