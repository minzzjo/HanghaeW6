import React from "react";
import "./Sample.css";
import { Link } from "react-router-dom";

const Sample = () => {
  return (
    <div className='list-box'>
      <div className='list-card'>
        <div className='listPic-1' />
        <Link to={"/post/1"} style={{ textDecoration: "none" }}>
          <h2>짱구는 못말려</h2>
        </Link>
        <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
      </div>
      <div className='list-card'>
        <div className='listPic-2' />

        <Link to={"/post/2"} style={{ textDecoration: "none" }}>
          <h2>명탐정 코난</h2>
        </Link>
        <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
      </div>
      <div className='list-card'>
        <div className='listPic-3' />

        <Link to={"/post/1"} style={{ textDecoration: "none" }}>
          <h2>디지몬 어드벤처</h2>
        </Link>
        <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
      </div>
      <div className='list-card'>
        <div className='listPic-4' />
        <Link to={"/post/1"} style={{ textDecoration: "none" }}>
          <h2>꼬마 마법사 레미</h2>
        </Link>
        <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
      </div>
      {
        <div className='list-card'>
          <div className='listPic-5' />
          <Link to={"/post/1"} style={{ textDecoration: "none" }}>
            <h2>슬램덩크</h2>
          </Link>
          <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
        </div>
      }
      {
        <div className='list-card'>
          <div className='listPic-6' />
          <Link to={"/post/1"} style={{ textDecoration: "none" }}>
            <h2>달의 요정 세일러문</h2>
          </Link>
          <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
        </div>
      }
      {
        <div className='list-card'>
          <div className='listPic-7' />
          <Link to={"/post/1"} style={{ textDecoration: "none" }}>
            <h2>포켓몬스터</h2>
          </Link>
          <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
        </div>
      }
      {
        <div className='list-card'>
          <div className='listPic-8' />
          <Link to={"/post/1"} style={{ textDecoration: "none" }}>
            <h2>검정고무신</h2>
          </Link>
          <div className='list-desc'>누구나 인정하는 진정한 띵작!</div>
        </div>
      }
    </div>
  );
};

export default Sample;
