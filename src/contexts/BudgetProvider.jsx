import { useEffect } from "react";
import BudgetContext from "./BudgetContext";
import PropTypes from "prop-types";
import { useWebElements } from "../hooks/useWebElements";
import { useCheckedItems } from "../hooks/useCheckedItems";
import { useBudgetCalculation } from "../hooks/useBudgetCalculation";
import { useCustomerData } from "../hooks/useCustomerData";
import { useFilter } from "../hooks/useFilter";
import { useYearly } from "../hooks/useYearly";
import { useUrlState } from "../hooks/useUrlState";

export function BudgetProvider({ children }) {
  const { checkedItems, handleChecked, setCheckedItems } = useCheckedItems();
  const { elements, setElements, handleClickAdd, handleClickRest, handleCheckedWithReset } = useWebElements(handleChecked);
  const { isYearly, setIsYearly, handleSwitchClick } = useYearly();
  const budget = useBudgetCalculation(checkedItems, elements, isYearly);
  const { customerData, submittedData, handleInputChange, handleNewBudget } = useCustomerData();
  const {sortState, filteredData, setFilteredData, handleFilter, handleSearchChange, getPrice } = useFilter(submittedData, isYearly);

  useUrlState({ checkedItems, elements, isYearly, setCheckedItems, setElements, setIsYearly });

  useEffect(() => {
    setFilteredData(submittedData);
  }, [submittedData, setFilteredData]);

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
        filteredData,
        handleFilter,
        handleSearchChange,
        sortState,
        isYearly,
        handleSwitchClick,
        getPrice,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

BudgetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BudgetProvider;
