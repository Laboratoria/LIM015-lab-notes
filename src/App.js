import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Importar componentes
import SingInUp from './components/SignInUp';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
            <Route path="/" exact>
              <SingInUp />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
