import React, { Fragment, useEffect, useState } from 'react'
import Routes from './Routes'
import { useAppSelector } from './state/hooks'
import * as ReactGA from 'react-ga'
import 'animate.css/animate.min.css'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Modal from './components/Modal'

const App = () => {
  const [mod, setMod] = useState(false)
  useEffect(() => {
    ReactGA.initialize('G-JXF0YL9XMJ')
    ReactGA.pageview(window.location.pathname + window.location.search)
    setTimeout(() => {
      setMod(true)
    }, 2000)
  }, [])
  const theme = useAppSelector((state) => state.theme)

  return (
    <Fragment>
      <div className="app" data-theme={theme}>
        {mod && (
          <Modal onClose={() => setMod(false)}>
            <div className="modalPopCont">
              <p>this is my modal content</p>
            </div>
          </Modal>
        )}
        <ReactNotifications />
        <Routes />
      </div>
    </Fragment>
  )
}

export default App
