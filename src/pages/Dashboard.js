import { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ListContext } from "../components/ListContext";
import ListPreviewDetail from '../components/ListPreviewDetail.jsx';
import UserProfile from '../components/UserProfile.jsx';
import { GetUser, PushWatchlist } from '../services/ListServices';


const Dashboard = ({ user, authenticated }) => {
  const {watchlist} = useContext(ListContext)
  const {setWatchlist} = useContext(ListContext)
  const [listData, setListData] = useState([])
  const [renderList, setRenderList] = useState([])

  let navigate = useNavigate()
  let watch = []

  //listData is the info we're eventually feeding to the backend

  //watchlist is a Context, its an array of anime objects, each with their own properties. I'm trying to only extract the id numbers. This function is triggered via onClick
  const updateWatchlist = async () => {
    watch = await (watchlist.map((item)=> {
      return(item.id)
    }))
    console.log(watch) //output [3, 2]
    gotWatchlist()
    }

    //maps over new array 'watch' and inserts their numbers as animeId
    const gotWatchlist = () => {
      let exarr = []
      let watchAll = watch.map((newItem)=> {
        // setListData([
        //   {userId: user.id, animeId: newItem}
        // ])
        exarr.push({userId: user.id, animeId: newItem})
      })
      console.log(exarr)
      setListData(exarr)
    }
    
    const pushList =  () => {
      PushWatchlist(listData)
      console.log('push successful') 
  }
    

  useEffect(() => {
    const userList = async () => {
      const data = await GetUser(user.id)
      console.log('this is our data', data.watch_list)
      setRenderList(data.watch_list)
    }
    userList()
  }, [])

  
  

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
        renderList={renderList}
        key={renderList.id}
        title={renderList.title}
      />
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