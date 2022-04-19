import { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ListContext } from "../components/ListContext";
import ListPreviewDetail from '../components/ListPreviewDetail.jsx';
import UserProfile from '../components/UserProfile.jsx';
import { PushWatchlist } from '../services/ListServices';


const Dashboard = ({ user, authenticated }) => {
  const [listData, setListData] = useState([])

  let watch = []
  
  const updateWatchlist = async () => {
      watch = await (watchlist.map((item)=> {
       return(item.id)
      }))
      console.log(watch)
      GotWatchlist()
      }
   
    const GotWatchlist = () => {
      let exarr = []
      watch.map((newItem)=> {

        exarr.push({userId: user.id, animeId: newItem})
      })
      console.log(exarr)
      setListData(exarr)
      pushList()
    }
    
    const pushList =  () => {
     PushWatchlist(listData)
      console.log('push successful')
  }
    

  const {watchlist} = useContext(ListContext)
  const {setWatchlist} = useContext(ListContext)

  let navigate = useNavigate()

return (user && authenticated) ? (
  <div className="dashboard">
    <div className='list-preview-pane'>
      <h3>Watchlist Preview</h3>
      <button className='dash-button' onClick={() => setWatchlist([])}>Clear Preview</button>
      <button onClick={() => updateWatchlist()} >Save To Watchlist</button>
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

      When save to watchlist is clicked, items appear here"
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
