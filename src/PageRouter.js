import React from 'react';
import Users from './components/user';
import Contact from './components/contact';
import Cities from './components/cities';
import Login from './components/logIn';
import SignUp from './components/signUp';
import Notfound from './components/notfound';
import HomePage from './Home1';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom';

export default class PageRouter extends React.Component{
  render(){

    return(
      <Router>
        <div>
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
           <hr />
           <Switch>
             <Route exact path="/" component={HomePage} />
             <Route path="/users" component={Users} />
             <Route path="/contact" component={Contact} />
             <Route path="/cities" component={Cities} />
             <Route path="/login" component={Login} />
             <Route path="/signup" component={SignUp} />
             <Route component={Notfound} />
           </Switch>
         </div>
       </Router>
     )
   }


  }

    