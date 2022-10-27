import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  StSection,
  StLoginDivFull,
  StLoginDivBox,
  StInput,
  StCatchLogo,
  StLabel,
  StSpan,
  StTitle,
  STHeaderTitle,
} from "./Login.styled.js";
import axios from "axios";
import { setCookie, getCookie } from "../../cookie/cookie.js";
// import Button from "../../components/button/Button";

const Login = () => {
  const navigate = useNavigate();
  //포커스 맞추기위해 접속 하자마자 useref넣어볼 예정
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pw]);

  //로그인 정보 전송하고 값을 받음

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      loginId: user,
      password: pw,
    };

    await axios
      .post("http://54.180.140.58:8080/login", {
        loginId: user,
        password: pw,
      })
      .then((res) => {
        //백엔드에서 토큰을 전해줌(헤더에)
        //쿠키에 토큰을 저장하고
        //백엔드에서는 데이터를 꺼낼때, 유저 아이디를 알아야함, 이게 맞는 사람인지 알아야하니까, 그 정보들이 토큰에 있는거임, 만약 수정하거나 삭제하거나 그럴때 백엔드로 다시 보내줘야함
        //만약 엑세스 토큰이 만료되면 재발급을 해준다.
        //

        const Access_Token = res.headers.access_token;
        if (res.data.ok === true) {
          setCookie(
            "Access_Token",
            Access_Token
            // "token",
            // res.headers.access_token
            // "accessToken" + res.data.data.id,
            // JSON.stringify({
            //   auth: res.headers.authorization,
            //   expireTime: +res.headers["access-token-expire-time"],
            // })
          );
          setCookie("nickname", user);
          // localStorage.setItem("refreshToken", res.headers.refresh_token);

          // localStorage.setItem("username", res.data.data.username);
          alert(res.data.message);
          // alert("로그인에 성공하였습니다");
          // navigate("/", { state: { userData: res.data.data } });
          navigate("/");
        } else if (res.data.ok === false) {
          alert(res.data.error.message);
        }
      })
      .catch((error) => {
        alert("아이디와 비밀번호를 확인해 주세요");
      });
  };

  return (
    <>
      <StCatchLogo
        onClick={() => {
          navigate("/");
        }}
      />
      <StSection>
        <StLoginDivFull>
          <StLoginDivBox>
            <STHeaderTitle>출발! 비디오 여행</STHeaderTitle>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
              {errMsg}
            </p>

            <StTitle className='title'>로그인</StTitle>
            <form onSubmit={handleSubmit}>
              <StLabel
                htmlFor='username'
                style={{
                  color: "white",
                  marginBottom: "3px",
                  marginLeft: "5px",
                }}
              >
                E-mail
              </StLabel>
              <StInput
                type='text'
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <br />
              <StLabel
                htmlFor='password'
                style={{
                  color: "white",
                  marginBottom: "2px",
                  marginLeft: "5px",
                  marginTop: "14px",
                }}
              >
                Password
              </StLabel>
              <StInput
                type='password'
                onChange={(e) => setPw(e.target.value)}
                value={pw}
                required
              />
              <br />
              <button
                type='submit'
                style={{
                  marginTop: "16px",
                  width: "264px",
                  height: "60px",
                  color: "#EB1D36",
                  fontSize: "23px",
                  border: "6px solid black",
                  borderRadius: "12px",
                  // fontFamily: "Rammetto One, cursive",
                }}
              >
                LOGIN
              </button>
              <StSpan
                type='button'
                onClick={() => navigate("/SignUp")}
                style={{ fontFamily: "Jua, sans-serif", marginTop: "8px" }}
              >
                회원가입
              </StSpan>
            </form>
          </StLoginDivBox>
        </StLoginDivFull>
      </StSection>
    </>
  );
};

export default Login;
