import React, { Fragment } from 'react'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import WhatWeDo from '../components/WhatWeDo'
import HowWeGetItDone from '../components/HowWeGetItDone'

const Home = () => {
  return (
    <Fragment>
      <div className="homepage">
        <Landing />
      </div>
      <WhatWeDo />
      <HowWeGetItDone />
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Home
