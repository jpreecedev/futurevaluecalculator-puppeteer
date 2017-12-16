import { createStore, combineReducers } from 'redux'

import { InvestmentReducer } from './reducers'

const reducers = combineReducers({
  investmentState: InvestmentReducer
})

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
