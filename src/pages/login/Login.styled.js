import styled from "styled-components";
// import CMIYC_Logo_White from "../../image/CMIYC_Logo_White.png";

export const STHeaderTitle = styled.h1`
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 38px;
  color: #f5eddc;
  /* font-family: "Rammetto One", cursive; */
`;

export const StLoginDivFull = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cfd2cf;
  /* background-image: url("https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzczfHxjYXJ0b29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"); */
  background-image: url("https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk3fHxjYXJ0b29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60");

  background-repeat: no-repeat;
  background-size: cover;
`;

export const StSection = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;

export const StLoginDivBox = styled.div`
  width: 95%;
  max-width: 264px;
  /* height: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 30px 30px 30px;
`;

export const StInputText = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const StInput = styled.input`
  width: 235px;
  height: 35px;
  /* margin-bottom: 8px; */
  border: 5px solid black;
  border-radius: 12px;
  font-size: 16px;
  /* margin-bottom: '30px'; */
  outline: none;
  padding: 0px 10px;
`;

export const StCatchLogo = styled.div`
  position: absolute;

  background-size: contain;
  background-repeat: no-repeat;
  top: 23px;
  left: 50px;
  width: 240px;
  height: 100px;
  &:hover {
    cursor: pointer;
  }
`;

export const StLabel = styled.label`
  display: block;
  text-align: left;
`;

export const StSpan = styled.span`
  display: block;
  text-align: right;
  /* font-family: "Rammetto One", cursive; */
  color: white;
  text-decoration: underline;
  text-underline-position: under;
  margin-top: 5px;
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
`;
export const StTitle = styled.h1`
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 47px;
  color: #ff9551;
  /* font-family: "Rammetto One", cursive; */
`;
