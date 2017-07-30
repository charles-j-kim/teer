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
          <button id="search" type="submit" onClick={this.onClick}> Search </button>
        </form>
    	</div>
  	)
  }
}

export default Filter;