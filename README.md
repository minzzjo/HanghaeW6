# 항해 6주차 팀과제 1 : React, Redux-Toolkit, Spring 등을 활용한 미니프로젝트 만들기


목차

## 프로젝트 소개
<img width="600" alt="스크린샷 2022-10-27 16 06 11" src="https://user-images.githubusercontent.com/86904667/198214534-3e3c77fc-d9fd-42e4-8f68-813dff3e4f74.png">

<p align="justify">
리액트 심화 및 리덕스 기본기를 바탕으로 한 미니프로젝트 만들기<br>
제한 및 공통 사항 : <br>
  <li> 컴포넌트 및 UI는 자유로 한다.</li>
  <li> ducks 패턴 활용한다.</li>
  <li> Redux 등 심화 과정에 필요한 자료를 활용한다.</li
  <li> 백엔드와의 협업 </li>
</p>

## 와이어프레임 

![스크린샷 2022-10-27 16 04 28](https://user-images.githubusercontent.com/86904667/198214202-2ec96347-23d3-4e3f-b8f1-aa1bb931a714.png)
![스크린샷 2022-10-27 16 05 44](https://user-images.githubusercontent.com/86904667/198214456-01e30725-2229-447f-80e9-01d0720f18bf.png)


## <a href="https://hanghae-w6.vercel.app/">버셀 배포 페이지</a>

<br>

## 기술 스택

HTML / CSS in JS / JavaScript / React / Redux / Redux Toolkit / git / gitHub / spring

<br>


## 구현 기능


### 기능 1 : react- router-dom 통한 페이지 별 관리<br>
Managing page by page through react-router-dom

- Home화면, 보고싶은 미디어 화면, 미디어 카드 확인, 상세페이지 등 react-router-dom으로 관리(url params)<br>
  Home Screen, Media Screen Want to See, Media Card Check, Detailed Page, etc. <br>
  react router-dom Management (via url parmarms)

- router에서 url 상세 관리<br>
  Manage details on the router

- navigate로 페이지 이동<br>
  Add the ability to move pages to Navigate

<br>

### 기능 2 : 미디어 카드 CRUD

- 게시물인 카드의 생성, 읽기, 수정, 삭제 기능 모두 구현<br>
  Implement the features to create, read, modify, and delete cards that are posts

- CRUD 모두 리덕스 툴킷 + thunk 활용(TodosSlice)<br>
  CRUD all leverages the redux toolkit + middleware(Thunk) (ContentSlice)

- CRUD 모두 미들웨어 이용한 action Dispatch -> 리듀서 과정 비동기 처리<br>
  CRUD all uses middleware to process action Dispatch -> reducer asynchronously

- 토글 기능 활용한 수정 창 숨기기<br>
  Hide the correction window using the Toggle function


<br>

### 기능 3 : 댓글 CRUD

- 게시물의 댓글의 생성, 읽기, 수정, 삭제 기능 모두 구현<br>
- Implement the feature to create, read, modify, and delete comments in a post


- CRUD 모두 리덕스 툴킷 + thunk 활용(commentsSlice)<br>
  CRUD all leverages the redundancy toolkit + thunk (commentsSlice)

- CRUD 모두 미들웨어 이용한 action Dispatch -> 리듀서 과정 비동기 처리<br>
  CRUD all uses middleware to process action Dispatch -> reducer asynchronously

- 댓글은 필터링 통해 부여해준 게시물과 연관된 id로 걸른 후모든 게시물에서 같은 댓글이 보이지 않게함<br>
  Make sure the comments don't show the same comments in all posts after walking to an ID associated with the posts you were given through filtering


- 수정은 토글 식으로 관리<br>
manage modify feature with togle type
<br>

<br>

## 컴포넌트와 나눈 이유
## The reason why we devided components

### Ducks 패턴 활용 통한 컴포넌트 나누기
### Sharing components using Ducks pattern

### 1. Components
- Comments.jsx : 댓글 관리<br>
  Comments.jsx: Comment management

- List.jsx : 게시물 랜딩<br>
  List.jsx: load to landed cards list

- Header.jsx & Layout.jsx : 홈페이지 전반적 레이아웃<br>
  Header.jsx & Layout.jsx: The overall layout of the website


<br>

### 2. Pages
- Login.jsx : 회원 로그인<br>
  Login.jsx: Log in as a member

- Signup.jsx : 회원 가입<br>
  Signup.jsx: Sign up

- Home.jsx : 홈페이지<br>
  Home.jsx: Homepage

- Detail.jsx : 카드별 상세정보<br>
  Detail.jsx: Details of each card

- Addcard.jsx : 카드 추가 페이지<br>
Addcard.jsx: Add a card


<br>

### 3. redux & Router & hooks & element
- modules > todosSlice.js : todo의 Reducer 관리
- modules > CommentsSlice.js : comment의 Reducer 관리
- shared > Router.jsx : react-router-dom 방식에 따라 Home, 상세페이지 이동 위한 설정으로 패턴 관리
- hooks > useInput.js : useInput이라는 커스텀훅을 이용한 todoList input하기.
- element > button.js : 버튼 일원화 관리

<br>


<br>

<p align="justify">

</p>

<br>

## 라이센스

Copyright 2022. hang-hae99 9th W5 team 3. all rights reserved.
