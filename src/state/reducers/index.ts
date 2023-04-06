import { combineReducers } from 'redux'
import themeReducer from './themeReducer'

const allReducers = combineReducers({
    theme: themeReducer,
})

export default allReducers