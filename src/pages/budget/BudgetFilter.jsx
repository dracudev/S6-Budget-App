import { StandardButton } from "../../components/StandardButton";
import { useBudget } from "../../contexts/useBudget";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import "./BudgetFilter.css"
export function BudgetFilter() {
  const { handleFilter, sortState } = useBudget();

  return (
    <div className="current-container container">
    <div className="d-flex filter-container">
      <div className="input-wrapper me-3">
        <input
          type="text"
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
          onClick={() => handleFilter("name")}
        >
          Name
          {sortState.name === "asc" && <GoTriangleUp className="ms-2" />}
          {sortState.name === "desc" && <GoTriangleDown className="ms-2" />}
        </StandardButton>
      </div>
    </div>
    </div>
  );
}
