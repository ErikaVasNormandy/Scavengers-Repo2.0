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
			<div id = "tileComponent">

 
                {/* Top Part of the "Photo" */}
					<div className ="row">
						<div className = "col s8 m8 l8">
							<h5>{this.props.titleProp}</h5>
						</div>


						<div className = "col s4 m4 l4 baseDateStamp">
							{displayDate}
						</div>
					</div>
						

 			<div className="displayText" dangerouslySetInnerHTML={this.createMarkup(this.props.bodyProp)} />

				<button><a href={this.props.buttonProp}>Full Page {this.props.buttonProp}</a></button>
 	
			</div>

			)
	}

}

export default TileComponent
