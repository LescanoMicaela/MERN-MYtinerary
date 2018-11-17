import React from 'react';
import './Home1.css';
import Logo from './assets/images/MYtineraryLogo.png';
import Header from './components/Header';
import BrowserArrow from './assets/images/circled-right-2.png';
import Carousel from './components/Carousel';


//Design one, parent component would be App.js, child component Home.js, and would have 3 div elements//

class HomePage extends React.Component{
    handleClick = () => {
        this.props.history.push('/cities')
      }
    render(){
        return(
            <div className="container">
                <Header />
                <div className="logo">
                <img src={Logo} alt="logo" />
                </div>

                <div className="startBrowsing">
                    <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
                    <div className="browserArrow">
                        <img onClick={this.handleClick} src={BrowserArrow} alt="browser"/>
                    </div>
                </div>
                <Carousel />

                
            </div>
        )
    }
}

export default HomePage;