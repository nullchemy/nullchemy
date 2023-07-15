import React, { Fragment } from 'react'
import '../styles/css/ourprinciples.css'

const OurPrinciples: React.FC = () => {
  return (
    <Fragment>
      <div className="ourprinciples">
        <div className="opcontainer">
          <div className="opwrapper">
            <div className="opcards">
              <h1 className="optitle">Our Principles</h1>
            </div>
            <div className="opcards">
              <div className="opitwrap">
                <span>Our Mission</span>
                <p>
                  Our mission is to build the best developer experience across
                  the development process
                </p>
              </div>
            </div>
            <div className="opcards">
              <div className="opitwrap">
                <span>Our Vision</span>
                <p>
                  To be an exemplary regulator of water resources management and
                  use.
                </p>
              </div>
            </div>
            <div className="opcards">
              <div className="opitwrap">
                <span>Our Motto</span>
                <p>transforming your ideas into a digital reality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default OurPrinciples
