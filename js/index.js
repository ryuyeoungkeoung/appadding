// 공통 up버튼 제이쿼리
$(function () {
  $("#top").on("click", function (event) {
    // 먼저 기본 a태그의 이벤트 제거하기
    event.preventDefault();

    //부드러운 화면 스크롤
    //html태그를 선택하여 움직임을 준다. 이때 scrolltop의 위치를 0px위치로 1초 동안 옮긴다.
    $("html").animate({ scrollTop: 0 }, 0);
  });
  // 섹션 4클릭하면 핸드폰 화면 제이쿼리

  $(".box1").on({
    // 마우스를 올렸을때 실행
    mouseover: function () {
      $(".stay").hide();
      $(".stay1").css({ display: "block" });
      $(".stay2").css({ display: "none" });
      $(".stay3").css({ display: "none" });
    },
    mouseout: function () {
      $(".stay").show();
      $(".stay1").css({ display: "none" });
      $(".stay2").css({ display: "none" });
      $(".stay3").css({ display: "none" });
    },
  });
  $(".box2").on({
    // 마우스를 올렸을때 실행
    mouseover: function () {
      $(".stay").hide();
      $(".stay1").hide();
      $(".stay2").css({ display: "block" });
      $(".stay3").css({ display: "none" });
    },
    mouseout: function () {
      $(".stay").show();
      $(".stay1").hide();
      $(".stay2").css({ display: "none" });
      $(".stay3").css({ display: "none" });
    },
  });
  $(".box3").on({
    // 마우스를 올렸을때 실행
    mouseover: function () {
      $(".stay").hide();
      $(".stay1").hide();
      $(".stay2").hide();
      $(".stay3").css({ display: "block" });
    },
    mouseout: function () {
      $(".stay").show();
      $(".stay1").hide();
      $(".stay2").css({ display: "none" });
      $(".stay3").css({ display: "none" });
    },
  });
});
