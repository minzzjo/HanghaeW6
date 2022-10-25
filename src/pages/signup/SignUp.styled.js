import styled from "styled-components";

export const STHeaderTitle = styled.h1`
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 38px;
  color: #764af1;
  /* font-family: "Rammetto One", cursive; */
`;

export const StSignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* height: 400px; */
  align-items: flex-start;
  .signUpItem {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100px;
  }
  label {
    margin-top: 16px;
    margin-left: 4px;
  }
  span {
    margin-top: 2px;
    font-size: 15px;
    margin-left: 2px;
  }
`;

export const StSignUpForm = styled.form`
  height: 500px;
  text-align: center;
`;
