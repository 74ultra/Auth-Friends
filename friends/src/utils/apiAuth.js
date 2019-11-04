import axios from 'axios';

const apiAuth = () => {
    return axios.create({
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}

export default apiAuth;