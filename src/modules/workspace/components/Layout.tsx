import React, { Fragment, ReactNode } from 'react'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <main>{children}</main>
    </Fragment>
  )
}

export default Layout
