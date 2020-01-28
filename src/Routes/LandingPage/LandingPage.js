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
                <p className='landingpage-description'>Keeping track of your spending so you can be better prepared for the future.</p>
                <Link to='/expenses'>
                    <Button className='button demo-button'>DEMO</Button>
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

            <div className='LandingPage__Copyright'>Copyright &copy; 2020 - <a href='https://sihaocao.github.io' target='_blank' rel='noopener noreferrer'>Sihao Cao</a></div>

        </div>
    )
}

export default LandingPage;