import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { GetAllAnime } from "../services/ListServices"

const BrowseAnime = ({ user, authenticated, watchlist, setWatchlist, isClicked, setIsClicked }) => {

  let navigate = useNavigate()

  const [anime, setAnime] = useState([])
  

  // temporary ***
  useEffect(() => {
    const handleAnime = async () => {
      const data = await GetAllAnime()
      setAnime(data.data)
      console.log(data.data)
    }
    handleAnime()
  }, [])
  // temporary ***



  // useEffect(() => {
  //   const handleAnime = async () => {
  //     const data = await GetAllAnime()
  //     setAnime(data)
  //     console.log(data)
  //   }
  //   handleAnime()
  // }, [])

 // temporary ***
  return (user && authenticated) ? (
    <div className="dashboard">
			<h3>Anime Database</h3>
      <button onClick={() => setIsClicked(true)}>Show Info</button>
      <button onClick={() => setIsClicked(false)}>Hide Info</button>
      <div className="anime-grid">
      {anime.map((show) => (
        <div className="anime-item" key={show.mal_id} style={{
          '--poster-img': `url(${show.images.jpg.large_image_url})`
        }}>
          <h3>{show.title}</h3>
          <button onClick={() => setWatchlist([...watchlist, show])}>Add to Watchlist</button>
          {
          isClicked ? ( 
            <div>
              <p>release: {show.year}</p>
              <p>episodes: {show.episodes}</p>
              <p>Synopsis: {show.synopsis}</p>
            </div>
          ) : (
            <div></div>
          )
        }
        </div>
      ))}
      </div>
    </div>
  ) : (
    <div className='protected'>
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={()=> navigate('/signin')}>Sign in</button>
    </div>
  )
}
 // temporary ***


//  return (user && authenticated) ? (
//   <div className="dashboard">
//     <h3>Anime Database</h3>
//     <button onClick={() => setIsClicked(true)}>Show Info</button>
//     <button onClick={() => setIsClicked(false)}>Hide Info</button>
//     <div className="anime-grid">
//     {anime.map((show) => (
//       <div className="anime-item" key={show.id} style={{
//         '--poster-img': `url(${show.image})`
//       }}>
//         <h3>{show.title}</h3>
//         <button onClick={() => setWatchlist([...watchlist, show])}>Add to Watchlist</button>
//         {
//         isClicked ? ( 
//           <div>
//             <p>release: {show.releaseDate}</p>
//             <p>seasons: {show.seasons}</p>
//             <p>episodes: {show.episodes}</p>
//             <p>Synopsis: {show.description}</p>
//           </div>
//         ) : (
//           <div></div>
//         )
//       }
//       </div>
//     ))}
//     </div>
//   </div>
// ) : (
//   <div className='protected'>
//     <h3>Oops! You must be signed in to do that!</h3>
//     <button onClick={()=> navigate('/signin')}>Sign in</button>
//   </div>
// )
// }

export default BrowseAnime
