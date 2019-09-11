import React from 'react';
import axios from 'axios';
import TileComponent from '../BaseTile/TileComponent';

import {styles} from './home.css';

import dotenv from 'dotenv';

require('dotenv').config();

class HomeComponent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			field: "value",
			contents: "",
			htmlcontents:"",
			testcontents:"",
			listOfNamesToQuery:[],
			rawActualContents:[],
			queriedHTML: []
		}
		this.myDivToFocus = React.createRef()
		this.getContents = this.getContents.bind(this);


	}
	componentDidMount(){
		this.getContents()

}
	
	handleOnClick = (event) =>{
		if(this.myDivToFocus.current){
			this.myDivToFocus.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
			})
		}
	}

	getContents(){
		/*
		axios.get(' https://api.github.com/repos/erikavasnormandy/ErikaVasNormandy.github.io/contents/HomePosts/firstPost.html').then(res=>{ if(res.data){ 
		//console.log(res.data)
		this.setState({ testcontents: res.data})
			console.log("test contents are at the cusp:", this.state.testcontents) 
 		}})
		
		.catch(err => console.log(err))
		*/
		
		/// Get first a list of all the *.html files in that directory

///	axios.get('https://api.github.com/repos/erikavasnormandy/ErikaVasNormandy.github.io/contents/HomePosts', { headers: {Authorization: `Bearer  `}  }


		axios.get('https://api.github.com/repos/erikavasnormandy/ErikaVasNormandy.github.io/contents/HomePosts', { headers: {Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`}  }
).
			then(res=>{ 
				if(res.data){ 
					this.setState({ 
						contents: res.data
						//htmlcontents: atob(res.data.content)
						})
//					console.log(this.state.contents.length)
					
					var placeholder = this.state.contents.length
					//console.log("Hello from get contents")
					for(var i=0;i<placeholder; i++){
						//console.log("contents are: ", this.state.contents[i])
						var stringQuery = "https://api.github.com/repos/erikavasnormandy/ErikaVasNormandy.github.io/contents/HomePosts/" + this.state.contents[i].name
						//console.log(stringQuery)
						axios.get(stringQuery, { headers: {Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`}  })
						.then(res=>{
							if(res.data){
								this.setState({queriedHTML: this.state.queriedHTML.concat(res.data)})
								//this.setState({ queriedHTML: this.state.queriedHTML.concat(atob(res.data.content))})
								//console.log("calling from the getContents inner loop ", this.state.queriedHTML)
							}
						})
						.catch(err =>console.log(err))
					}
					

 			}})
		
		.catch(err => console.log(err))
		

		
	}

	
	render()
	{
		let {queriedHTML} = this.state;

		return(
			<div className="home">
				<h1>Home</h1>
				  <div className="progress">
				  loading bar
   					   <div className="indeterminate" ></div>
				  </div>
        
				<ul >{
					this.state.queriedHTML.map(item => (
						
						<li key={item}> 
							<TileComponent bodyProp={atob(item.content)} buttonProp={"https://erikavasnormandy.github.io/HomePosts/".concat(item.name)}/>
						</li>
					))
				}
				</ul>
			</div>		
		);
	}	
}

export default HomeComponent;
