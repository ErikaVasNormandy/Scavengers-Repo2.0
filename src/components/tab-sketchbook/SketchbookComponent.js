import React from 'react';
import {styles} from './sketchbook.css';
import absinthe from './digital/absinthe.jpg';
import cosmicjar from './digital/jar_cosmic.png';
import medicinebun from './digital/MedicineBun.png';
import PlagueTale1 from './digital/PlagueTale1.png';
import sekirogourd from './digital/SekiroGourd - Digital - Large.png';
import regexpimain from './digital/RegexPiMain.png';

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
				block: "nearest"	
			})
		}
	}
 		
	handleInk = (event) =>{
		if(this.bringInkToFocus.current){
			this.bringInkToFocus.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
			})
		}
	}
	handleDigital = (event) =>{
		if(this.bringDigitalToFocus.current){
			this.bringDigitalToFocus.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
			})
		}
	}
	handleScrapbook = (event) =>{
		if(this.bringScrapbookToFocus.current){
			this.bringScrapbookToFocus.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
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
					<img src = {regexpimain} alt="Moved"/>

					<img src = {absinthe} alt="Moved"/>

					<img src = {cosmicjar} alt="Moved"/>

					<img src = {medicinebun} alt="Moved"/>
					<img src = {PlagueTale1} alt="Moved"/>
					<img src = {sekirogourd} alt="Moved"/>

				<h2 ref={this.bringScrapbookToFocus}>Scrapbook</h2>




			</div>		
		);
	}	
}

export default SketchbookComponent;



