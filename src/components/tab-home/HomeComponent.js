import React from 'react';
import axios from 'axios';
import TileComponent from '../BaseTile/TileComponent';

import moment from 'moment';

import {styles} from './home.css';
import {overallstyles} from '../../App.css';

import { Timeline } from 'react-twitter-widgets'
import dotenv from 'dotenv';

class HomeComponent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			field: "value",
			contents: [],
			htmlcontents:"",
			testcontents:[],
			listOfNamesToQuery:[],
			rawActualContents:[],
			queriedHTML: [],
			loadingBarProgress:0,
			hasLoaded: true
		}
		this.myDivToFocus = React.createRef()
		this.getContents = this.getContents.bind(this);
  }

  	toggle(e){
		this.setState({ hasLoaded: !this.state.hasLoaded });
	
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
		axios.get('https://api.github.com/repos/erikavasnormandy/ErikaVasNormandy.github.io/contents/Scavengers-Repo/HomePosts', { headers: {Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`}  }
).
			then(res=>{ 
				if(res.data){ 
					this.setState({ 
						contents: res.data
						//htmlcontents: atob(res.data.content)
						})
					this.toggle()
					var placeholder = this.state.contents.length
					var newSortedArray = this.state.contents.sort((a,b)=>   a.name > b.name)

					for(var i=0;i<placeholder; i++){
						//console.log("contents are: ", this.state.contents[i])
						var stringQuery = "https://api.github.com/repos/erikavasnormandy/ErikaVasNormandy.github.io/contents/Scavengers-Repo/HomePosts/" + this.state.contents[i].name
						//console.log(stringQuery)

						axios.get(stringQuery, { headers: {Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`}  })
						.then(res=>{
							if(res.data){

								this.setState({queriedHTML: this.state.queriedHTML.concat(res.data),

								})
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
			<div className="home" >
				{/* <Timeline 
					dataSource={{ 
						sourceType: 'profile', 
				 		screenName: 's0meCasual'}}
				 		options={{
				 			username: 'TwitterDev',
				 			height: '400'
				 		}}
				 		onLoad={() => console.log('Timeline is loaded!')}
				 /> */}

				 	<div className="HomePost">
					<a className="twitter-timeline" 
					/*data-tweet-limit="4" */
					data-lang="en" 
					width="98%" 
					data-theme="light" 
					data-chrome="noheader transparent"

					href={"https://twitter.com/S0meCasual/timelines/1249208152895225856"}>
					</a> 
					<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
					</div>

				{
				/*
								<a class="twitter-timeline" href="https://twitter.com/S0meCasual/timelines/1249208152895225856">Home Posts - Curated tweets by S0meCasual</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

					{this.state.hasLoaded ? <div className="loader"></div>: null}
				}

				<ul>
	
				{this.state.queriedHTML.sort((a,b) =>a.name.localeCompare(b.name)).reverse().map(item => (

						<li key={item} > 				
							<TileComponent bodyProp={atob(item.content)} buttonProp={"https://erikavasnormandy.github.io/Scavengers-Repo/HomePosts/".concat(item.name)}/>
						</li>
					)
					)
				}

				</ul>
			*/}



			</div>		
		);
	}	
}

export default HomeComponent;
