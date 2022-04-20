import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Signin = (props) => {

  let navigate = useNavigate()

  
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({
      email: '',
      password: ''
    })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    localStorage.setItem('watcher', payload.email)
    localStorage.setItem('watcher-id', payload.id)
    navigate('/dashboard')
  }


  return (
    <div className="signin">
			<h3>this is signin</h3>
      <div className="signin-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Animefan23@email.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder='********'
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signin
