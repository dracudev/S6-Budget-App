import { CustomCard } from "../../components/CustomCard";
import { StandardButton } from "../../components/StandardButton";
import "./ClientDataForm.css";
//import { useBudget } from "../../contexts/BudgetContext";

export function ClientDataForm() {
  //const { checkedItems, handleChecked } = useBudget();

  return (
    <div className=" data-container">
      <CustomCard className="container">
        <form className="form-data">
          <div className="data-inputs">
              <input type="text" placeholder="Name" required />
              <input type="tel" placeholder="Telephone" required />
              <input type="email" placeholder="Email" required />
          </div>

          <div className="data-button">
            <StandardButton className="text-nowrap" type="submit">
              Request budget
            </StandardButton>
          </div>
        </form>
      </CustomCard>
      <hr className="my-5 dotted-hr" />
    </div>
  );
}
