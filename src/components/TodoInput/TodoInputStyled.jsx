import styled from "styled-components";

export const StyledTodoInput = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  z-index: 999;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  margin-bottom: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  .BoxWrapper {
    padding: 40px;
    border-radius: 10px;
    background-color: white;
    .Title {
      margin-bottom: 10px;
      font-size: 18px;
    }
    .InputBox {
      display: flex;
      input {
        padding-left: 20px;
        font-size: 17px;
        flex: 1;
        border: none;
        background-color: #e2edfe;
        height: 52px;
        border-radius: 10px;
      }
      button {
        width: 60px;
        border-radius: 10px;
        margin-left: 10px;
        border: none;
        background-color: #5badff;
        color: white;
        font-weight: 400;
      }
    }
    .TypeWrapper {
      margin-bottom: 30px;
      width: 100%;
      display: flex;
      height: 40px;
      justify-content: space-between;
      color: white;
      font-weight: 300;
      font-size: 14px;
    }
    .clickType {
      border-radius: 10px;
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #53a5f8;
    }
    .noneclick {
      border-radius: 10px;
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: grey;
    }
    .close {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      background-color: #ff6666;
      border-radius: 8px;
      height: 30px;
      font-size: 17px;
      color: white;
    }
  }
`;
