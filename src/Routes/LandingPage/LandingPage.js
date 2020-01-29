import React from 'react';
import { Button } from '../../Components/Utils/Utils';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import desktop from '../../Images/MainExpenseList_Desktop.JPG';
import mobile from '../../Images/ExpensesBreakdown_Mobile.JPG';

const LandingPage = () => {
    return (
        <div className='container'>

            <div className='about'>
                <h1 className='heading'>SpendWatcher</h1>
                <hr className='hr'></hr>
                <p className='landingpage-description'>Keeping track of your spending so you can be better prepared for the future. For a demonstration, log in with "DemoUser" as the Username and "Demouser123!" as the Password.</p>
                <Link to='/expenses'>
                    <Button className='button demo-button'>DISCOVER</Button>
                </Link>
            </div>

            <div className='screenshots'>
                <img
                    src={desktop}
                    alt='desktop screenshot'
                    className='desktop-screenshot'
                />
                <img 
                    src={mobile}
                    alt='mobile screenshot'
                    className='mobile-screenshot'
                />
            </div>

            <div className='LandingPage__Copyright'>Copyright &copy; 2020 - <a href='https://sihaocao.github.io' target='_blank' rel='noopener noreferrer'>Sihao Cao</a></div>

        </div>
    )
}

export default LandingPage;