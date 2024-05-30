<template>
  <div class="member_content mg-t20 mg-b20">
    <div class="form_section">
      <table class="tbl_model">
        <colgroup>
          <col style="width:20%">
          <col>
          <col style="width:20%">
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
                  <img id="imgThumb" src="https://static.nid.naver.com/images/web/user/default.png?type=s160"
                    width="100" height="100">
                  <span class="mask"></span>
                </div>
                <div class="btn_area_btm">
                  <span class="btn_file">
                    <label for="inputImage" class="btn_model">
                      <b id="btnChangeProfile" class="btn2">사진변경</b>
                    </label>
                    <input type="file" id="inputImage" name="profileImage" accept="image/*">
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
              <div class="tdcell input-inbox mg-t33">
                kangs**
              </div>
            </td>
            <th scope="row">
              <div class="thcell required">
                <label for="">이름</label>
              </div>
            </th>
            <td>
              <div class="tdcell input-inbox mg-t33">
                김강산
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
                <input type="password" id="" name="" maxlength="16" placeholder="비밀번호를 입력하세요" class="">
                <span class="info-txt">6자리 이상, 영문 + 숫자 + 특수문자</span>
              </div>
            </td>
            <th scope="row">
              <div class="thcell required">
                <label for="">비밀번호 확인</label>
              </div>
            </th>
            <td>
              <div class="tdcell input-inbox">
                <input type="password" id="" name="" maxlength="16" placeholder="비밀번호 확인을 입력하세요" class="">
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
                <input type="text" id="" name="" maxlength="16" value="서울남부강산" placeholder="닉네임을 입력하세요.">
                <span class="info-txt">2~6자 사이의 한글, 영문, 숫자, 특수기호(_),(-)</span>
              </div>
            </td>
            <th scope="row">
              <div class="thcell">
                <label for="">휴대폰번호</label>
              </div>
            </th>
            <td>
              <div class="tdcell input-inbox">
                <input type="text" id="" name="" maxlength="16" value="01012341234" placeholder="휴대폰번호를 입력하세요" class="">
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
                <input type="text" id="" name="" maxlength="16" value="kangsan@moviecat.com" placeholder="이메일을 입력하세요"
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
                <textarea placeholder="자기소개는 최대 200자까지 등록 가능합니다." class="this_textarea _textarea_box"
                  v-model="introduction"></textarea>
                <p class="this_numbering _count_num">({{ introduction.length }}/200)</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="btn_submit_wrap mg-l0">
        <button type="button" class="btn_submit">수정</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const introduction = ref('김강산입니다.\n반갑습니다.');
</script>

<style>

</style>