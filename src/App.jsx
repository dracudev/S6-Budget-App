import "./App.css";
import { Budget } from "./pages/budget/index.jsx";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/budget" element={<Budget />}></Route>
    </Routes>
  );
}

export default App;
