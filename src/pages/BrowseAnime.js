import { useNavigate } from "react-router-dom"
import AnimeDetail from "../components/AnimeDetail.jsx"

const BrowseAnime = ({ user, authenticated, anime }) => {

  let navigate = useNavigate() 

 return (user && authenticated) ? (
  <div className="browse-container">
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
    <img 
      className="sad-mushi"
      src='https://imgur.com/nAbKh6q.png' 
      alt='sad mushi' 
      onClick={()=> navigate('/signin')} 
    />
    {/* <br />
    <button onClick={()=> navigate('/signin')}>Sign in</button> */}
  </div>
)
}


export default BrowseAnime
