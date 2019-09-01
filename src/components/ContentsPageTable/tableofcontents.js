import React, { Component } from 'react';

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class TableOfContentsComponent extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state =
			{
				field: "value"		
			}
		this.bringDivToFocus = React.createRef()
	}	

	handleOnClick = (event) =>{
		if(this.bringDivToFocus.current){
			this.bringDivToFocus.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
			})
		}
	}
 
	render()
	{
		
		return(
			<div>
			<button onClick={this.handleOnClick} >CLick Me</button>
				Props go here
				<p>Body Component right here</p>
				<div ref={this.bringDivToFocus}>
					Cape Cod
				</div>

				
			</div>		
		);
	}	
}

	

export default TableOfContentsComponent



