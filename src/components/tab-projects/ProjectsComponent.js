import React from 'react';


class ProjectsComponent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			field: "value"
		}
		this.myDivToFocus = React.createRef()
	}
	
	handleOnClick = (event) =>{
		if(this.myDivToFocus.current){
			this.myDivToFocus.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
			})
		}
	}
 
	render()
	{
		
		return(
			<div>
			<h1>Projects</h1>
			<button onClick={this.handleOnClick} >CLick Me</button>

				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<div ref={this.myDivToFocus}>
					Cape Cod
				</div>

				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>


				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>
			
				<p>Body Component right here</p>
				<p>Body Component right here</p>
			</div>		
		);
	}	
}

export default ProjectsComponent;
