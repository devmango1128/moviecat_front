<template>
    <section class="board-contents">
        <div class="inner-wrap">
            <div class="login_box">
                <div class="title" id="pageCont">
                    <h1>회원가입</h1>
    <p>마케팅 목적 개인정보 수집 및 이용 동의: {{ markAgre }}</p>
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
                                                    src="https://static.nid.naver.com/images/web/user/default.png?type=s160"
                                                    width="100" height="100">
                                                <span class="mask"></span>
                                            </div>
                                            <div class="btn_area_btm">
                                                <span class="btn_file">
                                                    <label for="inputImage" class="btn_model">
                                                        <b id="btnChangeProfile" class="btn2">사진변경</b>
                                                    </label>
                                                    <input type="file" id="inputImage" name="profileImage"
                                                        accept="image/*">
                                                </span>
                                                <a href="#" class="btn_model">
                                                    <b id="btnDelete" class="btn2 btn_disable">삭제</b>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="thcell required">
                                            <label for="">아이디</label>
                                        </div>
                                    </th>
                                    <td>
                                        <div class="tdcell input-inbox">
                                            <input type="text" id="w-70p" name="" minlength="5" maxlength="20"
                                                placeholder="아이디를 입력하세요" class="" />
                                            <span class="info-txt dis-hide">5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용
                                                가능합니다.</span>
                                            <span class="error-txt">사용할 수 없는 아이디입니다.</span>
                                        </div>
                                    </td>
                                    <th scope="row">
                                        <div class="thcell required">
                                            <label for="">이름</label>
                                        </div>
                                    </th>
                                    <td>
                                        <div class="tdcell input-inbox">
                                            <input type="text" id="" name="" maxlength="20" placeholder="이름을 입력하세요"
                                                class="">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="thcell required">
                                            <label for="">비밀번호</label>
                                        </div>
                                    </th>
                                    <td>
                                        <div class="tdcell input-inbox">
                                            <input type="password" id="" name="" maxlength="16"
                                                placeholder="비밀번호를 입력하세요" class="">
                                            <span class="info-txt">6자리 이상, 영문 + 숫자 + 특수문자만 사용 가능합니다.</span>
                                        </div>
                                    </td>
                                    <th scope="row">
                                        <div class="thcell required">
                                            <label for="">비밀번호 확인</label>
                                        </div>
                                    </th>
                                    <td>
                                        <div class="tdcell input-inbox">
                                            <input type="password" id="" name="" maxlength="16"
                                                placeholder="비밀번호 확인을 입력하세요" class="">
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
                                            <input type="text" id="" name="" maxlength="16" placeholder="닉네임을 입력하세요"
                                                class="">
                                            <span class="info-txt">2~6자 사이의 한글, 영문, 숫자, 특수기호(_),(-)만 사용 가능합니다.</span>
                                        </div>
                                    </td>
                                    <th scope="row">
                                        <div class="thcell">
                                            <label for="">휴대폰번호</label>
                                        </div>
                                    </th>
                                    <td>
                                        <div class="tdcell input-inbox">
                                            <input type="text" id="" name="" maxlength="16" placeholder="휴대폰번호를 입력하세요"
                                                class="">
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
                                            <input type="text" id="" name="" maxlength="16" placeholder="이메일을 입력하세요"
                                                class="w-39p">
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
                                            <textarea placeholder="자기소개는 최대 200자까지 등록 가능합니다."
                                                class="this_textarea _textarea_box"></textarea>
                                            <p class="this_numbering _count_num">(0/200)</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="btn_submit_wrap mg-l0">
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
import { computed } from 'vue';
import { useJoinStore } from '@/store/join';

const joinStore = useJoinStore();
const markAgre = computed(() => joinStore.markAgre);

console.log('Received markAgre from store:', markAgre.value);
</script>

<style>

</style>