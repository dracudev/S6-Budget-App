import { StandardButton } from "../../components/StandardButton";
import { useBudget } from "../../contexts/useBudget";
// import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
export function BudgetFilter() {
  const { handleFilter } = useBudget();

  return (
    <div>
      <div className="d-flex">
        <StandardButton
          className="d-flex align-items-center me-3"
          onClick={() => handleFilter("date")}
        >
          Date
        </StandardButton>
        <StandardButton
          className="d-flex align-items-center me-3"
          onClick={() => handleFilter("amount")}
        >
          Amount
        </StandardButton>
        <StandardButton
          className="d-flex align-items-center"
          onClick={() => handleFilter("name")}
        >
          Name
        </StandardButton>
      </div>
    </div>
  );
}