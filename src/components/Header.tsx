import React, { Fragment } from 'react'
import '../styles/css/header.css'
import Logo from '../assets/images/nullchemy-logo.png'

const Header = () => {
  return (
    <Fragment>
        <div className="header">
          <div className="hcontainer">
            <div className="hwrapper">
              <div className="hleft">
                <div className="hbranding">
                  <div className="headerlogo">
                    <img src={Logo} alt="" />
                  </div>
                </div>
              </div>
              <div className="hright"></div>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default Header