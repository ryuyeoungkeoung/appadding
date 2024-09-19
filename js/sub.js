"use strict";
// 서브페이지 자바스크립트 모음

// 플러팅 생애주기  애기 슬라이더
document.addEventListener("DOMContentLoaded", function () {
  $(".baby_wrap").slick({
    autoplay: true, // 자동 재생
    autoplaySpeed: 5000, // 5초마다 슬라이드 전환
    infinite: true, // 무한 반복
    slidesToScroll: 1, // 한 번에 1개의 슬라이드 이동
    arrows: false, // 화살표 비활성화
    speed: 1500, // 슬라이드 전환 속도 (1.5초)
    draggable: true, // 드래그 가능
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // 공통 up 버튼 함수
  function setupScrollToTop(buttonId) {
    document
      .getElementById(buttonId)
      .addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  }

  // 서브2, 서브4 up 버튼 설정
  setupScrollToTop("top");
  setupScrollToTop("topp");

  // 서브3 드래곤시티 슬라이더 초기화
  $(".con_2").slick({
    dots: true,
    arrows: false,
    autoplaySpeed: 2000,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 701,
        settings: {
          dots: false,
          arrows: true,
        },
      },
    ],
  });
});

// 서브 3슬릭슬라이더
document.addEventListener("DOMContentLoaded", function () {
  // 공통 up 버튼 설정
  document.getElementById("topp").addEventListener("click", function (event) {
    event.preventDefault();

    // 부드러운 스크롤
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 드래곤시키 슬라이더 초기화
  $(".con_2").slick({
    dots: true,
    arrows: false,
    autoplaySpeed: 2000,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 701,
        settings: {
          dots: false,
          arrows: true,
        },
      },
    ],
  });
});

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
document.addEventListener("DOMContentLoaded", function () {
  // 슬릭때문에 재설정 up 버튼
  document.getElementById("topp").addEventListener("click", function (event) {
    event.preventDefault();

    // 부드러운 스크롤
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 드래곤시티 슬라이더 초기화
  const slickOptions = {
    dots: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 701,
        settings: {
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  // Slick Slider 초기화
  if (typeof $ !== "undefined" && $.fn && $.fn.slick) {
    $(".con_2").slick(slickOptions);
  }
});
