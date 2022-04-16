import Client from './api'

export const GetAnimeList = async () => {
  try {
    const res = await Client.get('/anime')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAllAnime = async () => {
  try {
    const res = await Client.get()
    return res.data
  } catch (error) {
    throw error
  }
}
