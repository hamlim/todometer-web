import React, { Component } from "react";
import { lighten } from "polished";
import variables from "../utils/vars";
import { connect } from "react-redux";

import { selectWorkspace } from "../actions";
import styled from "@emotion/styled";

const Workspaces = styled.footer`
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
`;
const WorkspacesLabel = styled.label`
  display: block;
  font-size: 1.4rem;
`;
const WorkspacesSelect = styled.select`
  appearance: none;
  background-color: transparent;
  border: solid 2px var(--blue);
  border-radius: 1rem;
`;

class FooterComponent extends Component {
  handleSelectWorkspace = (e) => {
    console.log(e);
    debugger;
    const workspace = e.target.value;
    this.props.handleSelectWorkspace(workspace);
  };
  render = () => {
    let { workspaces } = this.props;
    workspaces = workspaces.workspaces;
    console.log(workspaces);
    return (
      <Workspaces>
        <WorkspacesLabel htmlFor="workspacesSelect">
          Workspaces:
        </WorkspacesLabel>
        <WorkspacesSelect
          id="workspacesSelect"
          onChange={this.handleSelectWorkspace}
        >
          {workspaces.workspaces.map((workspace) => (
            <option key={workspace.name} value={workspace.name}>
              {workspace.name}
            </option>
          ))}
        </WorkspacesSelect>
      </Workspaces>
    );
  };
}

const mapStateToProps = (state) => ({
  workspaces: state.workspaces,
});

const mapDispatchToProps = {
  handleSelectWorkspace: selectWorkspace,
};

const Footer = connect(mapStateToProps, mapDispatchToProps)(FooterComponent);

export default Footer;
