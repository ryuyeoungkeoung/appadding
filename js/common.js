"use strict";
// 서브3 작은 달력 자바스크립트

let flatpickr1 = document.querySelector(".flatpickr1");

flatpickr1.flatpickr({
  wrap: true,
  mode: "multiple",
  dateFormat: "Y-m-d",
  defaultDate: ["2024-07-04", "2024-07-24"],
});

let flatpickr2 = document.querySelector(".flatpickr2");

flatpickr2.flatpickr({
  wrap: true,
  mode: "multiple",
  dateFormat: "Y-m-d",
  defaultDate: ["2024-07-04", "2024-07-24"],
});
//
let flatpickr3 = document.querySelector(".flatpickr3");

flatpickr3.flatpickr({
  wrap: true,
  mode: "multiple",
  dateFormat: "Y-m-d",
  defaultDate: ["2024-07-04", "2024-07-24"],
});

let flatpickr4 = document.querySelector(".flatpickr4");

flatpickr4.flatpickr({
  wrap: true,
  mode: "multiple",
  dateFormat: "Y-m-d",
  defaultDate: ["2024-07-04", "2024-07-24"],
});

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
