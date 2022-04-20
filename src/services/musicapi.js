import { Axios } from "axios"

export const MUSIC_URL = 'https://animethemes-api.herokuapp.com/'

const Music = Axios.create ({ baseURL: MUSIC_URL })

export default Music