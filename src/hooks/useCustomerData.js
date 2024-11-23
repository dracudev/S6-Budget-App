import { useState } from "react";
import { useBudget } from "../contexts/useBudget";

export function useCustomerData() {
  const { checkedItems, elements, budget, setElements, setCheckedItems } = useBudget();

  const [customerData, setCustomerData] = useState({
    text: "",
    tel: "",
    email: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNewBudget = (e) => {
    if (budget === 0) return;
    e.preventDefault();
    const data = {
      ...customerData,
      budget,
      elements,
      checkedItems,
    };


    
    setSubmittedData((prevData) => [...prevData, data]);
    setElements({ pages: 0, languages: 0 });
    setCheckedItems({
      seo: false,
      ads: false,
      web: false,
    });
    setCustomerData({
      text: "",
      tel: "",
      email: "",
    });
  };

  return [customerData, submittedData, handleInputChange, handleNewBudget];
}