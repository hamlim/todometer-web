import React from 'react'

export default class Item extends React.Component {
  renderButtons = () => {
    if (!this.props.paused && !this.props.completed) {
      return (
        <div className="buttons">
          <button
            name="delete"
            className="delete"
            onClick={() => this.props.onDelete(this.props.item)}
          />
          <button
            name="pause"
            className="pause"
            onClick={() => this.props.onPause(this.props.item)}
          />
          <button
            className="complete"
            name="done"
            onClick={() => this.props.onComplete(this.props.item)}
          />
        </div>
      )
    } else if (!this.props.paused && this.props.completed) {
      console.log('rendering done items')
      return (
        <div className="buttons">
          <button
            name="delete"
            className="delete"
            onClick={_ => this.props.onDelete(this.props.item)}
          />
          <button
            className="undo"
            name="undo"
            onClick={_ => this.props.onUndo(this.props.item)}
          />
        </div>
      )
    }
    return (
      <div className="buttons">
        <button
          className="delete"
          name="delete"
          onClick={() => this.props.onDelete(this.props.item)}
        />
        <button
          className="complete"
          name="done"
          onClick={() => this.props.onComplete(this.props.item)}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="item">
        <div className="item-name">{this.props.text}</div>
        {this.renderButtons()}
        <style jsx global>{`
          .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 0 10px 0;
            padding: 20px;
            width: 100%;
            min-height: 70px;
            background: var(--itemColor);
            border: none;
            border-radius: 3px;
            box-sizing: border-box;
            font-size: var(--itemFontSize);
          }
          .item-name {
            max-width: 50vw;
            word-break: break-all;
          }
          .buttons button {
            position: relative;
            margin: 0 0 0 10px;
            height: 1.6rem;
            border: none;
          }
          .buttons button:focus {
            outline: 1px solid var(--)
          }
          .buttons button.delete {
            width: 1.6rem;
            background: no-repeat url('/static/assets/x.svg');
          }
          .buttons button.delete:after {
            background: var(--red);
          }
          .buttons button.pause {
            width: 1.6rem;
            background: no-repeat url('/static/assets/pause.svg');
          }
          .buttons button.pause:after {
            background: var(--yellow);
          }
          .buttons button.complete {
            width: 2rem;
            background: no-repeat url('/static/assets/check.svg');
          }
          .buttons button.complete:after {
            background: var(--green);
          }

          .buttons button.undo {
            width: 24px;
            fill: var(--blue);
            background: no-repeat url('/static/assets/repeat.svg');
          }
          .buttons button.undo:after {
            background: var(--blue);
          }

          .buttons button:after {
            display: block;
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 100%;
            width: 0;
            height: 0;
          }
          .buttons button:focus {
            outline: none;
          }
          .buttons button:focus:after {
            animation: click .5s;
          }
          @keyframes click {
            0% {
              opacity: 0;
              width: 0;
              height: 0;
            }
            50% {
              opacity: .5;
            }
            100% {
              opacity: 0;
              width: 30px;
              height: 30px;
            }
          }
        `}</style>
      </div>
    )
  }
}
