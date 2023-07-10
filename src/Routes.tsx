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
import Terms from './routes/Terms'
import Signup from './routes/Signup'
import Signin from './routes/Signin'
import ConfirmEmail from './routes/ConfirmEmail'
import ResetPassword from './routes/ResetPassword'
import Careers from './routes/Careers'
import Search from './components/Search'
import Test from './routes/Test'
import ClientDashboard from './routes/ClientDashboard'
import Services from './routes/Services'
import Cases from './routes/Cases'
import Solutions from './routes/Solutions'
import Unsubscribe from './routes/Unsubscribe'
import WebDev from './routes/WebDev'
import MobileDev from './routes/MobileDev'
import DesktopDev from './routes/DesktopDev'
import ProtectedRoutes from './utils/PrivateRoute'

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
        path="/services"
        element={<Services />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/our-cases"
        element={<Cases />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/solutions"
        element={<Solutions />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/search"
        element={<Search />}
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
      <Route
        path="/careers"
        element={<Careers />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/read/:slug"
        element={<Read />}
        errorElement={<ErrorBoundary />}
      />
      <Route path="/join" element={<Join />} errorElement={<ErrorBoundary />} />
      <Route
        path="/signup"
        element={<Signup />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/signin"
        element={<Signin />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/confirm-email"
        element={<ConfirmEmail />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/reset-password"
        element={<ResetPassword />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/web-design-and-development"
        element={<WebDev />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/mobile-app-development"
        element={<MobileDev />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/desktop-app-development"
        element={<DesktopDev />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/terms-and-conditions"
        element={<Terms />}
        errorElement={<ErrorBoundary />}
      />
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
      <Route
        path="/unsubscribe"
        element={<Unsubscribe />}
        errorElement={<ErrorBoundary />}
      />
      <Route path="/test" element={<Test />} errorElement={<ErrorBoundary />} />
      <Route path="*" element={<NotFound />} errorElement={<ErrorBoundary />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/workspace"
          element={<ClientDashboard />}
          errorElement={<ErrorBoundary />}
        />
      </Route>
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
