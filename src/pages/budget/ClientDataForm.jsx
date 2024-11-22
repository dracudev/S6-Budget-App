import { CustomCard } from "../../components/CustomCard";
import { StandardButton } from "../../components/StandardButton";
import "./ClientDataForm.css";
import { FaArrowRight } from "react-icons/fa";
import { useBudget } from "../../contexts/useBudget";
import { useState } from "react";


export function ClientDataForm() {
  const { checkedItems, elements, budget, setElements, setCheckedElements } = useBudget();
  
  const [customerData, setCustomerData] = useState({
    text: "",
    tel: "",
    email: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { type, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [type]: value,
    }));
  };

  function handleNewBudget(e) {
    e.preventDefault();
    const data = {
      ...customerData,
      budget,
      elements,
      checkedItems,
    };
    setSubmittedData(data);
  };


  return (
    <div className=" data-container">
      <CustomCard className="container">
        <form className="form-data" onSubmit={handleNewBudget}>
          <div className="data-inputs">
            <input
              type="text"
              placeholder="Name"
              value={customerData.text}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              placeholder="Telephone"
              value={customerData.tel}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
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
      <hr className="my-5 dotted-hr" />

      {submittedData && (
        <CustomCard className="container">
          <h3>Submitted Information</h3>
          <p><strong>Name:</strong> {submittedData.text}</p>
          <p><strong>Telephone:</strong> {submittedData.tel}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Budget:</strong> {submittedData.budget}€</p>
          <p><strong>Elements:</strong> Pages: {submittedData.elements.pages}, Languages: {submittedData.elements.languages}</p>
          <p><strong>Checked Items:</strong> {JSON.stringify(submittedData.checkedItems)}</p>
        </CustomCard>
      )}

    </div>
  );
}
