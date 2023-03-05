import React, { Suspense, lazy } from 'react'
import LoadingPage from '../pages/LoadingPage'
import ProtectedRoute from './ProtectedRoute'

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Component {...props} />
    </Suspense>
  )
}
const Home = Loadable(lazy(() => import('../pages/Home')))
const Login = Loadable(lazy(() => import('../pages/Login')))
const About = Loadable(lazy(() => import('../pages/About')))

const Routes = () => {
  return [
    {
      path: '/',
      element: <ProtectedRoute><Home /></ProtectedRoute>
    },
    {
      path: '/about',
      element: <ProtectedRoute><About /></ProtectedRoute>
    },
    {
      path: '/login',
      element: <Login />
    }
  ]
}

export default Routes
