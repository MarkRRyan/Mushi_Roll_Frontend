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
    <div className="">
			<h3>Browse the Watchlists</h3>
      <div className="body">
        <div className="carousel">
          <div className="carouselbox">
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
          <a className="switchLeft sliderButton"> Left </a> 
          <a className="switchRight sliderButton">Right</a> 
        </div>
      </div>
    </div>
  ) : (
    <div className='protected'>
    <h3>Oops! You must be signed in to do that!</h3>
    <button onClick={()=> navigate('/signin')}>Sign in</button>
    </div>
  )
}

export default BrowseLists
