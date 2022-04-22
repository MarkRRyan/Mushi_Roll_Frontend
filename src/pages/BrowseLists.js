import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GetAllLists } from "../services/ListServices"
import UserList from "../components/UserList"

const BrowseLists = ({ user, authenticated}) => {
  
  const [lists, setLists] = useState([])

  let navigate = useNavigate()

  useEffect(() => {
    const viewLists = async (req, res) => {
      const data = await GetAllLists()
      setLists(data)
    }
    viewLists()
  }, [])

  return (user && authenticated) ? (
    <div className="wrapper">
			<h2>Browse the Watchlists</h2>
      <div className="browse-users-container"> 
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
    </div>
  )
}

export default BrowseLists
