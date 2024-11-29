import { useEffect, useState } from "react";

export const useBudgetCalculation = (checkedItems, elements, isYearly) => {
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    let newBudget = 0;

    if (checkedItems.seo) newBudget += 300;
    if (checkedItems.ads) newBudget += 400;
    if (checkedItems.web) newBudget += 500;

    if (isYearly) {
      newBudget *= 0.8;
    }

    newBudget += elements.pages * 30;
    newBudget += elements.languages * 30;

    setBudget(newBudget);
  }, [checkedItems, elements, isYearly]);

  return budget;
};
