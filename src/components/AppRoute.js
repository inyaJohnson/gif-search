import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Gif from './Gif';

const AppRoute = () => {
  return (
    <Router>
        <Route exact path='/' component={Home} />
        <Route path='/gif/:id' component={Gif} />
    </Router>
  );
}
export default AppRoute;