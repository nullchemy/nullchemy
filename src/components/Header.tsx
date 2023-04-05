import React, { Fragment } from 'react'
import '../styles/css/header.css'
import Logo from '../assets/images/nullchemy_logo.png'
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
                    <Link to="/" className="headerLogoLink">
                      <img src={Logo} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="headerNavigation">
                  <li className="headerLink">
                    <Link to="/" className="header_link_anchor" >Home</Link>
                  </li>
                  <li className="headerLink">
                    <Link to="/about" className="header_link_anchor" >About us</Link>
                  </li>
                  <li className="headerLink">
                    <Link to="/blogs" className="header_link_anchor" >Blog</Link>
                  </li>
                  <li className="headerLink">
                    <Link to="/contact" className="header_link_anchor" >Contact us</Link>
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