import { SELECT_WORKSPACE } from '../actions'

// initialize state
const initialState = {
  workspaces: {
    selectedWorkspace: {
      name: 'default'
    },
    workspaces: [{ name: 'default' }]
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_WORKSPACE:
      return {
        ...state,
        selectWorkspace: action.workspace
      }
    default:
      return state
  }
}

// selectors
export const getSelectedWorkspace = state => {
  return state.workspaces.selectedWorkspace
}
