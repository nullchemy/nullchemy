import React, { Fragment } from 'react'
import '../styles/css/landing.css'
import { Link } from 'react-router-dom'
import Header from './Header'
import MadDesigner from '../assets/images/landing_group.png'

const Landing = () => {
  return (
    <Fragment>
      <div className="landing">
        <Header />
        <div className="landingWrapper">
          <div className="landingContainer">
            <div className="landingtexts">
              <div className="lndingtextswrapper">
                <h1 className="ct_lnd_text">
                  {/* Revolutionize your business with nullchemy's innovative
                  software solutions today! */}
                  Transforming ideas into digital reality.
                </h1>
                <p className="ct_lnd_text_p">
                  At nullchemy, we are dedicated to providing our clients with
                  high-quality software development services that are tailored
                  to meet their unique needs. Our team of expert developers work
                  tirelessly to ensure that your project is completed on time,
                  within budget, and to your exact specifications.
                </p>
                <Link to="/contact" className="cta_get_started">
                  get started
                </Link>
              </div>
            </div>
            <div className="landingImage">
              <div className="lndingImageWrapper">
                <img src={MadDesigner} title="mad developer" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Landing
