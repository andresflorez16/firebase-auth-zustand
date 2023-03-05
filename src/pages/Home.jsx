import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../store/store'

const Home = () => {
  const signOut = useUser(state => state.signOut)

  return (
    <div className='page'>
      <h1>Home</h1>
      <Link to='about'>About</Link>
      <button onClick={signOut}>SignOut</button>
    </div>
  )
}

export default Home
