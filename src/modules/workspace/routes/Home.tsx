import React, { Fragment, useEffect } from 'react'
import Maintainance from '../../../components/Maintainance'
import ReactGA from 'react-ga'

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <div className="wsHome">
        <h1 style={{ textAlign: 'center' }}>Your Workspace Home</h1>
      </div>
      <Maintainance />
    </Fragment>
  )
}

export default Home
