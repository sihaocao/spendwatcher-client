import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TokenService from '../../Services/token-service';
import './Header.css';

export default class Header extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link
                    onClick={this.handleLogoutClick}
                    to='/'
                >
                    Logout
                </Link>
            </div>
        )
    }

    renderSideBar() {
        return (
            <div className='sidebar'>
                <Link 
                    to='/dashboard'
                >
                    <li>Dashboard</li>
                </Link>

                <Link 
                    to='/expenses'
                >
                    <li>Expenses</li>
                </Link>

                <Link 
                    to='/addExpense'
                >
                    <li>Add Expense</li>
                </Link>
            </div>
        );
    }

    renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <Link
                    to='/login'
                >
                    Log in
                </Link>
                <Link
                    to='/register'
                >
                    Register
                </Link>
            </div>
        )
    }
    render() {
        return (
            <nav className='Header'>
                <h1>
                    <Link 
                        to='/'
                    >
                        SpendWatcher <FontAwesomeIcon className='blue' icon='money-bill-wave' />
                    </Link>
                </h1>

                <section className='SignOut'>
                    {
                        TokenService.hasAuthToken()
                            ? this.renderLogoutLink()
                            : this.renderLoginLink()
                    }
                </section>
            </nav>
        );
    }
}