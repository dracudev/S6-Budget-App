import { StandardButton } from "../../components/StandardButton";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useFilter } from "../../hooks/useFilter";
import PropTypes from "prop-types";

export function BudgetFilter({ data, setFilteredData }) {
  const { handleFilterClick } = useFilter();

  const handleClick = (type) => {
    const sortedData = handleFilterClick(type, data);
    setFilteredData(sortedData);
  };

  return (
    <div>
      <div className="d-flex">
        <StandardButton
          className="d-flex align-items-center me-3"
          onClick={() => handleClick("data")}
        >
          Date
        </StandardButton>
        <StandardButton
          className="d-flex align-items-center me-3"
          onClick={() => handleClick("amount")}
        >
          Amount
        </StandardButton>
        <StandardButton
          className="d-flex align-items-center"
          onClick={() => handleClick("name")}
        >
          Name
        </StandardButton>
      </div>
    </div>
  );
}

BudgetFilter.propTypes = {
  data: PropTypes.array.isRequired,
  setFilteredData: PropTypes.func.isRequired,
};
