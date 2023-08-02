import React, { Fragment, useState } from 'react'
import '../styles/css/sidebar.css'
import { ReactComponent as Angles } from '../assets/svg/angles-right-solid.svg'

const Sidebar = () => {
  const [sdWidth, setSdWidth] = useState(false)

  return (
    <Fragment>
      <div className={sdWidth ? 'sidebar' : 'sidebar sidebarMin'}>
        <Angles
          className="wkspaceAngles"
          onClick={() => {
            setSdWidth(!sdWidth)
          }}
        />
      </div>
    </Fragment>
  )
}

export default Sidebar
