import React, { Fragment, useEffect } from 'react'
import Routes from './Routes'
import { useAppSelector } from './state/hooks'
import * as ReactGA from 'react-ga'
import 'animate.css/animate.min.css'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-JXF0YL9XMJ')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const theme = useAppSelector((state) => state.theme)

  return (
    <Fragment>
      <div className="app" data-theme={theme}>
        <ReactNotifications />
        <Routes />
      </div>
    </Fragment>
  )
}

export default App
