import { createContext } from "react";
import PropTypes from "prop-types";
import { useWebElements } from "../hooks/useWebElements";
import { useCheckedItems } from "../hooks/useCheckedItems";
import { useBudgetCalculation } from "../hooks/useBudgetCalculation";
import { useCustomerData } from "../hooks/useCustomerData";

const BudgetContext = createContext();

export function BudgetProvider({ children }) {
  const { checkedItems, handleChecked, setCheckedItems } = useCheckedItems();
  const { elements, setElements, handleClickAdd, handleClickRest } =
    useWebElements();
  const budget = useBudgetCalculation(checkedItems, elements);

  const { customerData, submittedData, handleInputChange, handleNewBudget } =
    useCustomerData();

  const handleCheckedWithReset = (event, item) => {
    handleChecked(event, item);
    if (item === "web" && !event.target.checked) {
      setElements({ pages: 0, languages: 0 });
    }
  };

  return (
    <BudgetContext.Provider
      value={{
        checkedItems,
        budget,
        elements,
        setElements,
        handleClickAdd,
        handleClickRest,
        handleChecked: handleCheckedWithReset,
        setCheckedItems,
        customerData,
        submittedData,
        handleInputChange,
        handleNewBudget: (e) =>
          handleNewBudget(
            e,
            budget,
            elements,
            checkedItems,
            setElements,
            setCheckedItems
          ),
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

BudgetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BudgetContext };
