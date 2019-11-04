import React from 'react';

const FriendCard = ({ friend }) => {

    return (
        <div>
            <h3>{friend.name}</h3>
            <h4>Age: {friend.age}</h4>
            <h4>Email: {friend.email}</h4>
            <button>Delete</button>
        </div>
    )
}

export default FriendCard;