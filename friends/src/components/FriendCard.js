import React from 'react';

const FriendCard = (props) => {

    return (
        <div>
            <h3>{props.friend.name}</h3>
            <h4>Age: {props.friend.age}</h4>
            <h4>Email: {props.friend.email}</h4>
            <button onClick={() => props.delete(props.friend.id)}>Delete</button>
        </div>
    )
}

export default FriendCard;