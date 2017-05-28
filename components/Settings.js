import React, { Component } from 'react'
import { connect } from 'react-redux'
import { lighten, darken } from 'polished'
import vars from '../utils/vars'
import { generateKey } from '../utils/api_utils'
import { setDB } from '../actions'

const { colors } = vars

class Settings extends Component {
  state = {
    settingsWindowOpen: false
  }

  toggleSettingsWindow = _ => {
    this.setState(pstate => ({
      settingsWindowOpen: !pstate.settingsWindowOpen
    }))
  }

  updateValue = forField => e => {
    this.setState({
      [forField]: e.target.value
    })
  }

  generateKey = async _ => {
    if (
      this.props.globalState &&
      this.props.globalState.db &&
      this.props.globalState.db.id
    ) {
      const data = await generateKey(this.props.globalState.itemList)
      this.setState({
        key: data.fields.SecretKey
      })
      this.props.setDB(data)
    }
  }

  render() {
    return (
      <div className="Settings">
        <button
          className="Settings__gear"
          onClick={this.toggleSettingsWindow}
          aria-label="Open settings"
        />
        {this.state.settingsWindowOpen &&
          <div className="Settings__window">
            <button
              className="Settings__close"
              onClick={this.toggleSettingsWindow}
              aria-label="Close Settings"
            />

            <div className="Settings__window-inner">
              <label className="d-flex">
                Secret Key:
                <input
                  className="Settings__secretKeyInput"
                  onChange={this.updateValue('secret key')}
                  value={this.state.secretKey}
                />
              </label>
              <div className="d-flex">
                <button
                  className="Settings__generateKey"
                  onClick={this.generateKey}>
                  Generate Key
                </button>
                {' '}
                <span className="Settings__key">{this.state.key}</span>
              </div>
            </div>
          </div>}
        <style jsx>{`
          .Settings {
            position: absolute;
            top: -1.5rem;
            right: -.5rem;
          }
          .Settings__gear {
            margin: 0 0 0 10px;
            height: 1.6rem;
            width: 1.6rem;
            border: none;
            background: no-repeat url('/static/assets/gear.svg');
            color: var(--gray);
          }

          .Settings__close {
            position: absolute;
            top: 1rem;
            right: .75rem;
            margin: 0 0 0 10px;
            height: 1.6rem;
            width: 1.6rem;
            border: none;
            background: no-repeat url('/static/assets/x.svg');
            color: var(--red)
          }

          .Settings__window {
            width: 100vw;
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 5;
            background-color: ${lighten(0.3, colors.bg)};
            padding: 3rem;
          }
          .Settings__secretKeyInput {
            appearance: none;
            background-color: var(--inputColor);
            color: var(--white);
            font-size: 1.1rem;
            border: none;
            height: 2rem;
          }
          .d-flex {
            display: flex;
            font-size: 1.2rem;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
          }

          .Settings__generateKey {
            color: var(--white);
            background-color: var(--green);
            border: none;
            border-radius: 1rem;
            padding: .5rem 1.5rem;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => ({ globalState: state }), { setDB })(Settings)
