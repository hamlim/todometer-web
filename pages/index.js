import React from 'react'
import Date from '../components/Date'
import ItemList from '../components/ItemList'

// import Footer from '../components/Footer'

import Settings from '../components/Settings'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { loadState, saveState } from '../local-storage'

const persistedState = loadState()
let store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(createLogger({ collapsed: true })))
)

store.subscribe(() => {
  saveState(store.getState())
})

export default class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div id="app">
          <Settings />
          <Date />
          <ItemList />
        </div>
      </Provider>
    )
  }
}
