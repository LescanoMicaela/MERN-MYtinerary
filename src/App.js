import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import PageRouter from './PageRouter';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

class App extends React.Component {
  render() {
    return (
      <div className="app">
       <PageRouter />
      </div>
    );
  }
}

export default App;


