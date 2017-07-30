import React from 'react';
import ReactDOM from 'react-dom';
import 'react-date-picker/index.css'
import { DateField, Calendar } from 'react-date-picker'
import moment from 'moment'

class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      date: "",
      isOpen: false
    }
    this.handleDateClick = this.handleDateClick.bind(this);
    this.cancelCalendar = this.cancelCalendar.bind(this);
	}

  handleDateClick(){
    console.log("Im being clicked on", this)

    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  cancelCalendar(){
    if(this.state.isOpen){
      this.setState({
        isOpen: false
      })
    }

  }

	render () {

    const onChange = (dateString, { dateMoment, timestamp }) => {
      this.setState({
        date:dateString,
        isOpen: !this.state.isOpen
      })
    }

    return (
    	<div className="filter">
    		<form className="filter-form">
          <input id="location" type="text" placeholder="Pick a city" onClick={this.cancelCalendar}/>
          <input id="date" type="text" placeholder="Pick a date" value={this.state.date} onClick={this.handleDateClick} />
          <button id="search" type="submit"> Search </button>
        </form>
        {
          this.state.isOpen && <Calendar
            dateFormat="YYYY-MM-DD"
            date={this.state.date}
            onChange={onChange}
          />
        }
    	</div>
  	)
  }
}

export default Filter;