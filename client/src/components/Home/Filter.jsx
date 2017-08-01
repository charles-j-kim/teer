import React from 'react';
import ReactDOM from 'react-dom';
import 'react-date-picker/index.css'
import { DateField, Calendar } from 'react-date-picker'
import moment from 'moment'
import Autocomplete from './Autocomplete.jsx'
import { withRouter} from 'react-router';

class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      date: "",
      isOpen: false
    }
    this.handleDateClick = this.handleDateClick.bind(this);
    this.cancelCalendar = this.cancelCalendar.bind(this);
    this.filterInput = this.filterInput.bind(this);
	}

  handleDateClick(){
    console.log("Im being clicked on", this)

    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  cancelCalendar() {
    if(this.state.isOpen){
      this.setState({
        isOpen: false
      })
    }
  }

  filterInput(e) {
    e.preventDefault();
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
          <Autocomplete onClick={this.cancelCalendar.bind(this)}>
          </Autocomplete>
          <input id="date" type="text" placeholder="Pick a date" value={this.state.date} onClick={this.handleDateClick} />
          <button id="search" onClick={this.filterInput} > Search </button>
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

export default withRouter(Filter);
