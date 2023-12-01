import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/css/globals.css'
import { Provider } from 'react-redux'
import { persistor, store } from './state/store'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

serviceWorkerRegistration.register()
