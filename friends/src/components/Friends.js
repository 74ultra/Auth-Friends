import React, { useState, useEffect } from 'react';

import FriendCard from './FriendCard.js';
import AddForm from './AddForm.js';
import apiAuth from '../utils/apiAuth.js'

const Friends = props => {

    const [friendList, setFriendList] = useState([]);

    useEffect(() => {
        apiAuth()
            .get('http://localhost:5000/api/friends', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then(res => {
                setFriendList(res.data)
                console.log(res.data)
            })

            .catch(err => {
                console.log(err.response)
            })
    }, [])

    const addFriend = friend => {
        apiAuth()
            .post('http://localhost:5000/api/friends', friend)
            .then(res => {
                console.log(res.data)
                setFriendList(res.data)
            })
    }

    return (
        <div>
            <h2>My Friends</h2>
            <AddForm submitFriend={addFriend} />
            {friendList.map(friend => {
                return <FriendCard key={friend.id} friend={friend} submitFriend={addFriend} />
            })}
        </div>
    )
}

export default Friends;