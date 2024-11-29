import { useState, useEffect, useRef } from "react";
import BudgetContext from "./BudgetContext";
import PropTypes from "prop-types";
import { useWebElements } from "../hooks/useWebElements";
import { useCheckedItems } from "../hooks/useCheckedItems";
import { useBudgetCalculation } from "../hooks/useBudgetCalculation";
import { useCustomerData } from "../hooks/useCustomerData";
import { useFilter } from "../hooks/useFilter";
import { useYearly } from "../hooks/useYearly";
import { useSearchParams } from "react-router-dom";

export function BudgetProvider({ children }) {
  const { checkedItems, handleChecked, setCheckedItems } = useCheckedItems();
  const { elements, setElements, handleClickAdd, handleClickRest } = useWebElements();
  const { isYearly, setIsYearly, handleSwitchClick } = useYearly();
  const budget = useBudgetCalculation(checkedItems, elements, isYearly);
  const { customerData, submittedData, handleInputChange, handleNewBudget } = useCustomerData();
  const { handleFilterClick, handleSearch, sortState } = useFilter();
  const [filteredData, setFilteredData] = useState(submittedData);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const isInitialMount = useRef(true);

  useEffect(() => {
    setFilteredData(submittedData);
  }, [submittedData]);

  useEffect(() => {
    if (isInitialMount.current) {
      const params = Object.fromEntries(searchParams.entries());

      const newCheckedItems = { ...checkedItems };
      Object.keys(newCheckedItems).forEach(key => {
        newCheckedItems[key] = params[key] === "true";
      });
      setCheckedItems(newCheckedItems);

      if (params.pages) {
        setElements(prev => ({ ...prev, pages: parseInt(params.pages, 10) }));
      }

      if (params.lang) {
        setElements(prev => ({ ...prev, languages: parseInt(params.lang, 10) }));
      }

      if (params.yearly) {
        setIsYearly(params.yearly === "true");
      }

      isInitialMount.current = false;
    }
  }, [searchParams, checkedItems, setCheckedItems, setElements, setIsYearly]);

  useEffect(() => {
    if (!isInitialMount.current) {
      const params = new URLSearchParams();

      Object.keys(checkedItems).forEach(key => {
        if (checkedItems[key]) {
          params.append(key, true);
        }
      });

      if (elements.pages) {
        params.append("pages", elements.pages);
      }

      if (elements.languages) {
        params.append("lang", elements.languages);
      }

      if (isYearly) {
        params.append("yearly", true);
      }

      setSearchParams(params);
    }
  }, [checkedItems, elements, isYearly, setSearchParams]);

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
