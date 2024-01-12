import './App.scss'
// import './App.css'
import Dashboard from './Component/Dashboard/Dashboard'
import Login from './Component/Login/Login'
import Registration from './Component/Registration/Registration'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <div> <Login /> </div>
  },
  {
    path: '/Dashboard',
    element: <div><Dashboard /></div>
  },
  {
    path: '/Registration',
    element: <div><Registration /></div>
  },
])

function App() {


  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App
