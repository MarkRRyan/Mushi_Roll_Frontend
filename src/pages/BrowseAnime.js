import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { GetAllAnime } from "../services/ListServices"

const BrowseAnime = ({ user, authenticated }) => {

  let navigate = useNavigate()

  const [anime, setAnime] = useState([])
  
  useEffect(() => {
    const handleAnime = async () => {
      const data = await GetAllAnime()
      setAnime(data.data)
      console.log(data.data)
    }
    handleAnime()
  }, [])


  return (user && authenticated) ? (
    <div className="dashboard">
			<h3>Anime Database</h3>
      <div className="anime-grid">
      {anime.map((show) => (
        <div className="anime-item" key={show.mal_id}>
          <h3>{show.title}</h3>
          <button>Add to Watchlist</button>
          <div>
            <img src={show.images.jpg.image_url} alt="poster"/>
          </div>
          <p>release: {show.year}</p>
          <p>episodes: {show.episodes}</p>
          <p>Synopsis: {show.synopsis}</p>
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

export default BrowseAnime
