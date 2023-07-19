import React, { Fragment, useEffect } from 'react'
import '../styles/css/solutions.css'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

const DesktopDev: React.FC = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <Helmet>
        <title>Desktop App Development | nullchemy</title>
        <link
          rel="canonical"
          href="http://nullchemy.com/desktop-app-development"
        />
        <script>
          window.dataLayer = window.dataLayer || []; function
          gtag()&#123;dataLayer.push(arguments);&#125; gtag('js', new Date());
          gtag('config', 'G-JXF0YL9XMJ');
        </script>
      </Helmet>
      <Header />
      <div className="solutions">
        <div className="solutionsContainer">
          <div className="solutionsWrapper">
            <h1 className="solutionsHeader">Desktop Application Development</h1>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default DesktopDev
