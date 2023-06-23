import { combineReducers } from 'redux'
import themeReducer from './themeReducer'
import modalReducer from './modalReducer'

const allReducers = combineReducers({
  theme: themeReducer,
  modal: modalReducer,
})

export default allReducers
