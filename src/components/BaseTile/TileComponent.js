import React, { Component } from 'react';

import moment from 'moment';

import {styles} from './tile.css';





class TileComponent extends Component {
	constructor(props){
		super(props);
		this.createMarkup = this.createMarkup.bind(this)
	}
	
	createMarkup(input){return{ __html: input}
	}
	

	
	state = {

		titleProp: "", 
		bodyProp: "",
		dateProp: Date(),
		buttonProp: ""
	}


	render(){
		const displayDate = moment(this.props.dateProp).format('ddd, DD-MMM-YYYY')

		return(
			<div className = "tileComponent">

 
                {/* Top Part of the "Photo" */}

						

 			<div className="displayText" dangerouslySetInnerHTML={this.createMarkup(this.props.bodyProp)} />

			<button className="fullPage"><a href={this.props.buttonProp}>Full Page -></a></button>
 	
			</div>

			)
	}

}

export default TileComponent
