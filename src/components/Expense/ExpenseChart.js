import React from "react";
import Chart from '../Chart/Chart.js'
import './ExpenseChart.css'
const ExpenseChart = props => {
    console.log(props.expense);
let chartData = [
    {label:"Jan", value:0},
    {label:"Feb", value:0},
    {label:"Mar", value:0},
    {label:"Apr", value:0},
    {label:"May", value:0},
    {label:"Jun", value:0},
    {label:"Jul", value:0},
    {label:"Aug", value:0},
    {label:"Sep", value:0},
    {label:"Oct", value:0},
    {label:"Nov", value:0},
    {label:"Dec", value:0}
]
    for (const expense of props.expense) {
        console.log(expense);
        const expenseMonth = expense.date.getMonth(); // 0=jan 12=dec
        chartData[expenseMonth].value += expense.amount
        
    }
  

    return (
        <Chart dataPoints={chartData} />

    )
}

export default ExpenseChart