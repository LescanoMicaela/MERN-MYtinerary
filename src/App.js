import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import PageRouter from './PageRouter';

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


