import React, { Fragment } from 'react'
import '../styles/css/ourteam.css'
import kibet from '../assets/images/kibet_abt.jpg'
import Cynthia from '../assets/images/cynthia.jpg'
import Devi from '../assets/images/devi.jpg'

const OurTeam = () => {
  return (
    <Fragment>
      <div className="ourteam">
        <div className="ourteamContainer">
          <div className="ourteamWrapper">
            <div className="otLeadership">
              <h1 className="otLtitle">Our Leadership</h1>
              <div className="otLCont">
                <div className="otlCard">
                  <div className="otlTop">
                    <div className="otlPhoto">
                      <img src={kibet} alt="" />
                    </div>
                  </div>
                  <div className="otlBtm">
                    <h1 className="otlName">Dennis Kibet</h1>
                    <h2 className="otlRole">
                      <span>-</span> Founder & CEO
                    </h2>
                  </div>
                </div>
                <div className="otlCard">
                  <div className="otlTop">
                    <div className="otlPhoto">
                      <img src={Cynthia} alt="" />
                    </div>
                  </div>
                  <div className="otlBtm">
                    <h1 className="otlName">Cynthia Chelang'at</h1>
                    <h2 className="otlRole">
                      <span>-</span> Head, Graphics and Design
                    </h2>
                  </div>
                </div>
                <div className="otlCard">
                  <div className="otlTop">
                    <div className="otlPhoto">
                      <img src={Devi} alt="" />
                    </div>
                  </div>
                  <div className="otlBtm">
                    <h1 className="otlName">David Kamau</h1>
                    <h2 className="otlRole">
                      <span>-</span> Head, Sales and Marketting
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default OurTeam
