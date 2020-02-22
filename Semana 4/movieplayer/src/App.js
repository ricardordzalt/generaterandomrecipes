import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import NotFound from './pages/NotFound';
import Movie from './pages/Movie';
import style from './style/style.css';

function App() {
  return(
    <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={MoviesPage}/>
            <Route exact path="/Movie/:id" component={Movie}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
    </Router>
  )
}

export default App;
