const searchEl = document.querySelector('.search');
// document 는 html 자체라고 생각하기 
const searchInputEl = searchEl.querySelector('input')
 //위에찾은 search에서 input찾기

 searchEl.addEventListener('click', function(){
    //로직 -> search요소를 클릭하면 input요소 강제 focus
    searchInputEl.focus();
 });

 //포커스할떄
 searchInputEl.addEventListener('focus', function() {
   searchEl.classList.add('focused');
   //input요소가 focus가 되면 focused라는 클래스를 추가하겠다.
   searchInputEl.setAttribute('placeholder', '통합검색');
   //Attribute은 html속성
 });

 //포커스 풀릴때
 searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  //Attribute은 html속성
});

// 스크롤시 badge사라지게 하기
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  //현재 스크롤의 좌표값
  console.log(window.scrollY) 
  if(window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션{객체데이터~});
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));



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
  // autoplay: true,
  loop: true
});

//사진 수평 슬라이드
new Swiper('.promotion .swiper', {
  //horizontal 이 기본값
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop:true, //이걸해야 마지막이후에 첫번째슬라이드가 올수있음
  // autoplay: {
  //   delay: 5000
  // }
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








