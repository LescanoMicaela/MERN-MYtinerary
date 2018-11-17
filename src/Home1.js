import React from 'react';
import './Home1.css'
import Logo from './assets/images/MYtineraryLogo.png'
import BrowserArrow from './assets/images/circled-right-2.png'

//Design one, parent component would be App.js, child component Home.js, and would have 3 div elements//

class HomePage extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="logo">
                <img src={Logo} alt="logo" />
                </div>

                <div className="startBrowsing">
                    <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
                    <div className="browserArrow">
                        <h2>Start browsing</h2>
                        <img src={BrowserArrow} alt="browse"/>
                    </div>
                </div>

                <div className="footer">
                    <p>Want to build MYtinerary?</p>
                    <div className="loginSignup">
                        <a href="#">Log in</a>
                        <a href="#">Create an account</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;