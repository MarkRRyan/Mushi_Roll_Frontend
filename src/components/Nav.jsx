import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <Link to="/dashboard">Dashboard</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
			  <Link to="/browse_anime">Browse Anime</Link>
			  <Link to="/browse_lists">Browse Lists</Link>
        </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )


  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://i.imgur.com/UuiW73M.png"
          />
        </div>
      </Link>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav
