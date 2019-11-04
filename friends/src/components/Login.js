import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {

    // console.log(props)
    
    const [userCreds, setUserCreds] = useState({ username: '', password: '' });
    
    const handleChange = event => {
        setUserCreds({...userCreds, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', userCreds)
            .then(res => {
                console.log(res.data.payload);
                localStorage.setItem('token', res.data.payload)
                props.history.push('./friends')
            })
            .catch(err => console.log(err.response.data.error))
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={userCreds.username} type='text' name='username' placeholder='Username' />
            <input onChange={handleChange} value={userCreds.password} type='password' name='password' placeholder='Password' />
            <button type='submit'>Sign In</button>
        </form>
    )
};

export default Login;