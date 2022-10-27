// "localhost:3000/post/1"
import React, { useEffect, useState } from "react";
import "./Comment.css";
import {
  __getComment,
  __addComment,
  __deleteComment,
  __editComment,
} from "../redux/modules/CommentSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Comment = () => {
  // 여기는 댓글부분
  const dispatch = useDispatch();
  const { id } = useParams();

  const comments = useSelector((state) => state.comment.comment);
  const [body, setBody] = useState("");
  const [edit, setEdit] = useState("");
  const [target, setTarget] = useState("");

  const onChangeComment = () => {
    // dispatch(__addComment({ id: comments.length + 1, body }));
  };

  const onAddComment = () => {
    if (body !== "") {
      onChangeComment();
      setBody("");
    }
  };

  useEffect(() => {
    dispatch(__getComment());
  }, [dispatch]);

  const btnCommetCancle = () => {
    setEdit(false);
  };

  const toggleEditComment = () => {
    setEdit(!edit);
  };

  const onCommentUpdate = (id) => {
    // dispatch(__editComment({ id: id, target: target }));
    setEdit(false);
  };

  const onDeleteComment = (payload) => {
    dispatch(__deleteComment(payload));
  };

  return (
    <div>
      <div className='detail-comment'>
        <input
          type='text'
          name='body'
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          placeholder='댓글을 입력하세요(100자 이내)'
          maxLength={100}
        />
        <button
          onClick={() => {
            onAddComment();
          }}
        >
          완료
        </button>
      </div>
      <div className='detail-commentBox' key={comments.id}>
        {comments
          .filter((comment) => comment.id === Number(id))
          .map((comment) => {
            return (
              <div className='comment-edit' key={comment.id}>
                {/* 내 이름은 코난, 탐정이죠 */}
                <div className='detailComment-line'>{comment.body}</div>
                <div>
                  <div className='comment-btn' key={comments.id}>
                    {edit ? (
                      <>
                        <input
                          type='text'
                          value={target}
                          onChange={({ target }) => setTarget(target.value)}
                        />
                        <div className='detail-commentBox-btn'>
                          <button onClick={onCommentUpdate(comment.id)}>
                            수정완료
                          </button>
                          <button onClick={() => btnCommetCancle()}>
                            수정취소
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* 내 이름은 코난, 탐정이죠
                        <div className="detailComment-line">{comment.body}</div> */}
                        <button
                          onClick={() => {
                            toggleEditComment();
                          }}
                          className='detail-commentBox-btn'
                        >
                          수정
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => onDeleteComment(comment.id)}
                      className='delete-btn'
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comment;
