$(document).ready(function () {
  $(".baby_wrap").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    speed: 1500,
    draggable: true,
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 갯수
  });
});
