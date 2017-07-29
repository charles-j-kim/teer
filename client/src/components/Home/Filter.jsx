import React from 'react';
import ReactDOM from 'react-dom';

class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render () {
    return (
    	<div class="filter">
    		<form className="filter-form">
          <input id="location" type="text" placeholder="Pick a city"/>
          <input id="date" type="text" placeholder="Pick a date"/>
        </form>
    	</div>
  	)
  }
}

export default Filter;