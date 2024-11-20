import "./BudgetForm.css";
import { useBudgetForm } from "../../hooks/useBudgetForm";
import { WebElements } from "./WebElements";

export function BudgetForm() {
  const {
    checkedItems,
    budget,
    handleChecked,
    elements,
    setElements,
    handleClickAdd,
    handleClickRest,
  } = useBudgetForm();

  return (
    <div className="card-container">
      <div className="card-element">
        <div className="card-units">
          <div>
            <h2>Seo</h2>
            <p>Programming a complete responsive website</p>
          </div>
          <h5>
            <strong className="fs-1">300</strong>€
          </h5>
          <div>
            <input
              type="checkbox"
              checked={checkedItems.seo}
              onChange={(e) => handleChecked(e, "seo")}
            />
            <label className="ms-3">Add</label>
          </div>
        </div>
      </div>

      <div className="card-element">
        <div className="card-units">
          <div>
            <h2>Ads</h2>
            <p>Programming a complete responsive website</p>
          </div>
          <h5>
            <strong className="fs-1">400</strong>€
          </h5>
          <div>
            <input
              type="checkbox"
              checked={checkedItems.ads}
              onChange={(e) => handleChecked(e, "ads")}
            />
            <label className="ms-3">Add</label>
          </div>
        </div>
      </div>

      <div className="card-element">
        <div className="card-units">
          <div>
            <h2>Web</h2>
            <p>Programming a complete responsive website</p>
          </div>
          <h5>
            <strong className="fs-1">500</strong>€
          </h5>
          <div>
            <input
              type="checkbox"
              checked={checkedItems.web}
              onChange={(e) => handleChecked(e, "web")}
            />
            <label className="ms-3">Add</label>
          </div>
        </div>

        {checkedItems.web && (
          <WebElements
            elements={elements}
            setElements={setElements}
            handleClickAdd={handleClickAdd}
            handleClickRest={handleClickRest}
          />
        )}
      </div>

      <div className="ms-auto mt-4 d-flex">
        <h3 className="me-4">
          Budget:&nbsp; <strong className="fs-1">{budget}</strong>€{" "}
        </h3>
      </div>
    </div>
  );
}
