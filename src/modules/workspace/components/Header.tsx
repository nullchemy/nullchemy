import React, { Fragment } from 'react'
import '../styles/css/header.css'
import { ReactComponent as Logout } from '../assets/svg/right-from-bracket-solid.svg'

const Header = () => {
  return (
    <Fragment>
      <div className="wksheader">
        <div className="wksContainer">
          <div className="wksWrapper">
            <div className="wksLeft"></div>
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
