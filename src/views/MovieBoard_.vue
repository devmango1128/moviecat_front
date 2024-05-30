<template>
  <section class="board-contents">
    <div class="inner-wrap">
      <div class="login_box">
        <div class="title" id="pageCont">
          <h1>메뉴명</h1>
        </div>
        <div class="contentsWrap">
          <div class="contents">
            <div class="total-cnt">총 100건</div>
            <div class="cont-inner">
              <div class="tbl-list border">
                <table>
                  <colgroup>
                    <col style="width:88px">
                    <col>
                    <col style="width:200px">
                    <col style="width:120px">
                    <col style="width:100px">
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" class="hide-cell">번호</th>
                      <th scope="col" class="hide-line">제목</th>
                      <th scope="col" class="hide-line">추천/반대</th>
                      <th scope="col" class="hide-line">작성자</th>
                      <th scope="col" class="hide-cell">작성일</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="n in 10" :key="n">
                      <td class="hide-cell">{{ 11 - n }}</td>
                      <td class="tit">
                        <div class="board-list">
                          <div class="inner_list">
                            <router-link :to="`/movieboard/${$route.params.boardId}/${n}`">
                              <span class="article">
                                <span class="list-new">N</span>
                                <span>
                                  <em class="sp">[스포]</em>범죄도시4 완전 재밌게 봤음!!! 니네들도 꼭 봐!!
                                </span>
                              </span>
                              <span class="cmt">
                                <span> [<em>259</em>]</span>
                              </span>
                            </router-link>
                          </div>
                        </div>
                      </td>
                      <td class="ro hide-line">
                        <span class="rcmdtn">999+</span><span class="">/</span>
                        <span class="objc">80</span>
                      </td>
                      <td class="hide-line">서울남부강산</td>
                      <td class="hide-cell">2024.05.22</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--등록버튼-->
              <div class="reg-area">
                <button class="btn-blue" @click="boardReg">등록</button>
              </div>
            </div>
            <!--paging-->
            <div class="mg-b50 cs-p">
              <paginate :page-count="getPageCount" :page-range="3" :margin-pages="2" :click-handler="clickCallback"
                :prev-text="'＜'" :next-text="'＞'" :container-class="'pagination'" :page-class="'page-item'">
              </paginate>
            </div>
            <!--search-->
            <div class="search-box mg-b50 cs-p">
              <select class="form-select">
                <option>제목</option>
                <option>제목 + 내용</option>
                <option>작성자</option>
              </select>
              <input type="text" class="input-inbox" placeholder=" 검색어를 입력하세요.">
              <button class="btn-blue">검색</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const boardReg = () => {
  router.push(`/movieboardReg/${route.params.boardId}`);
}
</script>

<style>
</style>