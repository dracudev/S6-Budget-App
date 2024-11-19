import { Form } from "react-bootstrap";
import "./BudForm.css";
import { useState } from "react";

export const BudForm = () => {
  const [seoChecked, setSeoChecked] = useState(false);
  const [adsChecked, setAdsChecked] = useState(false);
  const [webChecked, setWebChecked] = useState(false);
  const [budget, setBudget] = useState(0);

  function handleCheckboxChange(event, price) {
    const isChecked = event.target.checked;
    if (isChecked) {
      setBudget(budget + price);
    } else {
      setBudget(budget - price);
    }
  }

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
            checked={seoChecked}
            onChange={(e) => {
              setSeoChecked(e.target.checked);
              handleCheckboxChange(e, 300);
            }}
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
            checked={adsChecked}
            onChange={(e) => {
              setAdsChecked(e.target.checked);
              handleCheckboxChange(e, 400);
            }}
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
            checked={webChecked}
            onChange={(e) => {
              setWebChecked(e.target.checked);
              handleCheckboxChange(e, 500);
            }}
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
