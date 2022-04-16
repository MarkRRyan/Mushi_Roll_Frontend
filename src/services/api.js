import Axios from 'axios'

// export const BASE_URL = 'http://localhost:3001'

// const Client = Axios.create({ baseURL: BASE_URL })

export const BASE_URL = 'https://api.jikan.moe/v4/anime'

const Client = Axios.create({ baseURL: BASE_URL })


export default Client