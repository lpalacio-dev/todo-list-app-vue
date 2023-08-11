import axios from 'axios'

const firebaseApi = axios.create({
    baseURL: 'https://curso-vue-29856-default-rtdb.firebaseio.com'
})

firebaseApi.interceptors.request.use( (config) => {

    config.params = {
        auth: localStorage.getItem('idToken')
    }

    return config
})

export default firebaseApi