import React, { Fragment } from 'react'
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
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Careers
