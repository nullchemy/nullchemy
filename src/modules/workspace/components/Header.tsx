import React, { Fragment } from 'react'
import '../styles/css/header.css'
import { ReactComponent as Logout } from '../assets/svg/right-from-bracket-solid.svg'
import NullChemy from '../assets/images/nullchemy_new_logo_3d.png'

const Header = () => {
  return (
    <Fragment>
      <div className="wksheader">
        <div className="wksContainer">
          <div className="wksWrapper">
            <div className="wksLeft">
              <img src={NullChemy} className="wksImgLogo" alt="" />
            </div>
            <div className="wksRight">
              <div className="wksHProfile"></div>
              <Logout className="wksLogoutIc" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
