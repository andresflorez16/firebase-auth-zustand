import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../store/store'

const ProtectedRoute = ({ children, redirectPath = '/login' }) => {
  const user = useUser(state => state.user)

  const navigate = useNavigate()

  useEffect(() => {
    if (user === null) navigate(redirectPath, { replace: true })
  }, [user])

  return children
}

export default ProtectedRoute
