const hamburger = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header__nav");

  hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-open");
  nav.classList.toggle("is-open");
  document.body.classList.toggle('is-open');
  console.log(nav.classList);
});


// メニューを押したら閉じる
const links = document.querySelectorAll(".header__nav a");


links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("is-open");
    nav.classList.remove("is-open");
    document.body.classList.remove("is-open");
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

  
});

// ヘッダーメニュがaboutまでスクロールしたら背景色を変える
const header = document.querySelector('.header');
const about = document.querySelector('#about');

window.addEventListener('scroll', () => {
    const aboutTop = about.getBoundingClientRect().top;
    const headerHeight = header.offsetHeight;

    if (aboutTop <= headerHeight) {
        header.classList.add('is-scrolled');
    } else {
        header.classList.remove('is-scrolled');
    }
});

// modal用
const worksItems = document.querySelectorAll(".works-item");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector(".modal__image");
const close = document.querySelector(".modal__close");
const modalBg = document.querySelector(".modal__bg");
const modalTitle = document.querySelector(".modal__title");
const modalText = document.querySelector(".modal__text");


worksItems.forEach(item => {

    item.addEventListener("click", () => {
      console.log("WORKSがクリックされました");
        const image = item.dataset.modalImage;
        const title = item.querySelector(".works-item__textarea h3").textContent;
        const text = item.querySelector(".works-item__text p").textContent;

        modalImage.src = image;
        modalImage.alt = text;

        modalTitle.textContent = title;
        modalText.textContent = text;

        modal.classList.add("is-open");
        document.body.classList.add("is-fixed");

    });

});

function closeModal(){
    modal.classList.remove("is-open");
    document.body.classList.remove("is-fixed");
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

// about専用のフワと表示させるアニメーション
const aboutFade = document.querySelector(".about__fade");
if(aboutFade){
  const observer = new IntersectionObserver(
    (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    observer.observe(aboutFade);
}

// Page Top
const pageTop = document.querySelector(".page-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    pageTop.classList.add("show");
  } else {
    pageTop.classList.remove("show");
  }
});