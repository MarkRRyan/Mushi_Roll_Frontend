import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = ({ user, authenticated, watchlist, setWatchlist }) => {

  let navigate = useNavigate()

// temporary ***
  return (user && authenticated) ? (
    <div className="dashboard">
			<h3>Watchlist Preview</h3>
      <button onClick={() => setWatchlist([])}>Clear Watchlist Preview</button>
      <button>Update Watchlist</button>
      <div className="anime-grid">
      {watchlist.map((show) => (
        <div className="anime-item" key={show.mal_id}>
          <h3>{show.title}</h3>
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
// temporary ***


// return (user && authenticated) ? (
//   <div className="dashboard">
//     <h3>Watchlist Preview</h3>
//     <button onClick={() => setWatchlist([])}>Clear Watchlist Preview</button>
//     <button>Update Watchlist</button>
//     <div className="anime-grid">
//     {watchlist.map((show) => (
//       <div className="anime-item" key={show.id} style={{
//         '--poster-img': `url(${show.image})`}}>
//         <h3>{show.title}</h3>
//         <p>release: {show.releaseDate}</p>
//             <p>seasons: {show.seasons}</p>
//             <p>episodes: {show.episodes}</p>
//             <p>Synopsis: {show.description}</p>
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

export default Dashboard
