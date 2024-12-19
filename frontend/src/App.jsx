import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from './components/global/Navbar';
import './app.css'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutPage from './pages/AboutPage';
import PackagePage from './pages/PackagePage';
import ContactPage from './pages/ContactPage';

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
          element: <HomePage />
        },
        {
          path: '/about',
          element: <AboutPage />
        },
        {
          path: '/package',
          element: <PackagePage />
        },
        {
          path: '/contact',
          element: <ContactPage />
        },
      ]
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/signup',
      element: <SignupPage />
    },
  ])

  return (
    <div className="App font-heading">
      <RouterProvider router={router} />
    </div>
  )
}

export default App