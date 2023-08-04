import axios from 'axios'

const firebaseApi = axios.create({
    baseURL: 'https://curso-vue-29856-default-rtdb.firebaseio.com'
})

export default firebaseApi