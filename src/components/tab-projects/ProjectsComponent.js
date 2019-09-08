import React from 'react';
import axios from 'axios';
import TileComponent from '../BaseTile/TileComponent';


class ProjectsComponent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			field: "value",
			contents: "",
			queriedHTML: []
		}
		this.myDivToFocus = React.createRef()

		this.getProjectContents = this.getProjectContents.bind(this);
	}
	
	handleOnClick = (event) =>{
		if(this.myDivToFocus.current){
			this.myDivToFocus.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
			})
		}
	}

	componentDidMount(){
		this.getProjectContents()
}
	


 

	getProjectContents(){
		axios.get('https://api.github.com/repos/erikavasnormandy/ErikaVasNormandy.github.io/contents/Projects', { headers: {Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`}  }).then(res=>{
		if(res.data){
			this.setState({ contents: res.data })
			var placeholder = this.state.contents.length
		
			
			for(var i=0;i<placeholder; i++){
				var stringQuery = "https://api.github.com/repos/erikavasnormandy/ErikaVasNormandy.github.io/contents/Projects/" + this.state.contents[i].name
				axios.get(stringQuery, { headers: {Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`}  })
					.then(res=>{
						if(res.data){
								this.setState({queriedHTML: this.state.queriedHTML.concat(res.data)})
								//this.setState({ queriedHTML: this.state.queriedHTML.concat(atob(res.data.content))}E)
								console.log("calling from the getContents inner loop ", this.state.queriedHTML)
							}
						})
						.catch(err =>console.log(err))
					}
					

 			}})
		
		.catch(err => console.log(err))
		
	console.log("calling from the getContents ", this.state.queriedHTML)

		
	}

	render()
	{
		
		return(
			<div>
			<h1>Projects</h1>


				<ul>{
					this.state.queriedHTML.map(item => (
						
						<li key={item}> 
							<TileComponent bodyProp={atob(item.content)} buttonProp={"https://erikavasnormandy.github.io/Projects/".concat(item.name)}/>
						</li>
					))
				}
				</ul>

				
			</div>		
		);
	}	
}

export default ProjectsComponent;
