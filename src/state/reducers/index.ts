import { combineReducers } from 'redux'
import themeReducer from './themeReducer'
import modalReducer from './modalReducer'
import loggedReducer from './loggedReducer'
import emailReducer from './registerEmailTmp'

const allReducers = combineReducers({
  register_email_tmp: emailReducer,
  theme: themeReducer,
  modal: modalReducer,
  logged: loggedReducer,
})

export default allReducers
