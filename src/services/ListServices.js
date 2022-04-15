import Client from './api'

export const GetAnime = async () => {
  try {
    const res = await Client.get('/anime')
    return res.data
  } catch (error) {
    throw error
  }
}
