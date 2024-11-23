import "./CurrentBudgets.css";

export function CurrentBudgets() {
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
    </div>
  );
}

//{!submittedData && <p>No current budgets</p>}