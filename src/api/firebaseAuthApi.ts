import axios from 'axios'

const firebaseAuthApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: ''
    }
})

export default firebaseAuthApi
