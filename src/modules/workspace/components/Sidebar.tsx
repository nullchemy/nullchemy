import React, { Fragment } from 'react'
import '../styles/css/sidebar.css'
import { ReactComponent as Angles } from '../assets/svg/angles-right-solid.svg'

const Sidebar = () => {
  return (
    <Fragment>
      <div className="sidebar">
        <Angles className="wkspaceAngles" />
      </div>
    </Fragment>
  )
}

export default Sidebar
