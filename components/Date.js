import React from 'react'
import { connect } from 'react-redux'
import { setDate, resetAll } from '../actions.js'
import { getDate } from '../reducers/date.js'
import moment from 'moment'
import styled from 'emotion/react'

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 40px 0;
  font-size: var(--headingFontSize);
`
const Calendar = styled.div`
  display: flex;
  align-items: center;
`

const My = styled.div`padding: 0 0 0 5px;`

const Day = styled.div`
  font-size: var(--bigFontSize);
  font-weight: bold;
`

const Month = styled.div`font-weight: bold;`

class Date extends React.Component {
  componentDidMount() {
    this.setDate()
  }

  setDate = () => {
    const date = {
      day: moment().date(),
      month: moment().format('MMM'),
      year: moment().year(),
      weekday: moment().format('dddd'),
    }
    const local = localStorage.getItem('date')
    this.checkDate(local)
    this.props.setDate(date)
  }

  checkDate = local => {
    if (local !== null && moment(local).isBefore(moment().format('MM-DD-YYYY'))) {
      this.props.resetAll()
    }
    localStorage.setItem('date', moment().format('MM-DD-YYYY'))
  }

  render() {
    return (
      <DateWrapper>
        <Calendar>
          <Day>
            {this.props.date.day}
          </Day>
          <My>
            <Month>
              {this.props.date.month}
            </Month>
            <div>
              {this.props.date.year}
            </div>
          </My>
        </Calendar>
        <div>
          {this.props.date.weekday}
        </div>
      </DateWrapper>
    )
  }
}

const mapStateToProps = state => ({
  date: getDate(state),
})

const mapDispatchToProps = dispatch => ({
  setDate: date => dispatch(setDate(date)),
  resetAll: item => dispatch(resetAll(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Date)
