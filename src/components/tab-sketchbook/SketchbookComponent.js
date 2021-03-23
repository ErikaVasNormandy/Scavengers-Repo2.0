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
			


		
					<button onClick={this.handleConceptArt}>Concept Art</button>
					<button onClick={this.handleBloodborne}>Saturday Morning Bloodborne</button>
					<button onClick={this.handleBitsAndPieces}>Bits and Pieces</button>
					<button onClick={this.handleInk}>Inktober</button>
		
				</section>
	
			<p></p>
				<h2 ref={this.bringConceptArtToFocus} alt="Moved">Amateur Concept Art</h2>

					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/technomancer-one/NightCity-Evening.jpg" alt="Moved"/>

					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/MedicineBun.png" alt="Moved"/>
				
					<img src ="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/Gabriella MacAlastair.png"/>

				<h2 ref={this.bringBloodborneToFocus}>Saturday Morning Bloodborne</h2>
					
					<span title="Artstation"><a href="https://t.co/JOle8Um3BC"><img src="https://cdna.artstation.com/p/assets/images/images/025/691/350/large/erika-hudiono-asset.jpg?1586626590"></img></a></span>
					
					<span title="Artstation"><a href="https://artstn.co/p/Z5rD9R"><img src="https://cdna.artstation.com/p/assets/images/images/024/808/610/large/erika-hudiono-asset.jpg?1583604803" ></img>     </a></span>
					
					<span title="Artstation"><a href="https://artstn.co/p/Dxbdxy"><img src="https://cdna.artstation.com/p/assets/images/images/024/058/888/large/erika-hudiono-asset.jpg?1581188752"></img></a></span>
				<h2 ref={this.bringBitsAndPiecesToFocus}>Bits And Pieces</h2>

					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/jar_cosmic.png" alt="Moved"/>
					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/SekiroGourd+-+Digital+-+Large.png" alt="Moved"/>

					<img src = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-artwork/digital/absinthe.jpg" alt="Moved"/>


				<h2 ref={this.bringInkToFocus}>Inktober</h2>
				     <p >That's right, meatspace and digital!</p>
					<img src = {mtgisland} alt="Moved"/>


					<img src = {celebrationcake} alt="Moved"/>					
					<img src = {porttown} alt="Moved"/>

			</div>		
		);
	}	
}

export default SketchbookComponent;



