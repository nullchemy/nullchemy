import React, { Fragment } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './routes/Home'
import ErrorBoundary from './routes/ErrorBoundary'
import Contact from './routes/Contact'
import NotFound from './routes/NotFound'
import Blogs from './routes/Blogs'
import About from './routes/About'
import Join from './routes/Join'
import Privacy from './routes/Privacy'
import CookiePolicy from './routes/CookiePolicy'
import Read from './routes/Read'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
      <Route
        path="/about"
        element={<About />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/contact"
        element={<Contact />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/blogs"
        element={<Blogs />}
        errorElement={<ErrorBoundary />}
      />
      <Route path="/read" element={<Read />} errorElement={<ErrorBoundary />} />
      <Route path="/join" element={<Join />} errorElement={<ErrorBoundary />} />
      <Route
        path="/privacy"
        element={<Privacy />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/cookie-policy"
        element={<CookiePolicy />}
        errorElement={<ErrorBoundary />}
      />
      <Route path="*" element={<NotFound />} errorElement={<ErrorBoundary />} />
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
