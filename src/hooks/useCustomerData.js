import { useState } from "react";
import { useBudget } from "../contexts/useBudget";

export function useCustomerData() {
  const { checkedItems, elements, budget } = useBudget();

  const [customerData, setCustomerData] = useState({
    name: "",
    tel: "",
    email: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNewBudget = (e) => {
    e.preventDefault();
    const data = {
      ...customerData,
      budget,
      elements,
      checkedItems,
    };
    setSubmittedData(data);
  };

  return [customerData, submittedData, handleInputChange, handleNewBudget];
}