import React, { Fragment, ReactNode } from 'react'
import '../styles/css/layout.css'

interface layout {
  header: ReactNode
  sidebar: ReactNode
  playarea: ReactNode
}

const Layout: React.FC<{ children: layout }> = ({ children }) => {
  return (
    <Fragment>
      <div className="layout">
        <div className="layoutContainer">
          <div className="layoutWrapper">
            <div className="layoutSidebar">
              <aside>{children.sidebar}</aside>
            </div>
            <div className="layoutRight">
              <header>{children.header}</header>
              <main>{children.playarea}</main>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Layout
