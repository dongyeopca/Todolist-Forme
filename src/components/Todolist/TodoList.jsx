import React, { useState, useEffect } from "react";
import { StyledTodoList, TodoBox } from "./TodoListStyled";
import moment from "moment";
function TodoList() {
  const always = JSON.parse(localStorage.getItem("AlwaysTodo"));
  const today = JSON.parse(localStorage.getItem("TodayTodo"));
  const todaylist = [];
  const [alwaystodo, setalwaystodo] = useState(
    JSON.parse(localStorage.getItem("AlwaysTodo"))
  );
  const [todaytodo, settodaytodo] = useState(
    JSON.parse(localStorage.getItem("TodayTodo"))
  );
  const alwayscheckTask = (e) => {
    const value = e.target.parentNode.previousSibling.innerText;
    if (alwaystodo != null) {
      for (const i of alwaystodo) {
        if (i.title == value) {
          i.type = true;
        }
      }
      localStorage.setItem("AlwaysTodo", JSON.stringify(alwaystodo));
      setalwaystodo(JSON.parse(localStorage.getItem("AlwaysTodo")));
    }
  };
  const alwaysdeleteTask = (e) => {
    if (alwaystodo != null) {
      const value = e.target.parentNode.previousSibling.innerText;
      const list = [];
      for (const i of alwaystodo) {
        if (i.title != value) {
          list.push(i);
        }
      }
      localStorage.setItem("AlwaysTodo", JSON.stringify(list));
      setalwaystodo(JSON.parse(localStorage.getItem("AlwaysTodo")));
    }
  };

  const todaycheckTask = (e) => {
    const value = e.target.parentNode.previousSibling.innerText;
    if (todaytodo != null) {
      for (const i of todaytodo) {
        if (i.title == value) {
          i.type = true;
        }
      }
      localStorage.setItem("TodayTodo", JSON.stringify(todaytodo));
      settodaytodo(JSON.parse(localStorage.getItem("TodayTodo")));
    }
  };
  const todaydeleteTask = (e) => {
    const value = e.target.parentNode.previousSibling.innerText;
    const list = [];
    if (todaytodo != null) {
      for (const i of todaytodo) {
        if (i.title != value) {
          list.push(i);
        }
      }
      localStorage.setItem("TodayTodo", JSON.stringify(list));
      settodaytodo(JSON.parse(localStorage.getItem("TodayTodo")));
    }
  };

  useEffect(() => {
    if (today != null) {
      for (const i of today) {
        if (i.time == moment().format("YYYY-MM-DD")) {
          todaylist.push(i);
        }
      }
      localStorage.setItem("TodayTodo", JSON.stringify(todaylist));
    }
    if (always != null) {
      for (const i of always) {
        if (i.time != moment().format("YYYY-MM-DD")) {
          i.type = false;
        }
      }
      localStorage.setItem("AlwaysTodo", JSON.stringify(always));
    }
  }, []);
  return (
    <StyledTodoList>
      <div className="middle">미완료</div>
      {alwaystodo != null ? (
        alwaystodo
          .filter((e) => e.type == false)
          .map((e, index) => (
            <TodoBox key={index}>
              <div id={index}>{e.title}</div>
              <div className="buttonWrapper">
                <button className="complete" onClick={alwayscheckTask}>
                  완료
                </button>
                <button className="delete" onClick={alwaysdeleteTask}>
                  삭제
                </button>
              </div>
            </TodoBox>
          ))
      ) : (
        <></>
      )}
      {todaytodo != null ? (
        todaytodo
          .filter((e) => e.type == false)
          .map((e, index) => (
            <TodoBox key={index}>
              <div>{e.title}</div>
              <div className="buttonWrapper">
                <button className="complete" onClick={todaycheckTask}>
                  완료
                </button>
                <button className="delete" onClick={todaydeleteTask}>
                  삭제
                </button>
              </div>
            </TodoBox>
          ))
      ) : (
        <></>
      )}
      <div className="middlecomplete">완료</div>
      {alwaystodo != null ? (
        alwaystodo
          .filter((e) => e.type != false)
          .map((e, index) => (
            <TodoBox key={index}>
              <div id={index}>{e.title}</div>
            </TodoBox>
          ))
      ) : (
        <></>
      )}

      {todaytodo != null ? (
        todaytodo
          .filter((e) => e.type != false)
          .map((e, index) => (
            <TodoBox key={index}>
              <div id={index}>{e.title}</div>
            </TodoBox>
          ))
      ) : (
        <></>
      )}
    </StyledTodoList>
  );
}

export default TodoList;
