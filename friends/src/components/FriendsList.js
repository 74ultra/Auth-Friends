import React, { useState, useEffect } from 'react';
import api from '../utils/api.js';

import Friend from './Friend';


const FriendsList = props => {

    const [currentFriends, setCurrentFriends] = useState([]);
    const [update, setUpdate] = useState(1);
    
    useEffect(() => {
        
        api()    
            .get('http://localhost:5000/api/friends')
            .then(res => {
                setCurrentFriends(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [update])

    
    const deleteFriend = id => {
        
        api()
            .delete(`http://localhost:5000/api/friends/${id}`)
                .then(res => {
                    console.log(res)
                    setUpdate(update + 1)
                })
                .catch(err => {
                    console.log(err)
                })
    }

    const editFriend = id => {
        api()
            .put(`http://localhost:5000/api/friends/:${id}`)
            .then(res => {
                console.log(res)
                setUpdate(update + 1)
            })
            .catch(err => {
                console.log(err)
            })

    }
    

    return (
        <div>
            <h1>My Friends</h1>
           <div>
            {currentFriends.map(friend => {
                return (
                    <Friend key={friend.id}
                            friend={friend}
                            deleteFriend={deleteFriend}
                            editFriend={editFriend}
                     />
                )
            })}
            </div>
        </div>
        
    )
}

export default FriendsList;