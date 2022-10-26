import React, { useState } from "react";
import "./List.css";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar"
// import Header from "./Header";

const List = () => {
  const [like, setLike] = useState({
    count: 0,
    status: false,
  });
  //스토어에서 지금 누른 애를 관리하는게 좋음
  //또는 카드마다 컴포넌트를 따로 만들어준다.(재활용 컴포넌트)
  //컴포넌트를 Map으로 돌려주고 스테이츠는 각 컴포넌트에서만 적용되기 때문

  const likeHandler = (event) => {
    event.preventDefault();
    if (like.status === true) {
      setLike({
        status: !like.status,
        count: like.count - 1,
      });
      return;
    }
    setLike({
      status: !like.status,
      count: like.count + 1,
    });
    return;
  };
  // const content = useSelector((state) => state.content.content)

  return (
    <div className='list-container'>
      <h1>오늘의 만화영화 랭킹</h1>
      <div className='list-box'>
        <div className='list-card'>
          <div className='listPic-1' />
          {/* 좋아요 버튼 추가하고 기능구현 해야 함!! */}
          <Link to={"/detail"} style={{ textDecoration: "none" }}>
            <h2>짱구는 못말려</h2>
            <span onClick={likeHandler}>{like.count}좋아요❤️</span>
          </Link>
          <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
        </div>

        <div className='list-card'>
          <div className='listPic-2' />

          <Link to={"/detail"} style={{ textDecoration: "none" }}>
            <h2>명탐정 코난</h2>
            <span onClick={likeHandler}>{like.count}좋아요❤️</span>
          </Link>
          <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
        </div>
        {/* 좋아요 버튼 추가하고 기능구현 해야 함!! */}
        <div className='list-card'>
          <div className='listPic-3' />

          <Link to={"/detail"} style={{ textDecoration: "none" }}>
            <h2>디지몬 어드벤처</h2>
          </Link>
          <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
        </div>

        <div className='list-card'>
          <div className='listPic-4' />
          {/* 좋아요 버튼 추가하고 기능구현 해야 함!! */}
          <Link to={"/detail"} style={{ textDecoration: "none" }}>
            <h2>꼬마 마법사 레미</h2>
          </Link>
          <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
        </div>

        <div className='list-card'>
          <div className='listPic-5' />
          {/* 좋아요 버튼 추가하고 기능구현 해야 함!! */}
          <Link to={"/detail"} style={{ textDecoration: "none" }}>
            <h2>슬램덩크</h2>
          </Link>
          <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
        </div>

        <div className='list-card'>
          <div className='listPic-6' />
          {/* 좋아요 버튼 추가하고 기능구현 해야 함!! */}
          <Link to={"/detail"} style={{ textDecoration: "none" }}>
            <h2>달의 요정 세일러문</h2>
          </Link>
          <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
        </div>

        <div className='list-card'>
          <div className='listPic-7' />
          {/* 좋아요 버튼 추가하고 기능구현 해야 함!! */}
          <Link to={"/detail"} style={{ textDecoration: "none" }}>
            <h2>포켓몬스터</h2>
          </Link>

          <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
        </div>

        <div className='list-card'>
          <div className='listPic-8' />
          {/* 좋아요 버튼 추가하고 기능구현 해야 함!! */}
          <Link to={"/detail"} style={{ textDecoration: "none" }}>
            <h2>검정고무신</h2>
          </Link>
          <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
        </div>
      </div>
    </div>
  );
};

export default List;
