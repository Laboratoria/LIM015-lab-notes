import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Notitas from './components/notitas/Notitas';
import NotFound from './components/notFound/NotFound';
import Inicio from './pages/Inicio';

// import * as firebase from "firebase/app";
// // import { getAuth, createUserWithEmailAndPassword,} from "firebase/auth";
import './App.css';

  // const db = firebase.auth();
  // console.log(db);
  // const auth = db.getAuth();
  // db.createUserWithEmailAndPassword( 'noelishernandezdagraca@gmail.com', '123456')
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     console.log(user);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode);
  //     console.log(errorMessage);
  //   });

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
