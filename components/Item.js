import React from 'react'
import styled from 'emotion/react'
import { keyframes } from 'emotion'

const click = keyframes`
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
`

const ItemWrapper = styled.div`
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
`

const ItemName = styled.div`
  max-width: 50vw;
  word-break: break-all;
`

const DefaultButton = styled.button`
  position: relative;
  margin: 0 0 0 10px;
  height: 1.6rem;
  border: none;
  &:after {
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
  &:focus {
    outline: none;
    &:after {
      animation: ${click} .5s;
    }
  }
`

const DeleteButton = styled(DefaultButton)`
  width: 1.6rem;
  background: no-repeat url('/static/assets/x.svg');
  &:after {
    background: var(--red);
  }
`

const PauseButton = styled(DefaultButton)`
  width: 1.6rem;
  background: no-repeat url('/static/assets/pause.svg');
  &:after {
    background: var(--yellow);
  }
`

const CompleteButton = styled(DefaultButton)`
  width: 2rem;
  background: no-repeat url('/static/assets/check.svg');
  &:after {
    background: var(--green);
  }
`

const UndoButton = styled(DefaultButton)`
  width: 24px;
  fill: var(--blue);
  background: no-repeat url('/static/assets/repeat.svg');,
`
export default class Item extends React.Component {
  renderButtons = () => {
    if (!this.props.paused && !this.props.completed) {
      return (
        <div>
          <DeleteButton aria-label="delete" onClick={() => this.props.onDelete(this.props.item)} />
          <PauseButton aria-label="pause" onClick={() => this.props.onPause(this.props.item)} />
          <CompleteButton aria-label="done" onClick={() => this.props.onComplete(this.props.item)} />
        </div>
      )
    } else if (!this.props.paused && this.props.completed) {
      return (
        <div>
          <DeleteButton aria-label="delete" onClick={_ => this.props.onDelete(this.props.item)} />
          <UndoButton aria-label="undo" onClick={_ => this.props.onUndo(this.props.item)} />
        </div>
      )
    }
    return (
      <div>
        <DeleteButton aria-label="delete" onClick={() => this.props.onDelete(this.props.item)} />
        <CompleteButton aria-label="done" onClick={() => this.props.onComplete(this.props.item)} />
      </div>
    )
  }

  render() {
    return (
      <ItemWrapper>
        <ItemName>
          {this.props.text}
        </ItemName>
        {this.renderButtons()}
      </ItemWrapper>
    )
  }
}
