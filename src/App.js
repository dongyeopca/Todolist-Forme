import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from "./page/Todo";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
