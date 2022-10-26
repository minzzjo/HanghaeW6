import React, { useState } from "react";
import "./AddCard.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { __addContent } from "../redux/modules/ContentSlice";

const AddCard = () => {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const content = useSelector((state) => state.content.content);

  const onChangeContent = () => {
    dispatch(
      __addContent({ id: content.length + 1, url, category, title, body })
    );
  };

  const onAddContent = () => {
    if (url !== "" && title !== "" && body !== "") {
      onChangeContent();
      setUrl("");
      setCategory("");
      setTitle("");
      setBody("");
    }
  };

  return (
    <div className="addCard-container">
      <Navbar />
      <h1>새로운 글 작성하기</h1>
      <div className="addCard-form">
        <form>
          <div className="addCard-img">
            <input
              type="url"
              name="url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              placeholder="이미지 주소를 입력하세요"
            />{" "}
            <input type="submit" />
          </div>
        </form>

        <div className="addCard-title">
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value={"category"}>카테고리 선택</option>
            <option name="toon" value={category}>
              만화방
            </option>
            <option name="movie" value={category}>
              비디오방
            </option>
          </select>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            name="title"
            value={title}
            placeholder="제목 입력(15자 이내)"
            maxLength={15}
          />
        </div>
        {/* djksdpgit  */}

        <div className="addCard-content">
          <textarea
            onChange={(e) => {
              setBody(e.target.value);
            }}
            name="body"
            value={body}
            maxLength={200}
            placeholder="내용을 입력해주세요(200자 이내)"
          />
        </div>
        <div className="addCard-btn-box">
          <Link to={"/list"}>
            <button
              className="addCard-btn"
              onClick={() => {
                onAddContent();
                navigate("/list");
              }}
            >
              작성완료
            </button>
          </Link>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="addCard-btn"
          >
            취소하기
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddCard;
