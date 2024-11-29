import { HeaderBanner } from "../../components/HeaderBanner";
import { StandardButton } from "../../components/StandardButton";
import { BudgetForm } from "./BudgetForm";
import { Link } from "react-router-dom";
import { ClientDataForm } from "./ClientDataForm";
import { FaHome } from "react-icons/fa";
import "./index.css";
import { useBudget } from "../../contexts/useBudget";
import { CurrentBudgets } from "./CurrentBudgets";
import SwitchButton from "../../components/SwitchButton";

export function Budget() {
  const { checkedItems, isYearly, handleSwitchClick } = useBudget();

  return (
    <>
      <HeaderBanner>
        <h1 className="text-center text-white">Get the best quality</h1>
      </HeaderBanner>

      <div className="w-75 d-flex gap-5 justify-content-around btn-container">
        <div>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="align-items-start"
          >
            <StandardButton className="my-4 d-flex align-items-center">
              <FaHome className="me-2" /> Home
            </StandardButton>
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <SwitchButton
            textL={"Monthly"}
            textR={"Yearly"}
            onChange={handleSwitchClick}
            checked={isYearly}
          ></SwitchButton>
        </div>
      </div>

      <BudgetForm isYearly={isYearly}></BudgetForm>

      {(checkedItems.web || checkedItems.seo || checkedItems.ads) && (
        <ClientDataForm />
      )}

      <CurrentBudgets></CurrentBudgets>
    </>
  );
}
