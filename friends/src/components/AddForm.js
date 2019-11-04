import React, { useState } from 'react';

const AddForm = props => {
    
    const blankState = { name: '', email: '', age: ''}
    const [newFriend, setNewFriend] = useState(blankState)
    
    const handleChange = event => {
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.submitFriend(newFriend)
    }
    
    return (
        <div>
           <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={newFriend.name} type='text' name='name' placeholder='Name' />
                <input onChange={handleChange} value={newFriend.age} type='number' name='age' placeholder='Age' />
                <input onChange={handleChange} value={newFriend.email} type='email' name='email' placeholder='Email' />
                <button type='submit'>Add Friend</button>
           </form> 
        </div>
        
    )
}

export default AddForm;