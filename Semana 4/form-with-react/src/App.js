import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';

const App = () => {
  return(
    <Router>
      <Header className="navbar navbar-expand-lg navbar-light bg-light"/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/About/:id" component={About}/>
          </Switch>
        </div>
    </Router>
  )
}

export default App;