import React from 'react';
import PrivateRoute from './PrivateRoute.js';
import EditFriend from './EditFriend.js';
import { Link } from 'react-router-dom';


const Friend = props => {

    console.log(props)
    
    return (
        <div>
            <h3>{props.friend.name}</h3>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button onClick={() => props.deleteFriend(props.friend.id)}>Delete</button>
            <Link to='/editfriend'><button>Edit</button></Link>
            <PrivateRoute exact path='/editfriend'
                   render={props => <EditFriend
                                     {...props} 
                                     friend={props.friend}
                                     editFriend={props.editFriend}
                   />} 

            />

        </div>
    )
}

export default Friend;
/*

{currentFriends.map(item => {
                return (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.age}</p>
                        <p>{item.email}</p>
                        <button onClick={() => deleteFriend(item.id)}>Delete</button>
                    </div>
                )
            })}

*/