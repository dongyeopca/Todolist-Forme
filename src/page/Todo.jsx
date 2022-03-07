import TodoInput from "../components/TodoInput/TodoInput";
import TodoList from "../components/Todolist/TodoList";
import React, { useState } from "react";
import styled from "styled-components";
import Index from "./Index";
function Todo() {
  const always = localStorage.getItem("AlwaysTodo");
  const today = localStorage.getItem("TodayTodo");
  const [category, setcategory] = useState(false);
  const name = localStorage.getItem("Name");
  const changer = () => {
    setcategory(false);
  };
  if (name === null) {
    return <Index></Index>;
  } else {
    return (
      <AppLayout>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            {name}님 안녕하세요 :)
          </div>
          <button className="setting" onClick={() => setcategory(!category)}>
            할일목록 추가
          </button>
        </div>
        {category && <TodoInput changer={changer} />}
        {always == null && today == null ? (
          <TodoInput changer={changer} />
        ) : (
          <TodoList />
        )}
      </AppLayout>
    );
  }
}
const AppLayout = styled.div`
  padding: 20px;
  .setting {
    background-color: gray;
    color: white;
    height: 40px;
    margin-bottom: 20px;
    border: none;
    border-radius: 8px;
    width: 100px;
  }
`;

export default Todo;
