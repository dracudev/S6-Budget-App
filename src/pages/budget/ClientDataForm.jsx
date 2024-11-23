import { CustomCard } from "../../components/CustomCard";
import { StandardButton } from "../../components/StandardButton";
import "./ClientDataForm.css";
import { FaArrowRight } from "react-icons/fa";
import { useBudget } from "../../contexts/useBudget";

export function ClientDataForm() {
  const {customerData, handleInputChange, handleNewBudget} =
    useBudget();

  return (
    <div className=" data-container">
      <CustomCard className="container">
        <form className="form-data" onSubmit={handleNewBudget}>
          <div className="data-inputs">
            <input
              type="text"
              name="text"
              placeholder="Name"
              value={customerData.text}
              onChange={handleInputChange}
              pattern=".{2,}"
              title="Name must have at least 2 characters"
              required
            />
            <input
              type="tel"
              name="tel"
              placeholder="Telephone"
              value={customerData.tel}
              onChange={handleInputChange}
              pattern="\d{9}"
              title="Telephone must be 9 digits"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={customerData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="data-button">
            <StandardButton
              className="text-nowrap d-flex align-items-center"
              type="submit"
            >
              Request budget
              <FaArrowRight className="ms-3" />
            </StandardButton>
          </div>
        </form>
      </CustomCard>
    </div>
  );
}
