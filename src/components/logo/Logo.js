import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.svg';
import './Logo.css';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
             <div className="Tilt-inner">
                <img alt ='logo' src={logo}></img> 
             </div>
            </Tilt>
        </div>
    )
}
//Icons made by
// <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
export default Logo;