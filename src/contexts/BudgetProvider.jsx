import { useState, useEffect } from "react";
import BudgetContext from "./BudgetContext";
import PropTypes from "prop-types";
import { useWebElements } from "../hooks/useWebElements";
import { useCheckedItems } from "../hooks/useCheckedItems";
import { useBudgetCalculation } from "../hooks/useBudgetCalculation";
import { useCustomerData } from "../hooks/useCustomerData";
import { useFilter } from "../hooks/useFilter";

export function BudgetProvider({ children }) {
  const { checkedItems, handleChecked, setCheckedItems } = useCheckedItems();
  const { elements, setElements, handleClickAdd, handleClickRest } = useWebElements();
  const budget = useBudgetCalculation(checkedItems, elements);
  const { customerData, submittedData, handleInputChange, handleNewBudget } = useCustomerData();
  const { handleFilterClick, handleSearch, sortState } = useFilter();
  const [filteredData, setFilteredData] = useState(submittedData);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredData(submittedData);
  }, [submittedData]);

  const handleCheckedWithReset = (event, item) => {
    handleChecked(event, item);
    if (item === "web" && !event.target.checked) {
      setElements({ pages: 0, languages: 0 });
    }
  };

  const handleFilter = (type) => {
    let data = handleSearch(submittedData, searchTerm);
    data = handleFilterClick(type, data);
    setFilteredData(data);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    let data = handleSearch(submittedData, term);
    data = handleFilterClick(sortState.date !== "none" ? "date" : sortState.user !== "none" ? "user" : "amount", data);
    setFilteredData(data);
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
        filteredData,
        handleFilter,
        handleSearchChange,
        sortState,
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
