import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <li>
                <NavLink to='/expenses' activeClassName='active'>
                    All Expenses
                </NavLink>
            </li>
            <li>
                <NavLink to='/statistics' activeClassName='active'>
                    Expenses Breakdown
                </NavLink>
            </li>
            <li>
                <NavLink to='/addExpense' activeClassName='active'>
                    Add Expense
                </NavLink>
            </li>
        </div>
    );
}

export default SideBar;