import "./App.css";
import { Budget } from "./pages/budget/index.jsx";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/index.jsx";
import { BudgetProvider } from "./contexts/BudgetProvider.jsx";

function App() {
  return (
    <BudgetProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/budget" element={<Budget />}></Route>
      </Routes>
    </BudgetProvider>
  );
}

export default App;
