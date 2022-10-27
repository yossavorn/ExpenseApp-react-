import "./Expense.css";

import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

function Expense(props) {
  const [filterdYear, setFilteredYear] = useState("2020");
  const yearFilterHandler = (year) => {
    setFilteredYear(year);
  };
  let selectedYear = props.data.filter((date) => {
    return date.date.getYear() === +filterdYear - 1900;
  });
  

  
  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filterdYear} onFilter={yearFilterHandler} />
      <ExpenseList item ={selectedYear} />
    </Card>
  );
}
export default Expense;
