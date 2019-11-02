import React, { useState } from 'react';
import api from '../utils/api.js';


const AddFriend = props => {

    const startingState = { id: '', name: '', age: '', email: '' }
    
    const [newFriend, setNewFriend] = useState(startingState);

    const handleChange = event => {
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        setNewFriend({
            ...newFriend,
            id: Date.now()
        })
        
        api()
            .post('http://localhost:5000/api/friends', newFriend)
            .then(res => {
                console.log(res)
                setNewFriend(startingState)
                props.history.push('/account')
            })

    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange}
                   value={newFriend.name}
                   type='text' 
                   name='name' 
                   placeholder='Name' />
            <input onChange={handleChange}
                   value={newFriend.age}
                   type='number' 
                   name='age' 
                   placeholder='Age' />
            <input onChange={handleChange}
                   value={newFriend.email}
                   type='email' 
                   name='email' 
                   placeholder='Email' />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddFriend;