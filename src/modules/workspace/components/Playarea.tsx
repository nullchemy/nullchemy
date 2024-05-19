import React, { Fragment } from 'react'
import '../styles/css/playarea.css'
import Services from './Services'
import Footer from './Footer'

const Playarea = () => {
  return (
    <Fragment>
      <div className="playarea">
        <Services />
        <Footer />
      </div>
    </Fragment>
  )
}

export default Playarea
