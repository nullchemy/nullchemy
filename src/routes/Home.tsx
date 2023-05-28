import React, { Fragment } from 'react'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <Fragment>
      <div className="homepage">
        <Landing />
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Home
