import React, { Fragment } from 'react'
import '../styles/css/services.css'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Services: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <div className="services">
        <div className="servicesContainer">
          <div className="servicesWrapper">
            <h1 className="servicesHeader">services</h1>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Services
