import "./App.css";
import { useEffect } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/Todolist/TodoList";
import moment from "moment";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Todo from "./page/Todo";
import Index from "./page/Index";
// pageflow => 첫 방문시 localStorage에 방문 체크값 담아주기 두번쨰 방문부터는 없도록
//             첫 방문에는 매일 할일을 설정해주고 추가 오늘할일 (고정이 아닌 오늘할일은 today가 넘어가면 자동으로 삭제)
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/todolist" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
