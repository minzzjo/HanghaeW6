# 항해 5주차 팀과제 1 : Redux, Toolkit 등 활용한 Todo List + 게시판 만들기

목차

## 프로젝트 소개

<p align="justify">
리액트 심화 및 리덕스 기본기를 바탕으로 한 추억의 비디오방 만들기<br>
제한 및 공통 사항 : <br>
  <li> 컴포넌트 및 UI는 자유로 한다.</li>
  <li> ducks 패턴 활용한다.</li>
  <li> Redux 등 심화 과정에 필요한 자료를 활용한다.</li>
    <li> 회원가입 및 로그인/로그아웃을 구현한다.</li>
</p>

<br>

## 기술 스택

HTML / CSS in JS / JavaScript / React / Redux / Redux Toolkit / git / gitHub / CSS / Spring / AWS

<br>

## 구현 필수 요소 및 역할 분담

- **동적 라우팅을 사용**하세요.

- **Form에 유효성 검증 기능을 적용**하세요. \*
  - ex: 제목을 10글자 이상 기입하지 않으면, 글을 추가할 수 없도록 제한 → `Alert` 으로 안내
  - ex: Form에서 모든 input에 값을 입력하지 않으면, 버튼이 비활성화
- Apply the validation function to \*_Form_. _Verification of validity, means the following examples. _
  EX: If you don't write more than 10 characters of a title, you can't add a text → Guide to Allert
  EX: If you don't input values for all inputs in Form, the button is disabled

- `development` 환경에서만 `redux devtool`이 활성화 되도록 처리합니다.
- Process the Redux devtool to be activated only in the Development environment.

- 배포된 결과물에서는 `console.log()` 가 보이지 않도록 처리합니다.
- Handle the distributed results so that the 'console.log ()' is not visible.

- `.env` 를 이용해서 API 서버의 URL 코드상에서 숨기도록 처리합니다.
- .env is used to hide it on the URL code on the API server.

## 구현 기능

### 기능 1 : react- router-dom 통한 페이지 별 관리

### Feature 1 : Page-by-page management through react- router-dom

- home화면, 할일 기록하기 화면, TodoList 확인, 상세페이지 등 react-router-dom으로 관리(url params)
- home screen, to-do recording screen, TodoList check, detailed page, etc. managed by react-router-dom (url params)

- router에서 url 상세 관리
- Detailed management of url in router

- navigate로 페이지 이동
- Move to navigate

<br>

### 기능 2 : CRUD

### Feature 2 : CRUD

- 게시물인 생성, 읽기, 수정, 삭제 기능 모두 구현
- Create, read, modify, and delete posts

- 댓글 기능 구현
- Implement comment feature

- CRUD 모두 리덕스 툴킷 + thunk 활용(contentSlice, commentSlice)
- CRUD all leverages the redundancy toolkit + thunk (contentSlice, commentSlice)

- CRUD 모두 미들웨어 이용한 action Dispatch -> 리듀서 과정 비동기 처리
- CRUD all uses middleware to process action Dispatch -> producers asynchronously

- 토글 기능 활용한 수정 창 숨기기
- Hide the correction window using the Toggle function

<br>

### 기능 3 : 댓글 CRUD

### Feature 3 : Comment CRUD

- 게시물의 댓글의 생성, 읽기, 수정, 삭제 기능 모두 구현
- Implement the ability to create, read, modify, and delete comments in a post

- CRUD 모두 리덕스 툴킷 + thunk 활용(commentsSlice)
- CRUD all leverages the redundancy toolkit + thunk (commentsSlice)

- CRUD 모두 미들웨어 이용한 action Dispatch -> 리듀서 과정 비동기 처리
- CRUD all uses middleware to process action Dispatch -> producers asynchronously

- 댓글은 필터링 통해 부여해준 게시물과 연관된 id로 걸른 후모든 게시물에서 같은 댓글이 보이지 않게함
- Make sure the comments don't show the same comments in all posts after walking to an ID associated with the posts you were given through filtering

- 수정은 토글 식으로 관리
- Fix it in a togle way

<br>

### 기능 4 : 필수 구현 사항

### Essential implementation

- 동적 라우팅을 사용 (공통) -> react-router-dom 활용
- - Use dynamic routing (common) -> use react-router-dom

- Form에 유효성 검증 기능을 적용 -> 게시물 Todo 입력 시 전체 입력이 안 되면 동작이 안 되게 alert 동작
- Apply verification function to Form -> alert operation so that it doesn't work when you enter the post Todo

- `development` 환경에서만 `redux devtool`이 활성화 -> 배포 시 적용
- - Redux devtool is activated only in the Devlement environment -> applied when deployed

- 배포된 결과물에서는 `console.log()` 가 보이지 않도록 처리 (공통) -> 코드 확인 완료
- Process (common) -> Check the code so that 'console.log' is not visible in the distributed result

- `.env` 를 이용해서 API 서버의 URL 코드상에서 숨기도록 처리 -> env 로 URL 코드상에서 모두 가림
- Use '.env' to hide it from the URL code on the API server -- env to cover it all up on the URL code
  <br>

## 컴포넌트와 나눈 이유

## The reason why we divide components separately

### Ducks 패턴 활용 통한 컴포넌트 나누기

### Sharing components using Ducks pattern

### 1. Components

- List.jsx : 게시물 업로드 관리
- Navbar.jsx : 홈화면 이동 및 비디오방, 만화방별 이미지 렌더 방식 차이를 둠
- Header.jsx & Layout.jsx : 이미지 배너 및 홈페이지 전반적 레이아웃
- Footer.jsx : 프로젝트 시간 외에 옵션으로 개발인원 / 깃 정보 표시
- List.jsx: Managing post uploads
- Navbar.jsx: The difference between home screen movement and video room and image render by comic book store
- Header.jsx & Layout.jsx: Image banners and overall layout of homepages
- Footer.jsx: Display developer/git information as an option outside of project time
  <br>

### 2. Pages

- Login.jsx : 로그인 시, 사용자 정보를 확인하고 토큰 발급 및 쿠키에 저장
- SignUp.jsx : 정규식을 통한 회원가입 절차 및 계정을 백엔드에 저장
- Home.jsx : Landing Page
- AddCard.jsx : 게시물 추가 기능(유저의 img를 Url로 받는 방식을 채택 및 게시글 상세 기록기능 구현)
- Detail.jsx : 게시물 상세보기 기능 및 댓글 기능 추가

<br>

### 3. redux & Router & hooks & element

- modules > CommentSlice.js : 댓글 Reducer 관리
- modules > ContentSlice.js : 게시글 Reducer 관리
- shared > Router.jsx : react-router-dom 방식에 따라 Home, 상세페이지 이동 위한 설정으로 패턴 관리
- modules > CommentSlice.js: Managing comments Reducer
- modules > ContentSlice.js: Managing posts Reducer
- shared > Router.jsx: Home according to react-router-dom method, pattern management with settings for moving detailed pages
  <br>

<br>

<p align="justify">

</p>

<br>

## 라이센스

Copyright 2022. hang-hae99 9th W5 team 3. all rights reserved.
