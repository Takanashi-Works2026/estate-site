const hamburger = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header__nav");

  hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-open");
  nav.classList.toggle("is-open");

  console.log(nav.classList);
});


// メニューを押したら閉じる
const links = document.querySelectorAll(".header__nav a");


links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("is-open");
    nav.classList.remove("is-open");
  });
});

// swiper
const swiper = new Swiper(".mv-swiper", {
  loop: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  speed: 1000,

  effect: "fade",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// modal用
const worksItems = document.querySelectorAll(".works-item");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector(".modal__image");
const close = document.querySelector(".modal__close");
const modalBg = document.querySelector(".modal__bg");


worksItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.dataset.image;

        modalImage.src = image;

        modal.classList.add("is-open");
        document.body.classList.add("is-fixed");

    });

});


function closeModal(){
    modal.classList.remove("is-open");
    document.body.classList.add("is-fixed");
}


close.addEventListener("click", closeModal);
modalBg.addEventListener("click", closeModal);

// ふわっと浮き出るアニメーション
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-show");
    }
  });
}, {
  threshold: 0.2
});

fadeElements.forEach((el) => observer.observe(el));

// Page Top
const pageTop = document.querySelector(".page-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    pageTop.classList.add("show");
  } else {
    pageTop.classList.remove("show");
  }
});