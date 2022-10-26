import React, { useEffect } from "react";
import "./List.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getContent } from "../redux/modules/ContentSlice";
import styled from "styled-components";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Sample from "../elements/Sample";

const List = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.content.content);

  // console.log("콘텐츠", contents);

  useEffect(() => {
    dispatch(__getContent());
    // console.log(contents);
  }, []);

  return (
    <STList>
      <Navbar />
      <Header />
      <div className='list-container'>
        <h1>오늘의 만화영화 랭킹</h1>
        <div className='list-box'>
          <Sample />
          {contents.map((content) =>
            content !== undefined ? (
              <div className='list-card' key={content.id}>
                {/* <div className="listPic">{content.url}</div> */}
                <img
                  src={content.image}
                  alt='selected-img'
                  className='listPic'
                />
                <Link
                  to={`/post/${content.id}`}
                  key={content.id}
                  style={{ textDecoration: "none" }}
                >
                  <h2>{content.title}</h2>
                </Link>
                <div className='list-desc'>{content.body}</div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <Footer />
    </STList>
  );
};

export default List;

const STList = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;

  background-color: #f0d696;
`;
