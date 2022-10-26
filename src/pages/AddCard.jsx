import React, { useState } from "react";
import "./AddCard.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { __addContent, clearContent } from "../redux/modules/ContentSlice";
import { useEffect } from "react";

const AddCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSuccess = useSelector((state) => state.content.isSuccess);

  const [content, setContent] = useState({
    id: 0,
    url: "",
    category: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    if (!isSuccess) return;
    if (isSuccess) navigate("/detail");
    return () => dispatch(clearContent());
  }, [dispatch, isSuccess, navigate]);

  const onChangeContent = (event) => {
    const { name, value } = event.target;
    setContent({
      ...content,
      [name]: value,
    });
  };

  const [forIMG, setForIMG] = useState({
    address: "",
  });

  return (
    <div className='addCard-container'>
      <Navbar />
      <h1>새로운 글 작성하기</h1>
      <form
        className='addCard-form'
        onSubmit={(event) => {
          event.preventDefault();
          if (
            content.url.trim() === "" ||
            content.title.trim() === "" ||
            content.body.trim() === ""
          ) {
            // return alert("모든 항목을 입력해주세요.");
          }
          dispatch(__addContent(content));
          console.log("add-content", __addContent(content));
          setContent({ url: "", category: "", title: "", body: "" });
        }}
      >
        <div className='addCard-img'>
          <input
            type='text'
            name='url'
            value={content.url}
            onChange={onChangeContent}
            placeholder='이미지 주소를 입력하세요'
          />
          <img src={content.url}></img>
        </div>

        <div className='addCard-title'>
          <select onChange={onChangeContent}>
            <option value={""}>카테고리 선택</option>
            <option name='toon' value={content.category}>
              만화방
            </option>
            <option name='movie' value={content.category}>
              비디오방
            </option>
          </select>
          <input
            type='text'
            onChange={onChangeContent}
            name='title'
            value={content.title}
            placeholder='제목 입력(15자 이내)'
            maxLength={15}
          />
        </div>

        <div className='addCard-content'>
          <textarea
            onChange={onChangeContent}
            name='body'
            value={content.body}
            maxLength={200}
            placeholder='내용을 입력해주세요(200자 이내)'
          />
        </div>
        <div className='addCard-btn-box'>
          <button type='submit' className='addCard-btn'>
            작성완료
          </button>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className='addCard-btn'
          >
            취소하기
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default AddCard;
