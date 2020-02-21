import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Directory from './pages/Directory';
import Login from './pages/Login';
import Header from './components/Header.js';
import About from './pages/About';
import NotFound from './pages/NotFound';


const App = () => {
  return(
    <Router> 
    <Header className="navbar navbar-expand-lg navbar-light bg-light"/>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/Directory/' component={Directory}/>
          <Route path='/About/' component={About}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
      </Router>

  );
}

export default App;