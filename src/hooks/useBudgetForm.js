import { useState } from "react";

export function useBudgetForm() {
  const [checkedItems, setCheckedItems] = useState({
    seo: false,
    ads: false,
    web: false,
  });
  const [budget, setBudget] = useState(0);

  function handleChecked (event, item, price) {
    const isChecked = event.target.checked;
    setCheckedItems({
      ...checkedItems,
      [item]: isChecked,
    });
    if (isChecked) {
      setBudget(budget + price);
    } else {
      setBudget(budget - price);
    }
  };

  return {
    checkedItems,
    budget,
    handleChecked,
  };
}
