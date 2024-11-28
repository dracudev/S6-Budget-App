import { StandardButton } from "../../components/StandardButton";
import { useBudget } from "../../contexts/useBudget";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import "./BudgetFilter.css";
import { useState } from "react";

export function BudgetFilter() {
  const { handleFilter, sortState, handleSearchChange } = useBudget();
  const [searchItem, setSearchItem] = useState("");

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    handleSearchChange(searchTerm);
  };

  return (
    <div className="current-container container">
      <div className="d-flex filter-container">
        <div className="input-wrapper me-3">
          <input
            type="text"
            value={searchItem}
            onChange={handleSearchInputChange}
            className="border-1 rounded search-input"
            placeholder="Search..."
          />
          <button className="search-button">
            <IoIosSearch />
          </button>
        </div>

        <div className="d-flex button-container">
          <StandardButton
            className="d-flex align-items-center me-3"
            onClick={() => handleFilter("date")}
          >
            Date
            {sortState.date === "asc" && <GoTriangleUp className="ms-2" />}
            {sortState.date === "desc" && <GoTriangleDown className="ms-2" />}
          </StandardButton>
          <StandardButton
            className="d-flex align-items-center me-3"
            onClick={() => handleFilter("amount")}
          >
            Amount
            {sortState.amount === "asc" && <GoTriangleUp className="ms-2" />}
            {sortState.amount === "desc" && <GoTriangleDown className="ms-2" />}
          </StandardButton>
          <StandardButton
            className="d-flex align-items-center me-3"
            onClick={() => handleFilter("user")}
          >
            Name
            {sortState.user === "asc" && <GoTriangleUp className="ms-2" />}
            {sortState.user === "desc" && <GoTriangleDown className="ms-2" />}
          </StandardButton>
        </div>
      </div>
    </div>
  );
}
