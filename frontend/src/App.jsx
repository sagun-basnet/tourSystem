import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from './components/global/Navbar';
import Main from './components/home/Main';
import './app.css'

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Main />
        }
      ]
    }
  ])

  return (
    <div className="App font-heading">
      <RouterProvider router={router} />
    </div>
  )
}

export default App