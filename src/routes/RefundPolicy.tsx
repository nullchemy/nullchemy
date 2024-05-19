import React, { Fragment, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Maintainance from '../components/Maintainance'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

const RefundPolicy = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <Helmet>
        <title>Our Refund Policy | nullchemy</title>
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

export default RefundPolicy
