import React, { Fragment } from 'react'
import '../styles/css/paymentMethods.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

const Payment = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Our Payment Methods | nullchemy</title>
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
      <div className="payment">
        <div className="paymentContainer">
          <div className="paymentWrapper">
            <h1 className="paymentTitle">Our Payment Methods</h1>
            <div className="paymentContent">
              <div className="paymentMethod" id="cash">
                <h1>Cash Payment</h1>
              </div>
              <div className="paymentMethod" id="visa">
                <h1>Visa Payment</h1>
              </div>
              <div className="paymentMethod" id="m-pesa">
                <h1>M-Pesa Payment</h1>
              </div>
              <div className="paymentMethod" id="master-card">
                <h1>Master Card Payment</h1>
              </div>
              <div className="paymentMethod" id="gift-card">
                <h1>Gift Card Payment</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Payment
