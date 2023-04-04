import React, { Fragment } from 'react'
import '../styles/css/landing.css'
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
              <h1 className="ct_lnd_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolorem.</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, aliquid aut ducimus temporibus ratione debitis earum molestiae commodi cupiditate. Excepturi.</p>
            </div>
            <div className="landingImage">
              <img src={MadDesigner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Landing