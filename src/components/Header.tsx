import React, { Fragment } from 'react'
import '../styles/css/header.css'
import Logo from '../assets/images/nullchemy-logo.png'
import { Link } from 'react-router-dom'

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
                <div className="headerNavigation">
                  <li className="headerLink">
                    <Link to="/" >Home</Link>
                  </li>
                  <li className="headerLink">
                    <Link to="/" >About us</Link>
                  </li>
                  <li className="headerLink">
                    <Link to="/" >Resources</Link>
                  </li>
                  <li className="headerLink">
                    <Link to="/" >Services</Link>
                  </li>
                  <li className="headerLink">
                    <Link to="/" >Blog</Link>
                  </li>
                  <li className="headerLink">
                    <Link to="/" >Contact us</Link>
                  </li>
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