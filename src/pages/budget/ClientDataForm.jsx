import { CustomCard } from "../../components/CustomCard";
import { StandardButton } from "../../components/StandardButton";
import "./ClientDataForm.css";
import { FaArrowRight } from "react-icons/fa";
import { useCustomerData } from "../../hooks/useCustomerData";


export function ClientDataForm() {
  const [customerData, submittedData, handleInputChange, handleNewBudget] = useCustomerData();

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
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    title="Please enter a valid email address"
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
      

      {submittedData.map((data, index) => (
        <CustomCard key={index} className="container">
          <h3>Submitted Information</h3>
          <p><strong>Name:</strong> {data.text}</p>
          <p><strong>Telephone:</strong> {data.tel}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Budget:</strong> {data.budget}€</p>
          <p><strong>Elements:</strong> Pages: {data.elements.pages}, Languages: {data.elements.languages}</p>
          <p><strong>Checked Items:</strong> {JSON.stringify(data.checkedItems)}</p>
        </CustomCard>
      ))}

    </div>
  );
}
