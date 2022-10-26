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

const Detail = () => {
  const dispatch = useDispatch();

  const contents = useSelector((state) => state.content.content);

  const { id } = useParams();

  const [edit, setEdit] = useState(false);
  const [target, setTarget] = useState();

  useEffect(() => {
    dispatch(__getComment());
  }, [dispatch]);

  const btnCancle = () => {
    setEdit(false);
  };

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const onContentUpdate = (id) => {
    dispatch(__editContent({ id: id, target: target }));
    setEdit(false);
  };

  const onDeleteContent = (payload) => {
    dispatch(__deleteContent(payload));
  };

  return (
    <div className='detail-container'>
      <Navbar />
      <div className='detail-title' key={contents.id}>
        {contents
          .filter((content) => content.id === Number(id))
          .map((content) => (
            <div key={content.id}>
              <h1 className='detail-h1'>{content.title}</h1>
              <div>
                <button
                  className='detailTitle-btn'
                  onClick={() => onDeleteContent(content.id)}
                >
                  삭제
                </button>
              </div>
              <div className='detail-form'>
                {/* <div className="detailPic" /> */}
                <div key={content.id}>
                  <img
                    src={content.url}
                    alt='selected-img'
                    className='detailPic'
                  />
                  <h3 className='detail-body'>{content.body}</h3>
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
                        <button
                          onClick={() => {
                            toggleEdit();
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
