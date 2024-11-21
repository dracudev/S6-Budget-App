import "./BudgetForm.css";
import { useBudgetForm } from "../../hooks/useBudgetForm";
import { WebElements } from "./WebElements";
import { CustomCard } from "../../components/CustomCard";

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

      <CustomCard>
        <div className="card-units">
          <div>
            <h2>Seo</h2>
            <p>Programming a complete responsive website</p>
          </div>
          <h5 className="d-flex align-items-center mx-3">
            <strong className="fs-1">300</strong>€
          </h5>

          <label>
            <div className="d-flex align-items-center ">
              <input
                className="checkbox"
                type="checkbox"
                checked={checkedItems.seo}
                onChange={(e) => handleChecked(e, "seo")}
              />
              <span className="ms-3">Add</span>
            </div>
            
          </label>

        </div>
      </CustomCard>

      <CustomCard>
        <div className="card-units">
          <div>
            <h2>Ads</h2>
            <p>Programming a complete responsive website</p>
          </div>
          <h5 className="d-flex align-items-center mx-3">
            <strong className="fs-1">400</strong>€
          </h5>

          <label>
            <div className="d-flex align-items-center ">
              <input
                className="checkbox"
                type="checkbox"
                checked={checkedItems.ads}
                onChange={(e) => handleChecked(e, "ads")}
              />
              <span className="ms-3">Add</span>
            </div>
          </label>
        </div>
      </CustomCard>

      <CustomCard>
        <div className="card-units">
          <div>
            <h2>Web</h2>
            <p>Programming a complete responsive website</p>
          </div>
          <h5 className="d-flex align-items-center mx-3">
            <strong className="fs-1">500</strong>€
          </h5>

          <label>
            <div className="d-flex align-items-center ">
              <input
                className="checkbox"
                type="checkbox"
                checked={checkedItems.web}
                onChange={(e) => handleChecked(e, "web")}
              />
              <span className="ms-3">Add</span>
            </div>
          </label>
        </div>

        {checkedItems.web && (
          <WebElements
            elements={elements}
            setElements={setElements}
            handleClickAdd={handleClickAdd}
            handleClickRest={handleClickRest}
          />
        )}
      </CustomCard>

      <div className="ms-auto mt-4 d-flex">
        <h3 className="me-4">
          Budget:&nbsp; <strong className="fs-1">{budget}</strong>€{" "}
        </h3>
      </div>
    </div>
  );
}
