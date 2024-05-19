import React, { Fragment, useState } from 'react'
import '../styles/css/sidebar.css'
import { ReactComponent as Angles } from '../assets/svg/angles-right-solid.svg'
import { ReactComponent as Envelope } from '../../../assets/svg/envelope.svg'

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
        <div className="sidebar_navigation">
          <div className="sidebar_nav_wrapper">
            <div className="sidebar_top">
              <div className="sidebar_nav_item">
                <div className="sdbaric_cont">
                  <Envelope className="sidebarIc" />
                </div>
                <span className="sdbarText">Inbox</span>
              </div>
              <div className="sidebar_nav_item">
                <div className="sdbaric_cont">
                  <Envelope className="sidebarIc" />
                </div>
                <span className="sdbarText">Inbox</span>
              </div>
              <div className="sidebar_nav_item">
                <div className="sdbaric_cont">
                  <Envelope className="sidebarIc" />
                </div>
                <span className="sdbarText">Inbox</span>
              </div>
              <div className="sidebar_nav_item">
                <div className="sdbaric_cont">
                  <Envelope className="sidebarIc" />
                </div>
                <span className="sdbarText">Inbox</span>
              </div>
            </div>
            <div className="sidebar_bottom">
              <Envelope className="sidebarIc" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Sidebar
