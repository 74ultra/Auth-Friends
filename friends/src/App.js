import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import './App.css';

import Login from './components/Login.js';
import Friends from './components/Friends.js';


const PrivateRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    if(localStorage.getItem('token')){
      return <Component {...props} />
    } else {
      return <Redirect to='/login' />
    }
  }} />
}


function App() {
  
  return (
    <div className="App">
  
      
      <nav>
        <Link to='/login'>Log In</Link>
      </nav>
      <h1>Welcome</h1>
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/friends' component={Friends} />
    </div>
  );
}

export default App;
