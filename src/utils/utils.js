import { months } from "./constants/calendarConstants";
import { DateTime } from "luxon";

export function getTodosFromLS() {
  let todoHistory = [];
  if (localStorage["todoHistory"]) {
    try {
      todoHistory = JSON.parse(localStorage.getItem("todoHistory") || "") || [];
    } catch (e) {
      localStorage.removeItem("todoHistory");
    }
  }
  return todoHistory;
}

export function saveTodosToLS(todos) {
  localStorage.setItem("todoHistory", JSON.stringify(todos));
}

export function getDates(date) {
  const daysInMonth = date.daysInMonth;
  const arr = [];
  for (let i = 1; i <= daysInMonth; i++) {
    arr.push(i);
  }

  return arr;
}

export const getMonthName = (index) => {
  return months.filter((item, id) => id === index)[0];
};

export function getDueDateValue(dueDate) {
  return (
    dueDate &&
    DateTime.fromISO(dueDate).toLocaleString({
      weekday: "short",
      day: "2-digit",
      month: "short",
    })
  );
}
