import { useNavigate } from "react-router-dom"
import { useEffect, useState, useContext } from 'react'
import AnimeDetail from "./AnimeDetail"

const BrowseAnime = ({ user, authenticated, watchlist, setWatchlist, clicked, isClicked, anime }) => {

  let navigate = useNavigate() 

 return (user && authenticated) ? (
  <div className="dashboard">
    <h3>Anime Database</h3>
    <div className="anime-grid">
    {anime.map((show) => (
        <AnimeDetail 
        show={show}
        key={show.id}
        title={show.title}
        image={show.image}
        />   
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
