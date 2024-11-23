import "./CurrentBudgets.css";
import { useBudget } from "../../contexts/useBudget";
import { CustomCard } from "../../components/CustomCard";

export function CurrentBudgets() {
  const { submittedData } = useBudget();
  if (!submittedData) {
    return <div>No budgets submitted yet.</div>;
  }
  return (
    <div className=" data-container">
      <hr className="mt-3 mb-5 dotted-hr" />
      <div className="d-flex">
        <h2 className="ms-3">
          <strong>Current budgets:</strong>
        </h2>
        <div className="ms-auto me-3">
          <h2>Filters</h2>
        </div>
      </div>

      <div className="mt-5 d-flex align-items-center justify-content-center">
        {submittedData.length === 0 && <h4 className="">No current budgets</h4>}

        {submittedData.map((data, index) => (
          <CustomCard key={index} className="container">
            <h3>Submitted Information</h3>
            <p>
              <strong>Name:</strong> {data.text}
            </p>
            <p>
              <strong>Telephone:</strong> {data.tel}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            <p>
              <strong>Budget:</strong> {data.budget}€
            </p>
            <p>
              <strong>Elements:</strong> Pages: {data.elements.pages},
              Languages: {data.elements.languages}
            </p>
            <p>
              <strong>Checked Items:</strong>{" "}
              {JSON.stringify(data.checkedItems)}
            </p>
          </CustomCard>
        ))}
      </div>
    </div>
  );
}
