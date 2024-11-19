import { Form } from "react-bootstrap";
import "./BudForm.css";
import { useBudgetForm } from "../hooks/useBudgetForm";

export function BudForm() {
const {checkedItems, budget, handleChecked} = useBudgetForm();

  return (
    <Form className="form">
      <label className="label">
        <div>
          <h2>Seo</h2>
          <p>Programming a complete responsive website</p>
        </div>
        <h1 className="fw-bold">300€</h1>
        <div className="d-flex">
          <Form.Check
            type="checkbox"
            checked={checkedItems.seo}
            onChange={(e) => handleChecked(e, 'seo', 300)}
          />
          <p className="ms-3">Add</p>
        </div>
      </label>

      <label className="label">
        <div>
          <h2>Ads</h2>
          <p>Programming a complete responsive website</p>
        </div>
        <h1 className="fw-bold">400€</h1>
        <div className="d-flex">
          <Form.Check
            type="checkbox"
            checked={checkedItems.ads}
            onChange={(e) => handleChecked(e, 'ads', 400)}
          />
          <p className="ms-3">Add</p>
        </div>
      </label>

      <label className="label">
        <div>
          <h2>Web</h2>
          <p>Programming a complete responsive website</p>
        </div>
        <h1 className="fw-bold">500€</h1>
        <div className="d-flex">
          <Form.Check
            type="checkbox"
            checked={checkedItems.web}
            onChange={(e) => handleChecked(e, 'web', 500)}
          />
          <p className="ms-3">Add</p>
        </div>
      </label>
      <div className="ms-auto mt-4 d-flex">
        <h3 className="me-4">Budget: </h3>
        <h2 className="fw-bold">{budget}€</h2>
      </div>
    </Form>
  );
};
