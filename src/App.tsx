import React, { Fragment, useEffect, useState } from 'react'
import Routes from './Routes'
import { useAppSelector } from './state/hooks'
import * as ReactGA from 'react-ga'
import 'animate.css/animate.min.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from './components/Modal'

ReactGA.initialize('G-JXF0YL9XMJ')
const App = () => {
  const [mod, setMod] = useState(false)
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const theme = useAppSelector((state) => state.theme)

  return (
    <Fragment>
      <div className="app" data-theme={theme}>
        <ToastContainer hideProgressBar />
        {mod && (
          <Modal onClose={() => setMod(false)}>
            <div className="modalPopCont">
              <p>this is my modal content</p>
            </div>
          </Modal>
        )}
        <Routes />
      </div>
    </Fragment>
  )
}

export default App
