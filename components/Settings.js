import React, { Component } from "react";
import { connect } from "react-redux";
import { lighten, darken } from "polished";
import vars from "../utils/vars";
import { generateKey } from "../utils/api_utils";
import { setDB } from "../actions";

const { colors } = vars;

import styled from "@emotion/styled";

const SettingsWrapper = styled.div`
  position: absolute;
  top: -1.5rem;
  right: -0.5rem;
`;
const Gear = styled.button`
  margin: 0 0 0 10px;
  height: 1.6rem;
  width: 1.6rem;
  border: none;
  background: no-repeat url("/static/assets/gear.svg");
  color: var(--gray);
`;

const SettingsClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 0.75rem;
  margin: 0 0 0 10px;
  height: 1.6rem;
  width: 1.6rem;
  border: none;
  background: no-repeat url("/static/assets/x.svg");
  color: var(--red);
`;

const SettingsWindow = styled.div`
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background-color: ${lighten(0.3, colors.bg)};
  padding: 3rem;
`;
const SecretInput = styled.input`
  appearance: none;
  background-color: var(--inputColor);
  color: var(--white);
  font-size: 1.1rem;
  border: none;
  height: 2rem;
`;
const FlexContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const GetKey = styled.button`
  color: var(--white);
  background-color: var(--green);
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
`;

class Settings extends Component {
  state = {
    settingsWindowOpen: false,
  };

  toggleSettingsWindow = (_) => {
    this.setState((pstate) => ({
      settingsWindowOpen: !pstate.settingsWindowOpen,
    }));
  };

  updateValue = (forField) => (e) => {
    this.setState({
      [forField]: e.target.value,
    });
  };

  generateKey = async (_) => {
    if (
      this.props.globalState &&
      this.props.globalState.db &&
      this.props.globalState.db.id
    ) {
      const data = await generateKey(this.props.globalState.itemList);
      this.setState({
        key: data.fields.SecretKey,
      });
      this.props.setDB(data);
    }
  };

  render() {
    return (
      <SettingsWrapper>
        <Gear onClick={this.toggleSettingsWindow} aria-label="Open settings" />
        {this.state.settingsWindowOpen && (
          <SettingsWindow>
            <SettingsClose
              onClick={this.toggleSettingsWindow}
              aria-label="Close Settings"
            />

            <div className="Settings__window-inner">
              <FlexContainer>
                Secret Key:
                <SecretInput
                  onChange={this.updateValue("secret key")}
                  value={this.state.secretKey}
                />
              </FlexContainer>
              <FlexContainer>
                <GetKey onClick={this.generateKey}>Generate Key</GetKey>{" "}
                <span className="Settings__key">{this.state.key}</span>
              </FlexContainer>
            </div>
          </SettingsWindow>
        )}
      </SettingsWrapper>
    );
  }
}

export default connect((state) => ({ globalState: state }), { setDB })(
  Settings
);
