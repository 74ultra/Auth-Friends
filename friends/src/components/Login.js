import React, { useState } from 'react';
import api from '../utils/api.js';

const Login = (props) => {

    const [loginError, setLoginError] = useState();
    
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })
    
    const handleChange = event => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        api()
        .post('http://localhost:5000/api/login', userData)
        .then(res => {
            console.log(res.data.payload)
            localStorage.setItem('token', res.data.payload)
            props.history.push('/account')
        })
        .catch(err => {
            setLoginError(err.response.data.error)
            
        })
    }
    
    
    return (
        <div>
            {loginError && <div>{loginError}</div>}
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange}
                    value={userData.username}
                    type='text' 
                    name='username' 
                    placeholder='Username'
                />
                <input 
                    onChange={handleChange}
                    value={userData.password}
                    type='password' 
                    name='password' 
                    placeholder='Password' 
                />
                <button type='submit'>Sign In</button>
        </form>
        </div>
        
    )
}

export default Login;