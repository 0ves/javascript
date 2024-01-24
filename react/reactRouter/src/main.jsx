import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'

const router =createBrowserRouter (
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home/>,
        },
        {
          path:'/about',
          element: <About/>,
        },
        {
          path:'/user',
          element: <User/>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
