import React, { Fragment, useEffect } from 'react'
import '../styles/css/terms.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

const CookiePolicy = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <Helmet>
        <title>Our Cookies Policy | nullchemy</title>
        <link rel="canonical" href="http://nullchemy.com/cookie-policy" />
        <script>
          window.dataLayer = window.dataLayer || []; function
          gtag()&#123;dataLayer.push(arguments);&#125; gtag('js', new Date());
          gtag('config', 'G-JXF0YL9XMJ');
        </script>
      </Helmet>
      <Header />
      <div className="content">
        <div className="terms">
          <h1 className="title">Cookies policy</h1>
          <p>
            We use “cookies” to collect information about you and your activity
            across our site. A cookie is a small piece of data that our website
            stores on your computer, and accesses each time you visit, so we can
            understand how you use our site. This helps us serve you content
            based on preferences you have specified.
          </p>
          <h1 className="title">Changes to This Policy</h1>
          <p>
            At our discretion, we may change our privacy policy to reflect
            updates to our business processes, current acceptable practices, or
            legislative or regulatory changes. If we decide to change this
            privacy policy, we will post the changes here at the same link by
            which you are accessing this privacy policy.
            <br />
            <br />
            If required by law, we will get your permission or give you the
            opportunity to opt in to or opt out of, as applicable, any new uses
            of your personal information.
          </p>
          <h1 className="title">contact us</h1>
          <p>
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by e-mail at{' '}
            <a href="mailto:contact@nullchemy.com">contact@nullchemy.com</a>
            <br />
          </p>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default CookiePolicy
