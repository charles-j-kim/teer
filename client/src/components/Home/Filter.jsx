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
      date: ""
    }
	}

  handleFocus(){
    console.log("Im being focused on")
  }

	render () {

    const onChange = (dateString, { dateMoment, timestamp }) => {
      this.setState({
        date:dateString
      })
    }

    return (
    	<div className="filter">
    		<form className="filter-form">
          <input id="location" type="text" placeholder="Pick a city"/>
          <input id="date" type="text" placeholder="Pick a date" value={this.state.date} onFocus={() => this.handleFocus}/>
          <button id="search" type="submit" onClick={this.onClick}> Search </button>


        </form>
        <Calendar
          dateFormat="YYYY-MM-DD"
          date={this.state.date}
          onChange={onChange}
        />
    	</div>
  	)
  }
}

export default Filter;