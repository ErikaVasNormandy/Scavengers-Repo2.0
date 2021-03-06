import React from 'react';
import axios from 'axios';
import TileComponent from '../BaseTile/TileComponent';
import {styles} from './projects.css';
import ProjectsCard from './ProjectsCard'
import ReactMarkdown from 'react-markdown';

class ProjectsComponent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			field: "value",
			contents: "",
			queriedHTML: [],
			hasLoaded: true,
			terms: null
		}
		this.myDivToFocus = React.createRef()
		this.getProjectContents = this.getProjectContents.bind(this);
		this.toggle = this.toggle.bind(this)
		this.createMarkup = this.createMarkup.bind(this)
	}
	
	createMarkup(input){return{ __html: input}
	}
	
  	toggle(e){
  		console.log(this.state.hasLoaded)

		this.setState({ hasLoaded: !this.state.hasLoaded });
		console.log(this.state.hasLoaded)
		console.log("toggleloaded")
		
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
	componentWillMount() {
    // fetch(AppMarkdown).then((response) => response.text()).then((text) => {
    //   this.setState({ terms: text })
    // })
  }

	getProjectContents(){
		axios.get('https://api.github.com/repos/erikavasnormandy/ErikaVasNormandy.github.io/contents/Scavengers-Repo/Projects', { headers: {Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`}  })
		.then(res=>{
			if(res.data){
				this.setState({ 
					contents: res.data 
				})
				var placeholder = this.state.contents.length
				this.toggle()
		
				var newSortedArray = this.state.contents.sort((a,b)=>   a.name > b.name)

				for(var i=0;i<placeholder; i++){
					var stringQuery = "https://api.github.com/repos/erikavasnormandy/ErikaVasNormandy.github.io/contents/Scavengers-Repo/Projects/" + this.state.contents[i].name
					axios.get(stringQuery, { headers: {Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`}  })
					.then(res=>{
						if(res.data){
							this.setState({queriedHTML: this.state.queriedHTML.concat(res.data),
							})
							}
						})
						.catch(err =>console.log(err))
					}			

 			}})
		
		.catch(err => console.log(err))		
	}

	render()
	{
		return(
			<div className="projects">
			<h1>Projects</h1>

			  <h2> WIP</h2>


			  		<ProjectsCard 
			  		cardtitle="One Page Write Ups"
			  		link="https://technomancers-gambit.netlify.app"
			  		briefdescription="Based on that description Chris Hadley had in his Master Class"
			  		bgimg="http://www.archaeology.wiki/wp-content/uploads/2014/11/spellbook-1.jpg"
			  		/>


					<ProjectsCard
			  		cardtitle="High Tech Low Lives"
			  		link="https://high-tech-low-lives.netlify.app"
			  		briefdescription="Cyberpunk 2020 campaign"
			  		bgimg="https://wallpapertag.com/wallpaper/full/8/6/f/433826-most-popular-blade-runner-wallpapers-1920x1080.jpg"
			  		/>


			  		<ProjectsCard 
			  				 cardtitle="Arda Hyperion"
			  				 link="https://arda-hyperion.netlify.app"
			  				 briefdescription="Personal Project"
			  				 bgimg="https://cdnb.artstation.com/p/assets/images/images/004/036/061/large/roxsalomon-.jpg?1479717097"


			  		/>


			  		<ProjectsCard 
			  			cardtitle="Samurai Magicka"
			  			link="https://samurai-magika.netlify.app"
			  			briefdescription="Legend of the 5 Rings campaign, aka Fantasy Japan"
			  			bgimg="https://i.ytimg.com/vi/o90uAvZLDBQ/maxresdefault.jpg"
			  			/>
			{/*
				
				{this.state.hasLoaded ? <div className="loader"></div>: null}

				<ul>

				{
					this.state.queriedHTML.sort((a, b) => a.name.localeCompare(b.name)).reverse().map(item => (
						<li key={item} > 		

							<TileComponent bodyProp={atob(item.content)} buttonProp={"https://erikavasnormandy.github.io/Scavengers-Repo/Projects/".concat(item.name)}/>
						
						</li>
					))
				}
				</ul>


			*/}

				
			</div>		
		);
	}	
}

export default ProjectsComponent;
