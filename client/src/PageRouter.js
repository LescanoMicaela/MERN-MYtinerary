import React from 'react';
import Cities from './components/cities';
import Login from './components/logIn';
import SignUp from './components/signUp';
import Notfound from './components/notfound';
import HomePage from './Home3';
import Header from './components/Header';
import Footer from './components/Footer2';
import homeIcon from './assets/images/home.png';
import {
    Route,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom';

export default class PageRouter extends React.Component{
  render(){

    return(
      <Router>
        <div className='container'>
       <Header />
        
           {/*}
           <ul>
             <li>
               <NavLink exact actvieclassname="active" to="/">
                 Home
               </NavLink>
             </li>
             <li>
               <NavLink actvieclassname="active" to="/users">
                 Users
               </NavLink>
             </li>
             <li>
               <NavLink actvieclassname="active" to="/contact">
                 Contact
               </NavLink>
             </li>
           </ul>
    */}

  {/* Switch will pick only the first matching Route if two routes start with /cities, wont render both of them*/}
           <Switch>
             <Route exact path="/" component={HomePage} />
             <Route path="/cities" component={Cities} />
             <Route path="/login" component={Login} />
             <Route path="/signup" component={SignUp} />
  {/* render if the URL matches no location */}
             <Route component={Notfound} />
           </Switch>
           <Footer location={this.props.location} image={homeIcon} />
         </div>
       </Router>
     )
   }


  }

    