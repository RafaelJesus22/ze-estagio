import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';


import './global.css';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Help from './pages/Help';
import Account from './pages/Account';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/help" component={Help} />
      <Route path="/account" component={Account} />
    </Router>
  );
}

export default App;
