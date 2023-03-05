import { useRoutes } from 'react-router-dom'
import routes from './routes/routes'

function App () {
  const contentRoutes = useRoutes(routes())

  return (
    <>
      {contentRoutes}
    </>
  )
}

export default App
