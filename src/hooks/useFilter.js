import { parse } from "date-fns";
import { useState } from "react";

export function useFilter() {
  const [sortState, setSortState] = useState({
    date: "none",
    name: "none",
    amount: "none",
  });

  function filterData(data, order) {
    return [...data].sort((a, b) => {
      const dateA = parse(a.timestamp, "dd/MM/yyyy, HH:mm:ss", new Date());
      const dateB = parse(b.timestamp, "dd/MM/yyyy, HH:mm:ss", new Date());
      return order === "asc" ? dateA - dateB : dateB - dateA;
    });
  }

  function filterName(data, order) {
    return [...data].sort((a, b) => {
      const nameA = a.text || "";
      const nameB = b.text || "";
      return order === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
  }

  function filterAmount(data, order) {
    return [...data].sort((a, b) => (order === "asc" ? a.budget - b.budget : b.budget - a.budget));
  }

  function handleFilterClick(type, data) {
    let sortedData;
    let newOrder;
    if (sortState[type] === "none") {
      newOrder = "asc";
    } else if (sortState[type] === "asc") {
      newOrder = "desc";
    } else {
      newOrder = "none";
    }

    if (newOrder === "none") {
      sortedData = data;
    } else if (type === "date") {
      sortedData = filterData(data, newOrder);
    } else if (type === "name") {
      sortedData = filterName(data, newOrder);
    } else if (type === "amount") {
      sortedData = filterAmount(data, newOrder);
    }

    setSortState({
      date: type === "date" ? newOrder : "none",
      name: type === "name" ? newOrder : "none",
      amount: type === "amount" ? newOrder : "none",
    });

    return sortedData;
  }

  return {
    handleFilterClick,
    sortState,
  };
}
