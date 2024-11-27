import { StandardButton } from "../../components/StandardButton";
import { useBudget } from "../../contexts/useBudget";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

export function BudgetFilter() {
  const { handleFilter, sortState } = useBudget();

  return (
    <div>
      <div className="d-flex">
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
          className="d-flex align-items-center"
          onClick={() => handleFilter("name")}
        >
          Name
          {sortState.name === "asc" && <GoTriangleUp className="ms-2" />}
          {sortState.name === "desc" && <GoTriangleDown className="ms-2" />}
        </StandardButton>
      </div>
    </div>
  );
}