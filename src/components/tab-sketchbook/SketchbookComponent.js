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

		this.bringBloodborneToFocus = React.createRef()
		this.bringInkToFocus = React.createRef()
		this.bringConceptArtToFocus = React.createRef()
		this.bringBitsAndPiecesToFocus = React.createRef()
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
				block: "start"	
			})
		}
	}
	handleBloodborne = (event) =>{
		if(this.bringBloodborneToFocus.current){
			this.bringBloodborneToFocus.current.scrollIntoView({
				behavior: "smooth",
				block: "start"	
			})
		}
	}
	handleConceptArt = (event) =>{
		if(this.bringConceptArtToFocus.current){
			this.bringConceptArtToFocus.current.scrollIntoView({
				behavior: "smooth",
				block: "start"	
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
	handleBitsAndPieces = (event) =>{
		if(this.bringBitsAndPiecesToFocus.current){
			this.bringBitsAndPiecesToFocus.current.scrollIntoView({
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
				<section>
			{/*}Need to show the social media sharing pins */}
				<ul><li>Artstation</li><li> Instagram</li><li> Twitter</li><li> RedBubble</li></ul>


				<ul> 
					<li><button onClick={this.handleConceptArt}>Amateur Concept Artist</button></li>
					<li><button onClick={this.handleBloodborne}>Saturday Morning Bloodborne</button></li>
					<li><button onClick={this.handleBitsAndPieces}>Bits and Pieces</button></li>
					<li><button onClick={this.handleInk}>Inktober (Meatspace & Virtual)</button></li>
				</ul>
				</section>
	
			<p></p>
				<h2 ref={this.bringConceptArtToFocus} alt="Moved">Amateur Concept Artist</h2>
					<p>A picture speaks a thousand words they say. Hope I can breathe some life into 
					the tabletop campaigns we play</p>

				{/*	<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/RegexPiMain-+small.png" alt="Moved"/>
*/}
					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/MedicineBun.png" alt="Moved"/>
				
					<img src ="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/Gabriella MacAlastair.png"/>
					<img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/JJRogers.png"/>

				<h2 ref={this.bringBloodborneToFocus}>Saturday Morning Bloodborne</h2>
					<p>While I would be curious to see how Soulsborne games would look in a kid-friendly format 

					to watch while eating breakfast cereal, that is unfortunately not the case. This is mainly me fumbling to 
					learn how to emulate the artstyle of Bloodborne in particular based on the artbook that a friend gifted me last year</p>
				
				<h2 ref={this.bringBitsAndPiecesToFocus}>Bits And Pieces</h2>
					<p>Scavenging from various artbooks to try out art styles and emulate work that I like. </p>

					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/jar_cosmic.png" alt="Moved"/>
					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/SekiroGourd+-+Digital+-+Large.png" alt="Moved"/>

					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/absinthe.jpg" alt="Moved"/>
					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/LovegoodHouse.png" alt="Moved"/>


				<h2 ref={this.bringInkToFocus}>Inktober (Meatspace and Virtual Editions)</h2>
				     <p >That's right, meatspace and digital!</p>
					<img src = {mtgisland} alt="Moved"/>


					<img src = {celebrationcake} alt="Moved"/>					<img src = {porttown} alt="Moved"/>
					<img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/White+Rabbit.jpg"/>



			</div>		
		);
	}	
}

export default SketchbookComponent;



