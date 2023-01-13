const badgeEl =  document.querySelector("header .badges");

const toTopEl = document.querySelector("#to-top");

//lodash 라이러리 활용 _.throttle(func, time)
// Gsap 라이브러리를 활용하여 간단한 애니메이션 구현
window.addEventListener('scroll', _.throttle(() => {
    if(window.scrollY > 500) {
        // 배지 숨기기
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });

        gsap.to(toTopEl, 0.2, {
            x: 0,
        });
    } else {
      // 배지 보이기
        gsap.to(badgeEl, 0.6, {
          opacity: 1,
          display: 'block'
        });

        gsap.to(toTopEl, .2, {
            x: 100
        });
    }

}, 300));

toTopEl.addEventListener('click', () => {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});


const fadeElements = document.querySelectorAll(".visual .fade-in");
fadeElements.forEach((fadeEl, idx) => {
    gsap.to(fadeEl, 1, {
        delay: .7 * (idx + 1),
        opacity:1,

    })
})

new Swiper(
  ".notice-line .swiper-container",
  {
    direction: "vertical",
    autoplay: true,
    loop: true,
  }
);

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //     delay: 5000,
  // }
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: ".awards .swiper-prev",
        nextEl: ".awards .swiper-next"
    }
});


const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", () => {
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion)
    {
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


const floatingObject = (selector, delay, size) => {
    gsap.to(
        selector,
        random(1.5, 2.5),
        {
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay),
        }
    );
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy")

spyEls.forEach((spyEl) => {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8,
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
})


