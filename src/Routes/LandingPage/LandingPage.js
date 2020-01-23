import React from 'react';
import { Button } from '../../Components/Utils/Utils';
import { Link } from 'react-router-dom';
import './LandingPage.css';
// import desktop from '../../Images/desktop.png';
// import iphone from '../../Images/iphone.png';

const LandingPage = () => {
    return (
        <div className='container'>

            <div className='about'>
                <h1 className='heading'>SpendWatcher</h1>
                <hr className='hr'></hr>
                <p>Keeping track of your spending so you can be better prepared for the future. Log in or Register today!</p>
                <Link to='/expenses'>
                    <Button className='button demo-button'>LEARN MORE!</Button>
                </Link>
            </div>

            {/* <div className='screenshots'>
                <img
                    src={desktop}
                    alt='desktop screenshot'
                    className='desktop-screenshot'
                />
                <img 
                    src={iphone}
                    alt='iphone screenshot'
                    className='iphone-screenshot'
                />
            </div> */}

        </div>
    )
}
export default LandingPage;