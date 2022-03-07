import React from "react";
import styled from "styled-components";
function Index() {
  const setname = (e) => {
    localStorage.setItem("Name", e.target.previousSibling.value);
    window.location.reload();
  };
  return (
    <StyledIndex>
      <div className="title">
        안녕하세요:)
        <br /> <span>이름</span>을 설정해주세요.
      </div>
      <input />
      <button onClick={setname}>확인</button>
    </StyledIndex>
  );
}

const StyledIndex = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 30px;
    span {
      color: #53a5f8;
    }
    margin-bottom: 30px;
  }
  input {
    height: 50px;
    width: 60%;
    margin-bottom: 20px;
    border-radius: 8px;
    background-color: #e2edfe;
    border: none;
    font-size: 17px;
    padding-left: 15px;
  }
  button {
    width: 80px;
    height: 40px;
    font-size: 17px;
    background-color: #53a5f8;
    border: none;
    border-radius: 8px;
    color: white;
  }
`;
export default Index;
