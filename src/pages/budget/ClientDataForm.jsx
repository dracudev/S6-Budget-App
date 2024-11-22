import { CustomCard } from "../../components/CustomCard";
import { StandardButton } from "../../components/StandardButton";
import "./ClientDataForm.css";
import { FaArrowRight } from 'react-icons/fa';;
//import { useBudget } from "../../contexts/useBudget";

export function ClientDataForm() {
  //const { checkedItems, elements, budget, setElements, setCheckedElements } = useBudget();

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
            <StandardButton className="text-nowrap d-flex align-items-center" type="submit">
              Request budget<FaArrowRight className="ms-3" />
            </StandardButton>
          </div>
        </form>
      </CustomCard>
      <hr className="my-5 dotted-hr" />

    </div>
  );
}
