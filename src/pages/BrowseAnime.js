import { useNavigate } from "react-router-dom"

const BrowseAnime = () => {
let navigate = useNavigate()

  return (
    <div className="browse-anime">
			<h3>this is BrowseAnime</h3>
			<button onClick={() => navigate('/anime_detail')}>
          Click Here To View Anime
        </button>
    </div>
  )
}

export default BrowseAnime
