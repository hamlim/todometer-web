import React from 'react'
import { Line as Bar } from '../lib/react-progressbar'
import vars from '../utils/vars'
import styled from 'emotion/react'
import { injectGlobal } from 'emotion'

injectGlobal`
  .pause-bar,
  .complete-bar {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .pause-bar svg,
  .complete-bar svg {
    height: 15px;
    border-radius: 3px;
  }
`

const ProgressContainer = styled.div`
  position: relative;
  width: 100%;
  height: 15px;
  margin: 0 0 20px;
  background: var(--inputColor);
  border-radius: 3px;
`

export default class Progress extends React.Component {
  options1 = {
    strokeWidth: 2,
    color: vars.colors.green,
  }
  options2 = {
    strokeWidth: 2,
    color: vars.colors.yellow,
  }
  render() {
    return (
      <ProgressContainer>
        <Bar
          progress={this.props.paused}
          options={this.options2}
          initialAnimate={true}
          containerClassName={'pause-bar'}
        />
        <Bar
          progress={this.props.completed}
          options={this.options1}
          initialAnimate={true}
          containerClassName={'complete-bar'}
        />
      </ProgressContainer>
    )
  }
}
