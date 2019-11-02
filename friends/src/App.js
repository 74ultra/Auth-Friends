import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login.js';
import FriendsList from './components/FriendsList.js';
import AddFriend from './components/AddFriend.js';
import EditFriend from './components/EditFriend.js';
import PrivateRoute from './components/PrivateRoute.js';

// import { getToken } from './utils/api.js';

function App() {
  
  //const signedIn = getToken()

  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/account'>My Friends</Link>
        <Link to='/addfriend'>Add A Friend</Link>
      </nav>

      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/account' component={FriendsList} />
      <PrivateRoute exact path='/addfriend' component={AddFriend} />
      
      
    
    </div>
  );
}

export default App;
