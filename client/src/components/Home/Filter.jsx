import React from 'react';
import ReactDOM from 'react-dom';
import 'react-date-picker/index.css'
import { DateField, Calendar } from 'react-date-picker'
import moment from 'moment'
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'



class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      date: "",
      isOpen: false
    }
    this.handleClick = this.handleClick.bind(this);
	}

  handleClick(){
    console.log("Im being clicked on", this)

    this.setState({
      isOpen: !this.state.isOpen
    })
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
          <input id="location" type="text" placeholder="Pick a city"/>
          <input id="date" type="text" placeholder="Pick a date" value={this.state.date} onClick={this.handleClick} />
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