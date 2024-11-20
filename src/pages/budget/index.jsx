import { HeaderBanner } from "../../components/HeaderBanner";
import { StandardButton } from "../../components/StandardButton";
import { BudgetForm } from "./BudgetForm";
import { Link } from "react-router-dom";

export function Budget() {
  return (
    <>
      <HeaderBanner>
        <h1 className="text-center text-white">Get the best quality</h1>
      </HeaderBanner>
      <Link to="/">
        <StandardButton className="my-4">Home</StandardButton>
      </Link>
      <BudgetForm></BudgetForm>
    </>
  );
}
