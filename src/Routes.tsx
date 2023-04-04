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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
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