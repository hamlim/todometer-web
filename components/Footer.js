import React, { Component } from 'react'
import { lighten } from 'polished'
import variables from '../utils/vars'
import { connect } from 'react-redux'

import { selectWorkspace } from '../actions'

class FooterComponent extends Component {
  handleSelectWorkspace = e => {
    console.log(e)
    debugger
    const workspace = e.target.value
    this.props.handleSelectWorkspace(workspace)
  }
  render = () => {
    let { workspaces } = this.props
    workspaces = workspaces.workspaces
    console.log(workspaces)
    return (
      <footer className="workspaces">
        <label className="workspaces__label" htmlFor="workspacesSelect">
          Workspaces:
        </label>
        <select
          id="workspacesSelect"
          className="workspaces__select"
          onChange={this.handleSelectWorkspace}>
          {workspaces.workspaces.map(workspace => (
            <option key={workspace.name} value={workspace.name}>
              {workspace.name}
            </option>
          ))}
        </select>
        <style jsx>{`
          .workspaces {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 5rem;
            line-height: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 2rem;
            z-index: 3;
            width: 100vw;
            background-color: ${lighten(0.3, variables.colors.bg)};
          }
          .workspaces__label {
            display: block;
            font-size: 1.4rem;
          }
          .workspaces__select {
            appearance: none;
            background-color: transparent;
            border: solid 2px var(--blue);
            border-radius: 1rem;
          }
        `}</style>
      </footer>
    )
  }
}

const mapStateToProps = state => ({
  workspaces: state.workspaces
})

const mapDispatchToProps = {
  handleSelectWorkspace: selectWorkspace
}

const Footer = connect(mapStateToProps, mapDispatchToProps)(FooterComponent)

export default Footer
