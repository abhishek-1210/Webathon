import React from 'react';
import './CSS/App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar>
          <Switch>
            <Route exact />
          </Switch>
        </Navbar>
      </Router>
    </>
  );
}

export default App;
