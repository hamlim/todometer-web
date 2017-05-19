import React from 'react';

export default class Item extends React.Component {
  renderButtons = () => {
    if (!this.props.paused) {
      return (
        <div className="buttons">
          <button className="delete" onClick={() => this.props.onDelete(this.props.item)}></button>
          <button className="pause" onClick={() => this.props.onPause(this.props.item)}></button>
          <button className="complete" onClick={() => this.props.onComplete(this.props.item)}></button>
        </div>
      );
    }
    return (
      <div className="buttons">
        <button className="delete" onClick={() => this.props.onDelete(this.props.item)}></button>
        <button className="complete" onClick={() => this.props.onComplete(this.props.item)}></button>
      </div>
      );
  }

  render() {
    return (
      <div className="item">
        <div className="item-name">{this.props.text}</div>
        {this.props.paused ? (
          <div className="buttons">
            <button className="delete" onClick={() => this.props.onDelete(this.props.item)}></button>
            <button className="complete" onClick={() => this.props.onComplete(this.props.item)}></button>
          </div>
        ) : (
          <div className="buttons">
            <button className="delete" onClick={() => this.props.onDelete(this.props.item)}></button>
            <button className="pause" onClick={() => this.props.onPause(this.props.item)}></button>
            <button className="complete" onClick={() => this.props.onComplete(this.props.item)}></button>
          </div>
        )}
        <style jsx>{`
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
    );
  }
}