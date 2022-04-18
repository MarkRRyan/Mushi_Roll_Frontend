import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Register from './pages/Register'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import BrowseAnime from './pages/BrowseAnime.js'
import BrowseLists from './pages/BrowseLists.js'
import AnimeDetail from './pages/AnimeDetail'
import { GetAllAnime } from "./services/ListServices"
import './styles/App.css'

const App = () => {

  const [watchlist, setWatchlist] = useState([])
  const [clicked, isClicked] = useState(false)
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [anime, setAnime] = useState([])

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    // const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
    console.log(user)
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
              watchlist={watchlist}
              setWatchlist={setWatchlist}
            />} />
					<Route path="/browse_anime" element={
            <BrowseAnime 
              user={user}
              authenticated={authenticated}
              watchlist={watchlist}
              setWatchlist={setWatchlist}
              anime={anime}
              clicked={clicked}
              isClicked={isClicked}
            />} />
            <Route path="/browse_anime" element={
            <AnimeDetail
              watchlist={watchlist}
              setWatchlist={setWatchlist}
              clicked={clicked}
              isClicked={isClicked}
            />} />
					<Route path="/browse_lists" element={
          <BrowseLists 
            user={user}
            authenticated={authenticated}
          />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
