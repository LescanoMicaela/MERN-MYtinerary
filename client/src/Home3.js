import React from 'react';
import './styles/Home3.css';
import Logo from './assets/images/MYtineraryLogo.png';
import BrowserArrow from './assets/images/circled-right-2.png';



class HomePage extends React.Component{
    handleClick = () => {
        this.props.history.push('/cities')
      }
    render(){
        return(
            <div>
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
            </div>
        )
    }
}

export default HomePage;