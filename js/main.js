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