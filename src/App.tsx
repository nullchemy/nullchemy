import React, { Fragment } from 'react'
import Routes from './Routes'
import { useAppSelector } from './state/hooks'

const App = () => {
  const theme = useAppSelector((state) => state.theme)

  return (
    <Fragment>
      <div className="app" data-theme={theme}>
        <Routes />
      </div>
    </Fragment>
  )
}

export default App
