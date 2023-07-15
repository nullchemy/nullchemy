import React, { Fragment, useEffect } from 'react'
import '../styles/css/unsubscribe.css'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'

const Unsubscribe = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
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
