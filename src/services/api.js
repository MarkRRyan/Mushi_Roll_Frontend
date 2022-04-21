import Axios from 'axios'


export const apiUrl = process.env.NODE_ENV === 'production' ? 'https://mushi-roll-backend.herokuapp.com/' : 'http://localhost:3001'
console.log(apiUrl)

const Client = Axios.create({ baseURL: apiUrl })



Client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)


export default Client
