import React, { Fragment, useEffect } from 'react'
import '../styles/css/unsubscribe.css'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

const Unsubscribe = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <Helmet>
        <title>Unsubscribe | nullchemy</title>
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
      <div className="unsub">
        <div className="unsubContainer">
          <div className="unsubWrapper">
            <h1 className="unsubHeader">Unsubscribe</h1>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Unsubscribe
