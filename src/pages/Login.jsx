import React from 'react'
import { useUser } from '../store/store'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [loading, setLoading] = React.useState(false)

  const setUser = useUser(state => state.setUser)
  const user = useUser(state => state.user)
  console.log(user)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    setLoading(true)
    setUser(data)
      .then(user => {
        if (!user) setLoading(false)
        else {
          setLoading(false)
          navigate('/')
        }
      })
  }
  return (
    <div className='login page'>
      <h1>Login</h1>
      <a href='/'>Go to home</a>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          name='email'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
        />
        <button disabled={loading}>SignIn</button>
      </form>
    </div>
  )
}

export default Login
