import { useState } from "react";

export const useCheckedItems = () => {
  const [checkedItems, setCheckedItems] = useState({
    seo: false,
    ads: false,
    web: false,
  });

  const handleChecked = (event, item) => {
    const isChecked = event.target.checked;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [item]: isChecked,
    }));
  };

  return { checkedItems, handleChecked, setCheckedItems };
};