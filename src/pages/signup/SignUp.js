import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  StLoginDivFull,
  StLoginDivBox,
  StCatchLogo,
  StInput,
  StTitle,
  STHeaderTitle,
} from "../login/Login.styled";
import { StSignUpForm, StSignUpDiv } from "./SignUp.styled";
// import Button from "../../components/button/Button";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  // const userRef = useRef();
  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // const [email, setEmail] = useState("");
  const [nickname, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //오류메시지 상태저장
  const [nickNameMessage, setNickNameMessage] = useState("");
  // const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  //유효성 검사
  const [isNickName, setIsNickName] = useState(false);
  // const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // handler 함수들
  // const EmailHandler = (event) => {
  //   const emailRegex =
  //     /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  //   const emailCurrent = event.target.value;
  //   setEmail(emailCurrent);

  //   if (!emailRegex.test(emailCurrent)) {
  //     setEmailMessage("이메일 형식을 확인해주세요");
  //     setIsEmail(false);
  //   } else {
  //     setEmailMessage("올바른 이메일 형식이에요 :)");
  //     setIsEmail(true);
  //   }
  // };

  const NickNameHandler = (event) => {
    setNickName(event.currentTarget.value);
    if (event.target.value.length < 6 || event.target.value.length >= 20) {
      setNickNameMessage("6글자 이상 20글자 이하로 입력해주세요");
      setIsNickName(false);
    } else {
      setNickNameMessage("올바른 이름 형식입니다 :)");
      setIsNickName(true);
    }
  };

  const PasswordHandler = (event) => {
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordCurrent = event.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "최소 8 자, 하나 이상의 대문자, 하나의 소문자, 하나의 숫자 및 하나의 특수 문자를 입력하여 주십시오"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호에요 : )");
      setIsPassword(true);
    }
  };

  const ReEnterPasswordHandler = (event) => {
    const passwordConfirmCurrent = event.target.value;
    setPasswordConfirm(passwordConfirmCurrent);

    if (password === passwordConfirmCurrent) {
      setPasswordConfirmMessage("비밀번호를 똑같이 입력했어요 : )");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 일치하지 않아요");
      setIsPasswordConfirm(false);
    }
  };

  const SubmitHandler = async (event) => {
    if (
      nickname.length < 6 ||
      password !== passwordConfirm ||
      password.length < 8
    ) {
      return alert("모든 항목을 충족하여 주십시오.");
    }

    event.preventDefault();
    const obj = {
      loginId: nickname,
      username: nickname,
      password: password,
    };
    console.log("회원가입 요청 전, 데이터 확인", obj);
    await axios
      .post("http://43.201.61.41/signup", {
        loginId: nickname,
        password: password,
        username: nickname,
      })
      .then((res) => {
        if (res.data.ok === true) {
          alert("회원가입을 축하드립니다^^");
          navigate("/login");
        } else {
          alert("회원가입을 실패하였습니다");
        }
      })
      .catch((error) => {
        alert("Error", error.message);
      });
  };

  // const emailCheck = () => {
  //   axios
  //     .get("http://43.201.78.138:8080/api/member/signup", {
  //       params: { email: email },
  //     })
  //     .then((res) => {
  //       if (res.data.success === true) {
  //         alert(res.data.data);
  //       } else alert(res.data.error.message);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  const nickNameCheck = async () => {
    console.log(nickname);
    await axios
      .post("http://43.201.61.41/signup/overlap", {
        loginId: nickname,
      })
      .then((res) => {
        if (res.data.ok === true) {
          alert(res.data.message);
        } else alert(res.data.error.message);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <>
      <StCatchLogo
        onClick={() => {
          navigate("/");
        }}
      />
      <StLoginDivFull>
        <StLoginDivBox>
          <STHeaderTitle>출발! 비디오 여행</STHeaderTitle>
          <StTitle>회원가입</StTitle>
          <StSignUpForm onSubmit={SubmitHandler}>
            <StSignUpDiv>
              {/* <div className='signUpItem'>
                <label style={{ color: "white" }}>E-mail</label>
                <div style={{ display: "flex" }}>
                  <StInput
                    placeholder='email을 입력해주세요'
                    type='email'
                    ref={userRef}
                    Value={email}
                    onChange={EmailHandler}
                  />
                  <button
                    type='button'
                    onClick={emailCheck}
                    style={{
                      width: "80px",
                      hegiht: "10px",
                      position: "absolute",
                      borderRadius: "0 10px 10px 0",
                      border: "solid black",
                      borderWidth: "2px 4px 3.5px 5px",
                      marginLeft: "184px",
                      marginTop: "3.4px",
                      fontSize: "15px",
                      fontFamily: "Jua, sans-serif",
                    }}
                  >
                    중복확인
                  </button>
                </div>
                {email.length > 0 && (
                  <span className={`message ${isEmail ? "success" : "error"}`}>
                    {emailMessage}
                  </span>
                )}
              </div> */}

              <div className='signUpItem'>
                <label style={{ color: "white" }}>Username</label>
                <div style={{ display: "flex" }}>
                  <StInput
                    placeholder='6~20글자'
                    type='text'
                    value={nickname}
                    onChange={NickNameHandler}
                  />
                  <button
                    type='button'
                    onClick={nickNameCheck}
                    style={{
                      width: "80px",
                      hegiht: "10px",
                      position: "absolute",
                      borderRadius: "0 10px 10px 0",
                      border: "solid black",
                      borderWidth: "2px 4px 3.5px 5px",
                      marginLeft: "184px",
                      marginTop: "3.5px",
                      fontSize: "15px",
                      fontFamily: "Jua, sans-serif",
                    }}
                  >
                    중복확인
                  </button>
                </div>
                {nickname.length > 0 && (
                  <span
                    style={{ color: "red" }}
                    className={`message ${isNickName ? "success" : "error"}`}
                  >
                    {nickNameMessage}
                  </span>
                )}
              </div>

              <div className='signUpItem'>
                <label style={{ color: "white" }} className='idPwBtn'>
                  Password
                </label>
                <StInput
                  placeholder='하나 이상의 대문자, 하나의 소문자, 하나의 숫자 및 하나의 특수 문자'
                  type='password'
                  value={password}
                  onChange={PasswordHandler}
                />
                {password.length > 0 && (
                  <span
                    style={{ color: "red" }}
                    className={`message ${isPassword ? "success" : "error"}`}
                  >
                    {passwordMessage}
                  </span>
                )}
              </div>

              <div className='signUpItem'>
                <label style={{ color: "white" }} className='idPwBtn'>
                  Re-enter Password
                </label>
                <StInput
                  style={{ marginBottom: "0px" }}
                  placeholder='비밀번호 확인'
                  type='password'
                  value={passwordConfirm}
                  onChange={ReEnterPasswordHandler}
                />
                {passwordConfirm.length > 0 && (
                  <span
                    style={{ color: "red" }}
                    className={`message ${
                      isPasswordConfirm ? "success" : "error"
                    }`}
                  >
                    {passwordConfirmMessage}
                  </span>
                )}
              </div>
            </StSignUpDiv>

            <div style={{ marginTop: "10px", width: "264px" }}>
              <button
                id='signUpBtn'
                style={{
                  marginRight: "11px",
                  width: "120px",
                  height: "60px",
                  border: "6px solid black",
                  borderRadius: "14px",
                }}
                type='submit'
              >
                SIGN UP
              </button>
              <button
                id='logInBtn'
                onClick={() => navigate("/login")}
                style={{
                  marginLeft: "11px",
                  height: "60px",
                  width: "120px",
                  border: "6px solid black",
                  borderRadius: "14px",
                }}
                type='button'
              >
                LOG IN
              </button>
            </div>

            {/* <div style={{ marginTop: '20px', width: '264px' }}>
							<Button
								id="signUpBtn"
								style={{
									marginRight: '10px',
									width: '120px',
									fontFamily: 'Rammetto One, cursive',
									color: '#5357f6',
								}}
								type="submit"
							>
								SIGN UP
							</Button>
							<Button
								id="logInBtn"
								onClick={() => navigate('/login')}
								style={{
									marginLeft: '10px',
									width: '120px',
									fontFamily: 'Rammetto One, cursive',
									color: '#5357f6',
								}}
								type="button"
							>
								LOG IN
							</Button>
						</div> */}
          </StSignUpForm>
        </StLoginDivBox>
      </StLoginDivFull>
    </>
  );
};

export default SignUp;
