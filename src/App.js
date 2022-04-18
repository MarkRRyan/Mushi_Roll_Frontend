import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { CheckSession } from './services/Auth'
// import { AnimeProvider } from './components/AnimeContext'
import { GetAllAnime } from "./services/ListServices"
import { ListProvider } from './components/ListContext'
import Nav from './components/Nav'
import Register from './pages/Register'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import BrowseAnime from './pages/BrowseAnime.js'
import BrowseLists from './pages/BrowseLists.js'
import UserProfile from './pages/UserProfile.js'
import AnimeDetail from './pages/AnimeDetail.js'
import './styles/App.css'

const App = () => {

  // const [watchlist, setWatchlist] = useState([])
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [anime, setAnime] = useState([])


  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])


  useEffect(() => {
    const handleAnime = async () => {
      const data = await GetAllAnime()
      setAnime(data)
      console.log(data)
    }
    handleAnime()
  }, [])

  return (
    <div className="App">
      <ListProvider>
      {/* <AnimeProvider> */}
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={
            <Signin
              setUser={setUser}
              user={user}
              authenticated={authenticated}
              toggleAuthenticated={toggleAuthenticated} 
            />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={
            <Dashboard 
              user={user}
              authenticated={authenticated}
              // watchlist={watchlist}
              // setWatchlist={setWatchlist}
            />} />
          <Route path="/browse_anime" element={
            <BrowseAnime 
            user={user}
            authenticated={authenticated}
            // watchlist={watchlist}
            // setWatchlist={setWatchlist}
            anime={anime}
          />} />
					<Route path="/browse_lists" element={
          <BrowseLists 
            user={user}
            authenticated={authenticated}
          />} />
					<Route path="/user_profile" element={
          <UserProfile 
            user={user}
            authenticated={authenticated}
          />} />
					<Route path="/anime_detail" element={
          <AnimeDetail 
            user={user}
            authenticated={authenticated}
          />} />
        </Routes>
      </main>
      {/* </AnimeProvider> */}
      </ListProvider>
    </div>
  )
}

export default App
