import { combineReducers } from 'redux'
import themeReducer from './themeReducer'
import modalReducer from './modalReducer'
import loggedReducer from './loggedReducer'

const allReducers = combineReducers({
  theme: themeReducer,
  modal: modalReducer,
  logged: loggedReducer,
})

export default allReducers
