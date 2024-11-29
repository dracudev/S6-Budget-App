import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

export function useUrlState({ checkedItems, elements, isYearly, setCheckedItems, setElements, setIsYearly }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      const params = Object.fromEntries(searchParams.entries());

      const newCheckedItems = { ...checkedItems };
      Object.keys(newCheckedItems).forEach(key => {
        newCheckedItems[key] = params[key] === "true";
      });
      setCheckedItems(newCheckedItems);

      if (params.pages) {
        setElements(prev => ({ ...prev, pages: parseInt(params.pages, 10) }));
      }

      if (params.lang) {
        setElements(prev => ({ ...prev, languages: parseInt(params.lang, 10) }));
      }

      if (params.yearly) {
        setIsYearly(params.yearly === "true");
      }

      isInitialMount.current = false;
    }
  }, [searchParams, checkedItems, setCheckedItems, setElements, setIsYearly]);

  useEffect(() => {
    if (!isInitialMount.current) {
      const params = new URLSearchParams();
      Object.keys(checkedItems).forEach(key => {
        if (checkedItems[key]) {
          params.append(key, true);
        }
      });
      if (elements.pages) {
        params.append("pages", elements.pages);
      }
      if (elements.languages) {
        params.append("lang", elements.languages);
      }
      if (isYearly) {
        params.append("yearly", true);
      }
      setSearchParams(params);
    }
  }, [checkedItems, elements, isYearly, setSearchParams]);
}