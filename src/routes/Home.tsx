import React, { Fragment } from 'react'
import Landing from '../components/Landing'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Fragment>
        <div className="homepage">
            <Landing />
        </div>
        <Footer />
    </Fragment>
  )
}

export default Home