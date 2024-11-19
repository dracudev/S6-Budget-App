import "./BudForm.css";
import { useBudgetForm } from "../hooks/useBudgetForm";
import { BudPages } from "./BudPages";

export function BudForm() {
  const { checkedItems, budget, handleChecked } = useBudgetForm();

  return (
    <div className="card-container">
      <div className="card-element">
        <div className="card-units">
          <div>
            <h2>Seo</h2>
            <p>Programming a complete responsive website</p>
          </div>
          <h1 className="fw-bold">300€</h1>
          <div>
            <input
              type="checkbox"
              checked={checkedItems.seo}
              onChange={(e) => handleChecked(e, "seo", 300)}
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
          <h1 className="fw-bold">400€</h1>
          <div>
            <input
              type="checkbox"
              checked={checkedItems.ads}
              onChange={(e) => handleChecked(e, "ads", 400)}
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
          <h1 className="fw-bold">500€</h1>
          <div>
            <input
              type="checkbox"
              checked={checkedItems.web}
              onChange={(e) => handleChecked(e, "web", 500)}
            />
            <label className="ms-3">Add</label>
          </div>
        </div>

        {checkedItems.web && <BudPages />}
      </div>

      <div className="ms-auto mt-4 d-flex">
        <h3 className="me-4">Budget: </h3>
        <h2 className="fw-bold">{budget}€</h2>
      </div>
    </div>
  );
}
