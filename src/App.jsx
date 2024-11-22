import "./App.css";
import { Budget } from "./pages/budget/index.jsx";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/index.jsx";
import { BudgetProvider } from "./contexts/BudgetContext.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route
        path="/budget"
        element={
          <BudgetProvider>
            <Budget />
          </BudgetProvider>
        }
      ></Route>
    </Routes>
  );
}

export default App;
