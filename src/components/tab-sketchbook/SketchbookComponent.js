import React from 'react';
import {styles} from './sketchbook.css';
import {absinthe} from './digital/absinthe.png';
import {cosmicjar} from './digital/jar_cosmic.png';
import  {medicinebun} from './digital/MedicineBun.png';
import {PlagueTale1} from './digital/PlagueTale1';
import {sekirogourd} from './digital/SekiroGourd - digital - Large.png';
import {regexpimain} from './digital/RegexPiMain.png';

import {celebrationcake } from './ink/celebrationcake.png';
import {mtgisland} from './ink/mtg island.png';
import {porttown} from './ink/porttown.png';


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
			<div>
			<h1>Sketchbook</h1>
				<div className="tableOfContents">

				<ul> 

					<li><button onClick={this.handleInk}>Ink</button></li>
					<li><button onClick={this.handleDigital}>Digital</button></li>
					<li><button onClick={this.handleScrapbook}>Scrapbook</button></li>
				</ul>
				</div>
	
			<p>{console.log("hello from sketchbook")}Here's a preview of what I do. You can find my full shop on <a href="https://erikavasnormandy.artstation.com">Artstation</a>, <a href="https://instagram.com/s0meCasual">Instagram</a> and <a href="https://redbubble.com/people/Technomancer-01?asc=u">RedBubble</a>.'</p>
			<p>I try to use Artstation as my main source for prints and such. RedBubble is a bit more tailored for gimmicks and whatnot.</p>	
	<p> To do: upload some samples of art to showcase</p>
				<h2 ref={this.bringInkToFocus}>Ink</h2>
					<img src = {mtgisland}></img>
					<img src = {porttown}></img>

					<img src = {celebrationcake}></img>

				<h2 ref={this.bringDigitalToFocus}>Digital</h2>
					<img src = {regexpimain}></img>

					<img src = {absinthe}></img>

					<img src = {cosmicjar}></img>

					<img src = {medicinebun}></img>
					<img src = {PlagueTale1}></img>
					<img src = {sekirogourd}></img>

				<h2 ref={this.bringScrapbookToFocus}>Scrapbook</h2>




			</div>		
		);
	}	
}

export default SketchbookComponent;



