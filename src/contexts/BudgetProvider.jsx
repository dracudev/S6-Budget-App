import { useState, useEffect } from "react";
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
  const { elements, setElements, handleClickAdd, handleClickRest } = useWebElements();
  const { isYearly, setIsYearly, handleSwitchClick } = useYearly();
  const budget = useBudgetCalculation(checkedItems, elements, isYearly);
  const { customerData, submittedData, handleInputChange, handleNewBudget } = useCustomerData();
  const { handleFilterClick, handleSearch, sortState } = useFilter();
  const [filteredData, setFilteredData] = useState(submittedData);
  const [searchTerm, setSearchTerm] = useState("");

  useUrlState({ checkedItems, elements, isYearly, setCheckedItems, setElements, setIsYearly });

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
    data = handleFilterClick(
      sortState.date !== "none"
        ? "date"
        : sortState.user !== "none"
        ? "user"
        : "amount",
      data
    );
    setFilteredData(data);
  };

  const getPrice = (price) => (isYearly ? price * 0.8 : price);

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
