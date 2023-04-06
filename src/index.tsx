import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/css/globals.css'
import { Provider } from 'react-redux'
import { store } from './state/store'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

serviceWorkerRegistration.unregister()
