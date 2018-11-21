import React from 'react';
import './styles/Home1.css';
import Logo from './assets/images/MYtineraryLogo.png';
import BrowserArrow from './assets/images/circled-right-2.png';
import {
    Link
  } from 'react-router-dom';


//Design one, parent component would be App.js, child component Home.js, and would have 3 div elements//

class HomePage extends React.Component{
    handleClick = () => {
        this.props.history.push('/cities')
      }
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
                        <img onClick={this.handleClick} src={BrowserArrow} alt="browser"/>
                    </div>
                </div>

                <div className="footer">
                    <p>Want to build MYtinerary?</p>
                    <div className="loginSignup">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Create an account</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;