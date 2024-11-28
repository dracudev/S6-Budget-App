import { useContext } from "react";
import BudgetContext from "./BudgetContext";

export const useBudget = () => useContext(BudgetContext);