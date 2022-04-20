import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { CheckSession } from './services/Auth'
import { GetAllAnime } from "./services/ListServices"
import Nav from './components/Nav'
import Register from './pages/Register'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import BrowseAnime from './pages/BrowseAnime.js'
import BrowseLists from './pages/BrowseLists.js'
import './styles/App.css'
import { ListProvider } from './components/ListContext'
import Player from './components/Player'


const App = () => {

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
    console.log(user)
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
    }
    handleAnime()
  }, [])




  //---------------------------*
  const [songs, setSongs] = useState([
		{
			"title": "Plastic Love 竹内 まりや",
			"artist": "Mariya Takeuchi",
			"album": "VARIETY (1984)",
			src: "./Mariya-Takeuchi-Plastic-Love-竹内 まりや.mp3"
		},
		{
			"title": "Tank!",
			"artist": "The Seatbelts",
			"album": "Cowboy Bebop OP 1",
			src: "./Cowboy-Bebop-Opening-Theme-Tank!.mp3"
		}
	])

  

	const [currentSongIndex,setCurrentSongIndex] = useState(0);
	const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);

	useEffect(()=>{
		setNextSongIndex(()=>{
		if (currentSongIndex + 1 >songs.length - 1 ){
			return 0;
		} else{
			return currentSongIndex + 1;
		}
	});
	},[currentSongIndex])
  //---------------------------*

  return (
    <div className="App">
      <ListProvider>
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
            <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
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
            />} />
          <Route path="/browse_anime" element={
            <BrowseAnime 
            user={user}
            authenticated={authenticated}
            anime={anime}
          />} />
					<Route path="/browse_lists" element={
          <BrowseLists 
            user={user}
            authenticated={authenticated}
          />} />
        </Routes>
      </main>
      </ListProvider>
    </div>
  )
}

export default App
