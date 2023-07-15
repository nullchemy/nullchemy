import React, { Fragment, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Maintainance from '../components/Maintainance'
import ReactGA from 'react-ga'

const RefundPolicy = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <Header />
      <Maintainance />
      <Footer />
    </Fragment>
  )
}

export default RefundPolicy
