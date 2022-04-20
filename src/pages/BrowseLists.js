import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ListContext } from "../components/ListContext"
import ListPreviewDetail from "../components/ListPreviewDetail"
import UserProfile from "../components/UserProfile"
import { GetAllLists } from "../services/ListServices"
import UserList from "../components/UserList"

const BrowseLists = ({ user, authenticated}) => {
  
  const {watchlist} = useContext(ListContext)
  const [lists, setLists] = useState([])

  let navigate = useNavigate()

  useEffect(() => {
    const viewLists = async (req, res) => {
      const data = await GetAllLists()
      console.log(data)
      setLists(data)
    }
    viewLists()
  }, [])

  return (user && authenticated) ? (
    <div className="browse-container">
			<h3>Browse the Watchlists</h3>
      <div>
        {
          lists.map((list) => (
            <UserList
              list={list}
              key={list.id}
              username={list.username}
              email={list.email}
            />
          ))
        }
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
    {/* <button onClick={()=> navigate('/signin')}>Sign in</button> */}
    </div>
  )
}

export default BrowseLists
