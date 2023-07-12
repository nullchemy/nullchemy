import React, { Fragment } from 'react'
import '../styles/css/careers.css'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Careers = () => {
  return (
    <Fragment>
      <Header />
      <div className="careers">
        <div className="careersContainer">
          <div className="careersWrapper">
            <h1 className="careersHeader">Careers</h1>
            <span className="crshring">we're hiring</span>
            <h2 className="crslndTitle">Be part of our mission</h2>
            <p className="crslndpar">
              We're looking for passionate people to join us on our mission. we
              value flat hierarchies, clear communication, full ownership and
              responsibility.
            </p>
            <div className="crsjbcats">
              <span>view all</span>
              <span>Development</span>
              <span>Design</span>
              <span>marketting</span>
              <span>Customer Service</span>
              <span>Operations</span>
              <span>Finance</span>
              <span>Management</span>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Careers
