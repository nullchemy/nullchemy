import React, { Fragment } from 'react'
import Footer from '../components/Footer'

const ClientDashboard: React.FC = () => {
  return (
    <Fragment>
      <div className="cdashboard">
        <div className="cdashcontainer">
          <div className="cdashwrapper"></div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default ClientDashboard
