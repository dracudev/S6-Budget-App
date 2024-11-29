import { useState } from "react";

export function useWebElements(handleChecked) {
  const [elements, setElements] = useState({
    pages: 0,
    languages: 0,
  });

  function handleClickAdd(type) {
    setElements((prevElements) => ({
      ...prevElements,
      [type]: prevElements[type] + 1,
    }));
  }

  function handleClickRest(type) {
    setElements((prevElements) => ({
      ...prevElements,
      [type]: Math.max(prevElements[type] - 1, 0),
    }));
  }
  const handleCheckedWithReset = (event, item) => {
    handleChecked(event, item);
    if (item === "web" && !event.target.checked) {
      setElements({ pages: 0, languages: 0 });
    }
  };

  return {
    elements,
    setElements,
    handleClickAdd,
    handleClickRest,
    handleCheckedWithReset
  };
}
