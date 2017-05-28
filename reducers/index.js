import { combineReducers } from 'redux'

import { SET_DB } from '../actions'

import ItemListReducer from './item-list'
import DateReducer from './date'
// import WorkspacesReducer from './workspaces'
//
const dbReducer = (state = {}, { type, data }) => {
  switch (type) {
    case SET_DB:
      return data
    default:
      return state
  }
}

const rootReducer = combineReducers({
  itemList: ItemListReducer,
  date: DateReducer,
  db: dbReducer
})

export default rootReducer
