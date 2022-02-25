// 스크롤시 badge사라지게 하기
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  //현재 스크롤의 좌표값
  console.log(window.scrollY) 
  if(window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션{객체데이터~});
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼보이기
    gsap.to(toTopEl, .2, {
      x:0
    })
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼숨기기
    gsap.to(toTopEl, .2, {
      x: 100,
    });
  }
}, 300));
// 위로가기 버튼

toTopEl.addEventListener('click', function() {
  // 윈도우객체 -> 화면창을 의미 
  gsap.to(window, .7, {
    //추가로 설치한 cdn
    scrollTo: 0
  })
})


// 요소 순차적으로 나타나기 애니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach (function (fadeEl, index) {
   //gsap.to(요소, 지속시간, 옵션{객체데이터~});
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7, //0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});

// 공지사항 슬라이드
//Swiper
// new Swiper (선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

//사진 수평 슬라이드
new Swiper('.promotion .swiper', {
  //horizontal 이 기본값
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop:true, //이걸해야 마지막이후에 첫번째슬라이드가 올수있음
  autoplay: {
    delay: 5000
  },
  //페이징 과 화살표
  pagination : {
    el: '.promotion .swiper-pagination', // 페이지네이션 선택자
    clickable: true
  },
  navigation: {
      prevEl: '.promotion .swiper-prev',
      nextEl: '.promotion .swiper-next'
  }
});


// 리워드 슬라이드
//Swiper
// new Swiper (선택자, 옵션)
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, 
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
}
});

// 스타벅스 프로모션 토글
const promotionEl =document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  // isHidePromotion이 true값으로 
  if(isHidePromotion) {
    //숨김처리! 
    promotionEl.classList.add('hide');
  }else {
    //보임처리!
    promotionEl.classList.remove('hide');
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 떠다니는 스티커 
function floatingObject (selector, delay, size) {
  //gsap.to(요소, 지속시간, 옵션추가);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //무한반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)

  });

}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// FIND STORE 애니메이션
// scrollMagic 
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      // 감시하는 대상
      // 보여짐 여부를 감시할 요소를 지정 
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


