import React, { useState, useEffect } from "react";
import { StyledTodoInput } from "./TodoInputStyled";
import moment from "moment";
function TodoInput(props) {
  const { changer } = props;
  const always = JSON.parse(localStorage.getItem("AlwaysTodo"));
  const today = JSON.parse(localStorage.getItem("TodayTodo"));
  const todaylist = [];
  const [type, settype] = useState(true);
  const changeType = () => {
    settype(!type);
  };

  const onValid = (e) => {
    const todo = e.target.previousSibling.value;
    if (type) {
      if (localStorage.getItem("TodayTodo") != null) {
        localStorage.setItem(
          "TodayTodo",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("TodayTodo")),
            {
              title: todo,
              type: false,
              time: moment().format("YYYY-MM-DD"),
            },
          ])
        );
      } else {
        localStorage.setItem(
          "TodayTodo",
          JSON.stringify([
            { title: todo, type: false, time: moment().format("YYYY-MM-DD") },
          ])
        );
      }
    } else {
      if (localStorage.getItem("AlwaysTodo") != null) {
        localStorage.setItem(
          "AlwaysTodo",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("AlwaysTodo")),
            {
              title: todo,
              type: false,
              time: moment().format("YYYY-MM-DD"),
            },
          ])
        );
      } else {
        localStorage.setItem(
          "AlwaysTodo",
          JSON.stringify([
            { title: todo, type: false, time: moment().format("YYYY-MM-DD") },
          ])
        );
      }
    }
    window.location.reload();
    e.target.previousSibling.value = "";
  };

  return (
    <StyledTodoInput>
      <div className="BoxWrapper">
        {type ? (
          <>
            <div className="TypeWrapper">
              <div className="clickType">오늘 할 일 입력</div>
              <div className="noneclick" onClick={changeType}>
                고정 할 일 입력
              </div>
            </div>
            <div className="Title">오늘 할 일을 입력해주세요</div>
          </>
        ) : (
          <>
            <div className="TypeWrapper">
              <div className="noneclick" onClick={changeType}>
                오늘 할 일 입력
              </div>
              <div className="clickType">고정 할 일 입력</div>
            </div>
            <div className="Title">고정 할 일을 입력해주세요</div>
          </>
        )}
        <form className="InputBox">
          <input />
          <button type="button" onClick={onValid}>
            확인
          </button>
        </form>
        <div className="close" onClick={changer}>
          닫기
        </div>
      </div>
    </StyledTodoInput>
  );
}

export default TodoInput;
