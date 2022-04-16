import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = ({ user, authenticated }) => {

  let navigate = useNavigate()


  return (user && authenticated) ? (
    <div className="dashboard">
			<h3>this is Dashboard</h3>
    </div>
  ) : (
    <div className='protected'>
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={()=> navigate('/signin')}>Sign in</button>
    </div>
  )
}

export default Dashboard
