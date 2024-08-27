// 공통 up버튼 제이쿼리
$(function () {
  $("#top").on("click", function (event) {
    // 먼저 기본 a태그의 이벤트 제거하기
    event.preventDefault();

    //부드러운 화면 스크롤
    //html태그를 선택하여 움직임을 준다. 이때 scrolltop의 위치를 0px위치로 1초 동안 옮긴다.
    $("html").animate({ scrollTop: 0 }, 0);
  });
});
// 드래곤시키

$(document).ready(function () {
  $(".con_2").slick({});
});
