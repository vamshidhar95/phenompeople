import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UsersList from './pages/usersList';
import UserDetails from './pages/userDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
          <nav className="navbar">
            <h2>PHENOM</h2>
          </nav>
          <div className="page-body">
            <Switch>
              <Route path='/' exact component={UsersList} />
              <Route path='/user_details' component={UserDetails} />
            </Switch>
          </div>
      </div>
    </Router>
    
  );
}

export default App;