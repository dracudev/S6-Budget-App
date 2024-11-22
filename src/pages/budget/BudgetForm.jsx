import "./BudgetForm.css";
import { WebElements } from "./WebElements";
import { CustomCard } from "../../components/CustomCard";
import { useBudget } from "../../contexts/useBudget";

export function BudgetForm() {
  const { checkedItems, budget, handleChecked, elements, setElements, handleClickAdd, handleClickRest } = useBudget();

  return (
    <div className="form-container">
      <CustomCard className="container">
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

      <CustomCard className="container">
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

      <CustomCard className="container">
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
        <div className="budget mb-3">
        <div className="my-5">
          <h3 className="me-4">
            Budget:&nbsp; <strong className="fs-1">{budget}</strong>€
          </h3>
        </div>
        </div>
        
      
    </div>
  );
}
