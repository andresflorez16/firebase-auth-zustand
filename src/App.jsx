import { useState } from 'react'
import { useUser } from './store/store'

import './App.css'

function App () {
  const [loading, setLoading] = useState(false)

  const setUser = useUser(state => state.setUser)
  const user = useUser(state => state.user)
  const signOut = useUser(state => state.signOut)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    setLoading(true)
    setUser(data)
      .then(user => {
        if (!user || user) setLoading(false)
      })
  }

  return (
    <div>
      <h1>Auth</h1>
      {
        (loading || user === undefined) && <p>Loading...</p>
      }
      {
        user &&
        (
          <>
            <p>Hi, {user.name}</p>
            <button onClick={signOut}>SignOut</button>
          </>
        )
      }
      {
        user === null && (
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
        )
      }
    </div>
  )
}

export default App
