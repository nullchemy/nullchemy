import React, { Fragment } from 'react'
import Maintainance from '../../../components/Maintainance'

const Home = () => {
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
