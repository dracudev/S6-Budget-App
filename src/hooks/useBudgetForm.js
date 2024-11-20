import { useState, useEffect } from "react";
import { useWebElements } from "./useWebElements";

export function useBudgetForm() {
  const [checkedItems, setCheckedItems] = useState({
    seo: false,
    ads: false,
    web: false,
  });
  const [budget, setBudget] = useState(0);
  const { elements, setElements, handleClickAdd, handleClickRest } =
    useWebElements();

  useEffect(() => {
    let newBudget = 0;

    if (checkedItems.seo) newBudget += 300;
    if (checkedItems.ads) newBudget += 400;
    if (checkedItems.web) newBudget += 500;

    newBudget += elements.pages * 30;
    newBudget += elements.languages * 30;

    setBudget(newBudget);
  }, [checkedItems, elements]);

  function handleChecked(event, item) {
    const isChecked = event.target.checked;
    setCheckedItems({
      ...checkedItems,
      [item]: isChecked,
    });
  }

  return {
    checkedItems,
    budget,
    handleChecked,
    elements,
    setElements,
    handleClickAdd,
    handleClickRest,
  };
}
