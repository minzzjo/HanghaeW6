// "localhost:3000/post/1"
import React, { useState } from "react";
import "./Detail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __deleteContent, __editContent } from "../redux/modules/ContentSlice";
import Comment from "../components/Comment";
import { useEffect } from "react";
import { __getComment } from "../redux/modules/CommentSlice";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contents = useSelector((state) => state.content.content);

  const { id } = useParams();

  const [updateContent, setUpdateContent] = useState();
  const [edit, setEdit] = useState(false);
  const [target, setTarget] = useState();
  const [revise, setRevise] = useState();

  useEffect(() => {
    dispatch(__getComment());
  }, []);

  const btnCancle = () => {
    setEdit(false);
  };

  // useEffect(() => {
  //   setUpdateContent(contents.filter((id === )=>{

  //   }));
  // }, [contents]);

  ///post/{postId}

  // {
  // ”title” : “제목2”,
  // ”category” : “toon” or “movie”
  // ”contents” : “내용2”
  // ”image” : “이미지URL2”
  // }

  // header : {
  //   Access_Token : “dasas”
  // }

  const toggleEdit = () => {
    // const obj = {
    //   ...contents,
    //   content: updateContent,
    // };

    dispatch(__editContent({ revise, id }));
    console.log(id);
    // navigate("/list");
  };

  const onContentUpdate = (id) => {
    // dispatch(__editContent({ id: id, target: target }));
    setEdit(false);
  };

  const onDeleteContent = (payload) => {
    console.log("삭제용", payload, "삭제용");
    dispatch(__deleteContent(payload));
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setRevise({ ...revise, [name]: value });
  };

  return (
    <div className='detail-container'>
      <Navbar />
      <div className='detail-title' key={contents.postId}>
        {contents
          .filter((content) => content.postId === Number(id))
          .map((content) => (
            <div key={content.postId}>
              <h1 className='detail-h1'>{content.title}</h1>
              <div>
                <button
                  className='detailTitle-btn'
                  onClick={() => {
                    window.location.replace("/list");
                    onDeleteContent(content.postId);
                  }}
                >
                  삭제
                </button>
              </div>
              <div className='detail-form'>
                {/* <div className="detailPic" /> */}
                <div key={content.id}>
                  <img
                    src={content.image}
                    alt='selected-img'
                    className='detailPic'
                  />
                  <h3 className='detail-body'>{content.content}</h3>
                </div>
              </div>

              <div className='content-edit'>
                <div key={contents.id}>
                  {edit ? (
                    <>
                      <input
                        type='text'
                        value={target}
                        onChange={({ target }) => setTarget(target.value)}
                      />
                      <div className='detailEdit-btn'>
                        <button
                          onClick={onContentUpdate(content.id)}
                          className='detailBody-btn'
                        >
                          수정완료
                        </button>
                        <button
                          onClick={() => btnCancle()}
                          className='detailBody-btn'
                        >
                          수정취소
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='detailEdit-btn'>
                        <input
                          type='text'
                          name='content'
                          placeholder='수정하실 내용을 입력하세요'
                          onChange={onChangeHandler}
                        ></input>
                        <button
                          onClick={() => {
                            toggleEdit();
                            setUpdateContent();
                            window.location.replace("/list");
                          }}
                          className='detailBody-btn'
                        >
                          수정
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
      <Comment />
      <Footer />
    </div>
  );
};

export default Detail;
