import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ListContext } from "../components/ListContext";
import ListPreviewDetail from '../components/ListPreviewDetail.jsx';
import UserProfile from '../components/UserProfile.jsx';


const Dashboard = ({ user, authenticated }) => {
  
  const [postToList, setPostToList] = useState({
    
  })


  const {watchlist} = useContext(ListContext)
  const {setWatchlist} = useContext(ListContext)

  let navigate = useNavigate()

return (user && authenticated) ? (
  <div className="dashboard">
    <div className='list-preview-pane'>
      <h3>Watchlist Preview</h3>
      <button className='dash-button' onClick={() => setWatchlist([])}>Clear Preview</button>
      <button>Save To Watchlist</button>
      <div className="anime-grid">
        {watchlist.map((show) => (
          <ListPreviewDetail 
          show={show}
          key={show.id}
          title={show.title}
          image={show.image}
          />  
        ))}
      </div>
    </div>
    <div className='user-container'>
      <UserProfile
      />

      THIS IS WHERE I'LL POST MY ROUTE
    </div>
  </div>
) : (
  <div className='protected'>
    <h3>Oops! You must be signed in to do that!</h3>
    <button onClick={()=> navigate('/signin')}>Sign in</button>
  </div>
)
}

export default Dashboard
