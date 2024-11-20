import "./App.css";
import { Budget } from "./pages/budget/index.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/budget" element={<Budget/>}></Route>
    </Routes>
  );
}

export default App;
