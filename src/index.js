import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './Home1';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Users from './components/user';
import Contact from './components/contact';
import Notfound from './components/notfound';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom'

const routing = (
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
          <Route exact path="/" component={App} />
          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
