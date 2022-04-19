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

export const GetUser = async () => {
  try {
    const res = await Client.get('/api/users/:me')
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateWatchlist = async () => {
  try {
    const res = await Client.put('/api/watchlists/update')
    return res.data
  } catch (error) {
    throw error
  }
}
