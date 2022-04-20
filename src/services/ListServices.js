import Client from './api'

export const GetAllAnime = async () => {
  try {
    const res = await Client.get('/api/anime')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAllLists = async () => {
  try {
    const res = await Client.get('/api/watchlists')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUser = async (data) => {
  try {
    const res = await Client.get(`/api/users/${data}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const PushWatchlist = async (data) => {
  
  try {
    console.log(data) //output first click: [], second click: [0: {userId: 51, animeId: 3}, 1: {userId: 51, animeId: 2}]
    const res = await Client.put('/api/watchlists/update', data)
    return res.data
  } catch (error) {
    throw error
  }
}
