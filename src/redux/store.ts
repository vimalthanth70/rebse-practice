import {createStore} from 'redux'
import cakeReducer from './Reducers/cakeReducer'

const store = createStore(cakeReducer)

export default store