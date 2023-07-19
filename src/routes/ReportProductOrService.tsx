import React, { Fragment, useEffect } from 'react'
import Header from '../components/Header'
import Maintainance from '../components/Maintainance'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

const ReportProductOrService = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <Helmet>
        <title>Report Product or Service | nullchemy</title>
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
      <Header />
      <Maintainance />
      <Footer />
    </Fragment>
  )
}

export default ReportProductOrService
