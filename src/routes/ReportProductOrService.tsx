import React, { Fragment, useEffect } from 'react'
import Header from '../components/Header'
import Maintainance from '../components/Maintainance'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'

const ReportProductOrService = () => {
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

export default ReportProductOrService
