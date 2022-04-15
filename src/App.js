// import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
// import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Register from './pages/Register'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import BrowseAnime from './pages/BrowseAnime.js'
import BrowseLists from './pages/BrowseLists.js'
import UserProfile from './pages/UserProfile.js'
import AnimeDetail from './pages/AnimeDetail.js'
// import './styles/App.css'

const App = () => {

  // const [authenticated, toggleAuthenticated] = useState(false)
  // const [user, setUser] = useState(null)

  // const handleLogOut = () => {
  //   setUser(null)
  //   toggleAuthenticated(false)
  //   localStorage.clear()
  // }

  // const checkToken = async () => {
  //   const user = await CheckSession()
  //   setUser(user)
  //   toggleAuthenticated(true)
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     checkToken()
  //   }
  // }, [])

  return (
    <div className="App">
      <Nav
        // authenticated={authenticated}
        // user={user}
        // handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={
            <Signin
              // setUser={setUser}
              // toggleAuthenticated={toggleAuthenticated} 
            />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={
            <Dashboard 
              // user={user}
              // authenticated={authenticated}
            />} />
					<Route path="/browse_anime" element={<BrowseAnime />} />
					<Route path="/browse_lists" element={<BrowseLists />} />
					<Route path="/user_profile" element={<UserProfile />} />
					<Route path="/anime_detail" element={<AnimeDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
