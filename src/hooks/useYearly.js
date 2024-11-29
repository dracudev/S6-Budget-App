import { useState } from "react";

export function useYearly() {
  const [isYearly, setIsYearly] = useState(false);

  const handleSwitchClick = () => {
    setIsYearly(!isYearly);
  };

  return {
    isYearly,
    setIsYearly,
    handleSwitchClick,
  };
}
