import React, { Fragment, useEffect } from 'react'
import '../styles/css/solutions.css'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'

const WebDev: React.FC = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <Header />
      <div className="solutions">
        <div className="solutionsContainer">
          <div className="solutionsWrapper">
            <h1 className="solutionsHeader">Web Design & Development</h1>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default WebDev
