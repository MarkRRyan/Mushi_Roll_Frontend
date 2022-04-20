import Music from './api-music'

export const GetMusic = async () => {
  try {
    const res = await Music.get(`/api/v1/theme/35062-00/1`)
    return res.data
  } catch (error) {
    throw error
  }
}