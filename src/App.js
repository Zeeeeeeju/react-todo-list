import React from 'react';
import './App.css';
import { HashRouter as Router,Route} from 'react-router-dom';
import CacheRoute from 'react-router-cache-route'
import DonePage from './components/DonePage'
import Main from './components/Main'


function App() {
  return (
    <Router>
      <div>
        <CacheRoute path="/" component={Main} exact/>
        <Route path="/done" component={DonePage} />
      </div>
    </Router>  
  );
}

export default App;
