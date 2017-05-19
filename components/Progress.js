import React from 'react'
import { Line } from '../lib/react-progressbar'
import vars from '../utils/vars'

export default class Progress extends React.Component {
  render() {
    let Bar = Line
    let options1 = {
      strokeWidth: 2,
      color: vars.colors.green
    }
    let options2 = {
      strokeWidth: 2,
      color: vars.colors.yellow
    }

    return (
      <div className="progress">
        <Bar
          progress={this.props.paused}
          options={options2}
          initialAnimate={true}
          containerClassName={'pause-bar'}
        />
        <Bar
          progress={this.props.completed}
          options={options1}
          initialAnimate={true}
          containerClassName={'complete-bar'}
        />
        <style jsx global>{`
          .progress {
            position: relative;
            width: 100%;
            height: 15px;
            margin: 0 0 20px;
            background: var(--inputColor);
            border-radius: 3px;
          }
          .progress .pause-bar, .complete-bar {
            position: absolute;
            top: 0;
            width: 100%;
          }
          .progress .pause-bar, .complete-bar svg {
            height: 15px;
            border-radius: 3px;
          }
        `}</style>
      </div>
    )
  }
}
