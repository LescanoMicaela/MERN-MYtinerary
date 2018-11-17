import React from 'react';
import ProfileIcon from '../assets/images/profile.png';
import BurgerMenu from '../assets/images/menu.png';
import {Link} from 'react-router-dom';


export default class Header extends React.Component{
    render(){
        return(
            <div className="NavBar">
                <LogButton />
                <HamburgerMenu />
            </div>
        )
    }
}

export class LogButton extends React.Component {
    render(){
        return (
            <div className="logButton">
                <img src={ProfileIcon} alt="Profile icon" />
            </div>
        )
    }  
};

export class HamburgerMenu extends React.Component {
    render(){
        return (
            <div className="burgerMenu">
                <img src={BurgerMenu} alt='Menuu' />
            </div>
            )
    }
};


{/*<div className="footer">
                    <p>Want to build MYtinerary?</p>
                    <div className="loginSignup">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Create an account</Link>
                    </div>
</div>*/}