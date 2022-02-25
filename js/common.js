// header 검색기능 
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


// 올해 년도를 출력하는 함수
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();