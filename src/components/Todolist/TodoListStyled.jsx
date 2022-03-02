import styled from "styled-components";

export const StyledTodoList = styled.div`
  background-color: inherit;
  .middle {
    font-size: 17px;
    margin-bottom: 10px;
    color: #ff6666;
  }
  .middlecomplete {
    font-size: 17px;
    margin-bottom: 10px;
    color: #53a5f8;
  }
`;

export const TodoBox = styled.div`
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
  height: 50px;
  background-color: #e2edfe;
  border-bottom: solid 1px black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .delete {
    border-radius: 5px;
    height: 30px;
    width: 40px;
    border: none;
    background: #ff6666;
    color: white;
  }
  .complete {
    height: 30px;
    border-radius: 5px;
    width: 40px;
    border: none;
    background: #00ff99;
    color: white;
  }
  .buttonWrapper {
    justify-content: space-between;
    width: 90px;
    display: flex;
  }
`;
