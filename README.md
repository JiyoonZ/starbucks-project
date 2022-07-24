# ☕️ Starbucks
## 1. 개발 환경

- **개발 기간** : 2021.11.27-2021.12.01 (6일간)
- **개발 인원** : 개인 클론 프로젝트
- **개발 환경** : 
  - `크롬`(플랫폼), 
  - **`Visual Studio Code`**(도구), 
  - **`node.js 환경`** 
  - **`JavsScript`**, **`HTML`**, **`CSS`** (언어)
  - **`git`**, **`netlify`**(관리 및 배포)
- **사용 기술 : `Swiper.js`** , **`gsap`**, **`lodash`**, **`scrolMagic`**, **`YouTube iframe API`**

## 2. 프로젝트 개요

- **구현 효과**
    - 프론트 엔드 개발자로서 기본이 되는 HTML, CSS, javascript를 익히기 위해.
    - 다양한 JS라이브러리와 api를 사용해보기, CSS로 레이아웃 잡는 것에 익숙해지기.

📍 기존 사이트 : [Starbucks](https://www.starbucks.co.kr/index.do)

## 3. 주요 기능

- 사용자의 반응에 맞는 인터랙티브한 ux/ui 제공(스크롤, 클릭)
- Youtube iframe API를 사용하여 스타벅스의 지향점을 영상물로 직접 보여줄 수 있다.

## 4. 결과

- 프로젝트 공부 내용링크 👉 [스타벅스 클론 프로젝트 공부내용](https://www.notion.so/22f0afcac834430cb9410e1b770b8982)
- Netlify 배포링크 :[Starbucks Coffee Korea](https://heuristic-payne-ad4f70.netlify.app/)

- **Main 프로모션 (Header와 section1)**
    - 새로고침과 동시에 요소를 차례대로 보이기 (**`gsap`** 사용)
    - 메인 메뉴와 검색창, 공지사항 수직슬라이드 (**`swiper.js`** 사용)
    


<img style="width: 900px" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/44eee281-a2a9-4f0d-85fa-b2f09f3d45f8/Animation-min.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T191346Z&X-Amz-Expires=86400&X-Amz-Signature=f8bc42dd7a4c3365977b4812653e3b584ebd94bd4a51fec01863695262580845&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Animation-min.gif%22&x-id=GetObject" />


- **토글 프로모션 (section2)**
    - 토글과 수평슬라이드 (**`swiper.js`** 사용)
    - 스크롤에 따른 배지 숨기기 ( **`lodash`** 와 **`gsap`** 사용)

<img style="width: 900px" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1a588b1-2004-4bc6-9270-846ea5607460/Animation2-min.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T191417Z&X-Amz-Expires=86400&X-Amz-Signature=70dd9cb81a68f987b2a6bf0fb9650d40783a6608a978355fea58dd9a34fcbe7b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Animation2-min.gif%22&x-id=GetObject" />

- **유투브 영상 (section3)**
    - Youtube iframe API 사용하여 배경에 동영상 자동재생

<img style="width: 900px" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/175a8f14-1649-445c-ab46-91eb08c7185b/ezgif-2-17873b7fe9.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T191446Z&X-Amz-Expires=86400&X-Amz-Signature=061f916cebd8143abeefece604bd77c951f29e4126e23c26adaba3c39636a829&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22ezgif-2-17873b7fe9.gif%22&x-id=GetObject"/>

- **시즌메뉴, 리저브커피, 메뉴보기 (section4,5,6)**
    - 스크롤 위치에 따라 요소 나타내기 (**`ScrollMagic`** 사용)

<img style="width: 900px" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ebc00c00-a617-4fcf-b27b-f28b663aaff3/Animation4-min.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T191505Z&X-Amz-Expires=86400&X-Amz-Signature=5f6449d4907180b840a80036cb72c7231e67f1b4755ef2a9f090d94c52633e3b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Animation4-min.gif%22&x-id=GetObject" />

- **매장찾기와 FOOTER (section7, footer)**
    - transform, transition을 활용하여 3D 애니메이션 구현
    - 스크롤 위치에 따라 요소 나타내기
    - footer부분   rewards 슬라이드 효과 사용하기 (**`swiper.js`**)

<img style="width: 900px" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/278aec52-fcee-4697-a124-1b19778a29cc/Animation5-min.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T191524Z&X-Amz-Expires=86400&X-Amz-Signature=60d7b7e1c5cb0dda92c53a4f789c9a177f4645932d20bca13037e3ccf9ac2f96&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Animation5-min.gif%22&x-id=GetObject"/>
