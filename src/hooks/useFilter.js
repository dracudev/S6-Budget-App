import { parse } from "date-fns";

export function useFilter() {

  function filterData(data) {
    return [...data].sort(
      (a, b) =>
        parse(a.timestamp, "dd/MM/yyyy, HH:mm:ss", new Date()) -
        parse(b.timestamp, "dd/MM/yyyy, HH:mm:ss", new Date())
    );
  }

  function filterName(data) {
    return [...data].sort((a, b) => a.text.localeCompare(b.text));
  }

  function filterAmount(data) {
    return [...data].sort((a, b) => a.budget - b.budget);
  }

  function handleFilterClick(type, data) {
    if (type === "date") return filterData(data);
    else if (type === "name") return filterName(data);
    else if (type === "amount") return filterAmount(data);
    return data;
  }

  return {
    handleFilterClick,
  };
}
