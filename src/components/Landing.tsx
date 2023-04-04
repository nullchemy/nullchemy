import React, { Fragment } from 'react'
import '../styles/css/landing.css'
import { Link } from 'react-router-dom'
import Header from './Header'
import MadDesigner from '../assets/images/mad-designer.png'

const Landing = () => {
  return (
    <Fragment>
      <div className="landing">
        <Header />
        <div className="landingWrapper">
          <div className="landingContainer">
            <div className="landingtexts">
              <div className="lndingtextswrapper">
                <h1 className="ct_lnd_text">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <p className="ct_lnd_text_p">Our purpose is people™ and we provide HR, payroll, and workforce management technology and services that inspire your people and elevate the work experience.</p>
                <Link to="/contact" className="cta_get_started">get started</Link>
              </div>
            </div>
            <div className="landingImage">
              <div className="lndingImageWrapper">
                <img src={MadDesigner} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Landing