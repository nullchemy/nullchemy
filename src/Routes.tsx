import React, { Fragment } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import Home from './routes/Home'
import Contact from './routes/Contact'
import NotFound from './routes/NotFound'
import Blogs from './routes/Blogs'
import About from './routes/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
)

const Routes = () => {
  return (
    <Fragment>
        <RouterProvider router={router} />
    </Fragment>
  )
}

export default Routes