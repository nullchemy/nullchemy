import React, { Fragment, useEffect } from 'react'
import ReactGA from 'react-ga'

const Profile = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <div className="profile"></div>
    </Fragment>
  )
}

export default Profile
