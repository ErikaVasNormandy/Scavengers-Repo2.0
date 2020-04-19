import React from 'react';
import axios from 'axios';
import TileComponent from '../BaseTile/TileComponent';
import {styles} from './projects.css';

import ReactMarkdown from 'react-markdown';




class ProjectsCard extends React.Component{
	constructor(props){
		super(props)
		this.state={
			cardtitle:"",
			briefdescription:"",
			link:"",
			tags:[],
			bgimg:"",
		}
		this.myDivToFocus = React.createRef()

	}




	componentDidMount(){


}
	componentWillMount() {

  }

	render()
	{
		const bg0 = { backgroundImage: `url(${ this.props.bgimg })`}

		return(
			<div className="projectCard" style={bg0}>
				<a href={this.props.link}>
				<div className="linkwrapper">

				<h1 className="projectTitle">{this.props.cardtitle}</h1>
								<p>{this.props.tags}</p>
				<p>{this.props.briefdescription}</p>
				</div>
				</a>
			</div>			
			
		);
	}	
}

export default ProjectsCard;
