"use strict";
// 메인페이지 자바스크립트

const items = [
  {
    img: "../img/index/main_top1.png",
    category: "Say Daddy",
    title: "Dad’s Little Star",
    price: "Happy",
    bgColor: " #f0f0f0",
  },
  {
    img: "../img/index/main_top2.png",
    category: "for my family",
    title: "Hello, Future Star",
    price: "Enjoy",
    bgColor: " rgb(230 242 255)",
  },
];

const timeLine = gsap.timeline();

class Slider {
  constructor(items) {
    this.active = 0;
    this.items = items;
    document
      .querySelectorAll(".slider__btn-switch[data-type]")
      .forEach((btn) => {
        btn.onclick = () => this.handleClick(btn.dataset.type);
      });
  }

  renderItem() {
    const { img, category, title, price } = this.items[this.active];

    const sliderContent = `
      <img class="slider__img" src="${img}" alt="${title}" />
      <div class="slider__context flex-column">
        <h3 class="slider__category">${category}</h3>
        <strong class="slider__title">${title}</strong>
        <small class="slider__price">${price}</small>
      </div>
    `;
    const sliderIndex = `
      <span>${
        this.active < 10 ? "0" + (this.active + 1) : this.active + 1
      }</span>
      <span>${
        this.items.length < 10 ? "0" + this.items.length : this.items.length
      }</span>
    `;

    document.querySelector(".slider__content").innerHTML = sliderContent;
    document.querySelector(".slider__index").innerHTML = sliderIndex;
  }

  basicAimation(dir, delay) {
    timeLine.to(".slider", {
      delay,
      duration: 0.2,
      backgroundColor: `${items[this.active].bgColor}`,
    });
    timeLine.fromTo(
      ".slider__img",
      {
        x: 150 * dir,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
    timeLine.fromTo(
      ".slider__context *",
      {
        x: 50 * dir,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      },
      "<"
    );
  }

  handleClick(type) {
    const dir = type === "next" ? 1 : -1;
    timeLine.to(".slider__img", {
      x: -250 * dir,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",

      onComplete: () => {
        if (type === "next") {
          this.active = this.active === items.length - 1 ? 0 : this.active + 1;
        } else {
          this.active = this.active <= 0 ? items.length - 1 : this.active - 1;
        }

        this.renderItem();
        this.basicAimation(dir);
      },
    });
    timeLine.to(
      " .slider__context *",
      {
        x: -100 * dir,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.inOut",
      },
      "<"
    );
  }
}

const slider = new Slider(items);
slider.renderItem();
slider.basicAimation(1, 1);

//업버튼
document.addEventListener("DOMContentLoaded", function () {
  // 공통 up 버튼
  document.getElementById("top").addEventListener("click", function (event) {
    event.preventDefault();
    // 부드러운 스크롤
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 섹션 클릭 시 핸드폰 화면
  function setupBoxHover(boxSelector, stayToShow) {
    const box = document.querySelector(boxSelector);
    const stays = document.querySelectorAll(".stay, .stay1, .stay2, .stay3");

    box.addEventListener("mouseover", function () {
      stays.forEach((stay) => (stay.style.display = "none"));
      document.querySelector(stayToShow).style.display = "block";
    });

    box.addEventListener("mouseout", function () {
      stays.forEach((stay) => (stay.style.display = "none"));
      document.querySelector(".stay").style.display = "block";
    });
  }

  setupBoxHover(".box1", ".stay1");
  setupBoxHover(".box2", ".stay2");
  setupBoxHover(".box3", ".stay3");
});
