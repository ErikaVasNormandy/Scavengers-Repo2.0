import React from 'react';
import {styles} from './sketchbook.css';
import absinthe from './digital/absinthe.jpg';
import cosmicjar from './digital/jar_cosmic.png';
import medicinebun from './digital/MedicineBun.png';
import PlagueTale1 from './digital/PlagueTale1.png';
import sekirogourd from './digital/SekiroGourd - Digital - Large.png';

import celebrationcake from './ink/celebrationcake.jpg';
import mtgisland from './ink/mtg island.jpg';
import porttown from './ink/porttown.jpg';


class SketchbookComponent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			field: "value"
		}
		this.myDivToFocus = React.createRef()
		this.bringInkToFocus = React.createRef()
		this.bringDigitalToFocus = React.createRef()
		this.bringScrapbookToFocus = React.createRef()
	}
	
	handleOnClick = (event) =>{
		if(this.myDivToFocus.current){
			this.myDivToFocus.current.scrollIntoView({
				behavior: "smooth",
				block: "end"	
			})
		}
	}
 		
	handleInk = (event) =>{
		if(this.bringInkToFocus.current){
			this.bringInkToFocus.current.scrollIntoView({
				behavior: "smooth",
				block: "center"	
			})
		}
	}
	handleDigital = (event) =>{
		if(this.bringDigitalToFocus.current){
			this.bringDigitalToFocus.current.scrollIntoView({
				behavior: "smooth",
				block: "center"	
			})
		}
	}
	handleScrapbook = (event) =>{
		if(this.bringScrapbookToFocus.current){
			this.bringScrapbookToFocus.current.scrollIntoView({
				behavior: "smooth",
				block: "start"	
			})
		}
	}

	
	render()
	{
		return(
			<div className="sketchbook">

			<h1>Sketchbook</h1>
				<div className="tableOfContents">

				<ul> 

					<li><button onClick={this.handleInk}>Ink</button></li>
					<li><button onClick={this.handleDigital}>Digital</button></li>
					<li><button onClick={this.handleScrapbook}>Scrapbook</button></li>
				</ul>
				</div>
	
			<p>{console.log("hello from sketchbook")}Here's a preview of what I do. You can find my full shop on <a href="https://erikavasnormandy.artstation.com">Artstation</a>, <a href="https://instagram.com/s0meCasual">Instagram</a> and <a href="https://redbubble.com/people/Technomancer-01?asc=u">RedBubble</a>.</p>
			<p>I try to use Artstation as my main source for prints and such. RedBubble is a bit more tailored for gimmicks and whatnot.</p>	
	<p> To do: upload some samples of art to showcase</p>
				<h2 ref={this.bringInkToFocus}>Ink</h2>
					<img src = {mtgisland} alt="Moved"/>


					<img src = {celebrationcake} alt="Moved"/>					<img src = {porttown} alt="Moved"/>

				<h2 ref={this.bringDigitalToFocus} alt="Moved">Digital</h2>

					

					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/jar_cosmic.png" alt="Moved"/>
					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/RegexPiMain-+small.png" alt="Moved"/>

					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/MedicineBun.png" alt="Moved"/>
				
					<img src ="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/Gabriella MacAlastair.png"/>
					<img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/JJRogers.png"/>
					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/LovegoodHouse.png" alt="Moved"/>

					<img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/White+Rabbit.jpg"/>
					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/absinthe.jpg" alt="Moved"/>
					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/SekiroGourd+-+Digital+-+Large.png" alt="Moved"/>

				<h2 ref={this.bringScrapbookToFocus}>Scrapbook</h2>




			</div>		
		);
	}	
}

export default SketchbookComponent;



