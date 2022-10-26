import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getCookie, delCookie } from "../cookie/cookie";

const Navbar = () => {
  const navigate = useNavigate();
  // const [loginStatus, setLoginStatus] = useState(false);
  let nickname = getCookie("nickname");

  return (
    <div className='nav-container'>
      <img className='logo-img' alt='logo' src='img/ghost.png' />
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h3 className='nav-btn'>출발! 비디오 여행</h3>
      </Link>
      <Link to={"/list"} style={{ textDecoration: "none" }}>
        <h3 className='nav-btn'>비디오방</h3>
      </Link>
      <Link to={"/list"} style={{ textDecoration: "none" }}>
        <h3 className='nav-btn'>만화방</h3>
      </Link>
      <Link to={"/addcard"} style={{ textDecoration: "none" }}>
        <h3 className='nav-btn'>새글작성</h3>
      </Link>

      {getCookie("Access_Token") ? (
        <h3>
          <h3
            className='nav-btn'
            onClick={() => {
              delCookie("Access_Token");
              delCookie("nickname");
              navigate("/login");
            }}
            style={{ textDecoration: "none" }}
          >
            <span style={{ color: "#FA4C1A" }}>
              {/* `${getCookie.nickname}`님, 안녕하세요!` */}
              {nickname}님, 안녕하세요!
            </span>
            로그아웃
          </h3>
        </h3>
      ) : (
        <h3>
          <h3
            onClick={() => {
              navigate("/login");
            }}
            className='nav-btn'
            style={{ textDecoration: "none" }}
          >
            로그인
          </h3>
        </h3>
      )}
    </div>
  );
};

export default Navbar;

// #552CB7
