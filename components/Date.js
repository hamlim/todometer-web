import React from 'react';
import { connect } from 'react-redux';
import { setDate, resetAll } from '../actions.js';
import { getDate } from '../reducers/date.js';
import moment from 'moment';

class Date extends React.Component {
  componentDidMount() {
    this.setDate();
  }

  setDate = () => {
    const date = {
      day: moment().date(),
      month: moment().format('MMM'),
      year: moment().year(),
      weekday: moment().format('dddd')
    };
    const local = localStorage.getItem('date');
    this.checkDate(local);
    this.props.setDate(date);
  }

  checkDate = (local) => {
    if (local !== null && moment(local).isBefore(moment().format('MM-DD-YYYY'))) {
      this.props.resetAll();
    }
    localStorage.setItem('date', moment().format('MM-DD-YYYY'));
  }

  render() {
    return <div className="date">
      <div className="calendar">
        <div className="day">{this.props.date.day}</div>
        <div className="my">
          <div className="month">{this.props.date.month}</div>
          <div className="year">{this.props.date.year}</div>
        </div>
      </div>
      <div className="today">{this.props.date.weekday}</div>
      <style jsx>{`
        .date {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 0 40px 0;
          font-size: var(--headingFontSize);
        }
        .calendar {
          display: flex;
          align-items: center;
        }
        .day {
          font-size: var(--bigFontSize);
          font-weight: bold;
        }
        .my {
          padding: 0 0 0 5px;
        }
        .month {
          font-weight: bold;
        }
      `}</style>
    </div>;
  }
}

const mapStateToProps = state => ({
  date: getDate(state)
});

const mapDispatchToProps = dispatch => ({
  setDate: (date) => dispatch(setDate(date)),
  resetAll: (item) => dispatch(resetAll(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Date);