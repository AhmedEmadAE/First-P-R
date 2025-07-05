import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact.jsx'

import Navbar from './Components/Navbar/Nav.jsx'

const route = createHashRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "gallery", element: <Gallery /> },
      { path: "Contact", element: <Contact /> },
    ]
  }
])

export default function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}