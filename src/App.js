import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Notitas from './components/notitas/Notitas';
import NotFound from './components/notFound/NotFound';
import Inicio from './pages/Inicio';

import './App.css';

const App = () => {

  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul> */}

        <Switch>
          <Route exact path="/">
            < Inicio/>
          </Route>
          <Route path="/home">
            < Notitas />
          </Route>
          <Route component= {NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
