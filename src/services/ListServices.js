import Client from './api'


// temporary ***
// export const GetAllAnime = async () => {
//   try {
//     const res = await Client.get()
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }
// temporary ***


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
