import React, { Fragment } from 'react'
import '../styles/css/ourteam.css'
import kibet from '../assets/images/kibet.jpg'
import Cynthia from '../assets/images/cynthia.jpg'
import Wesh from '../assets/images/wesh.jpg'
import Randwet from '../assets/images/randwet.jpg'

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
                      <span>-</span>CEO
                    </h2>
                  </div>
                </div>
                <div className="otlCard">
                  <div className="otlTop">
                    <div className="otlPhoto">
                      <img src={Wesh} alt="" />
                    </div>
                  </div>
                  <div className="otlBtm">
                    <h1 className="otlName">Joseph Waweru</h1>
                    <h2 className="otlRole">
                      <span>-</span>CTO
                    </h2>
                  </div>
                </div>
                <div className="otlCard">
                  <div className="otlTop">
                    <div className="otlPhoto">
                      <img src={Randwet} alt="" />
                    </div>
                  </div>
                  <div className="otlBtm">
                    <h1 className="otlName">Samwel Randwet</h1>
                    <h2 className="otlRole">
                      <span>-</span>COO
                    </h2>
                  </div>
                </div>
                <div className="otlCard">
                  <div className="otlTop">
                    <div className="otlPhoto">
                      <img src={kibet} alt="" />
                    </div>
                  </div>
                  <div className="otlBtm">
                    <h1 className="otlName">Oliver Wanyoyi</h1>
                    <h2 className="otlRole">
                      <span>-</span>VP, Engineering
                    </h2>
                  </div>
                </div>
                <div className="otlCard">
                  <div className="otlTop">
                    <div className="otlPhoto">
                      <img src={kibet} alt="" />
                    </div>
                  </div>
                  <div className="otlBtm">
                    <h1 className="otlName">Moses Kilonzo</h1>
                    <h2 className="otlRole">
                      <span>-</span>Head, Sales
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
                      <span>-</span>Head, Graphics and Design
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
