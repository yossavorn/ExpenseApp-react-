import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

const dropdownChangeHndler =(event) =>{
  console.log(event.target.value);
  props.onFilter(event.target.value)

}
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={dropdownChangeHndler}>
         
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;