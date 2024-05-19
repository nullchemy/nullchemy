import React, { Fragment, useEffect } from 'react'
import { setIsLogged } from '../state/actions/loggedAction'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import WhatWeDo from '../components/WhatWeDo'
import session from '../utils/session'
import api from '../api/axios'
import { useAppDispatch } from '../state/hooks'
import OurPrinciples from '../components/OurPrinciples'
import Testimonials from '../components/Testimonials'
import OurBrands from '../components/OurBrands'
import Ventures from '../components/Ventures'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'
import Connect from '../components/Connect'

const Home = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  useEffect(() => {
    const checkauth = async () => {
      if (!session.get().authToken || session.get().authToken === undefined) {
        // No token found, redirect to login page
        dispatch(setIsLogged(false))
      } else {
        const token = session.get().authToken
        const res = await api('POST', 'auth/verify', { token })
        if (res.data.type === 'success') {
          dispatch(setIsLogged(true))
        } else {
          console.log(res.data, token)
        }
      }
    }
    checkauth()
  }, [dispatch])
  return (
    <Fragment>
      <Helmet>
        <title>Home | nullchemy</title>
        <link
          rel="canonical"
          href={window.location.pathname + window.location.search}
        />
        <script>
          window.dataLayer = window.dataLayer || []; function
          gtag()&#123;dataLayer.push(arguments);&#125; gtag('js', new Date());
          gtag('config', 'G-JXF0YL9XMJ');
        </script>
      </Helmet>
      <div className="homepage">
        <Landing />
      </div>
      <WhatWeDo />
      <OurPrinciples />
      <Ventures />
      <Testimonials />
      <Connect />
      <OurBrands />
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Home
