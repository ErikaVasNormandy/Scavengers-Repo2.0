import React from 'react';
import axios from 'axios';
import {styles} from './worldbuilding.css';


class WorldBuildingComponent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			field: "value",
			contents:""
		}


		this.myDivToFocus = React.createRef()
		this.focusIntro = React.createRef()
		this.focusSetting = React.createRef()
		this.focusAtomcraft = React.createRef()
		this.focusEnvironment = React.createRef()
		this.focusPolitics = React.createRef()
		this.focusCharacters = React.createRef()
		this.focusConceptScrapbook = React.createRef()

	}
	
	handleOnClick = (event) =>{
		if(this.myDivToFocus.current){
			this.myDivToFocus.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
			})
		}
	}
	handleIntro = (event) =>{
		if(this.focusIntro.current){
			this.focusIntro.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
			})
		}
	}
	handleSetting = (event) =>{
		if(this.focusSetting.current){
			this.focusSetting.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
			})
		}
	}

 	handleAtomcraft = (event) =>{
		if(this.focusAtomcraft.current){
			this.focusAtomcraft.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
			})
		}
	}


 	handleEnvironment = (event) =>{
		if(this.focusEnvironment.current){
			this.focusEnvironment.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
			})
		}
	}

 	handlePolitics = (event) =>{
		if(this.focusPolitics.current){
			this.focusPolitics.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
			})
		}
	}

 	handleCharacters = (event) =>{
		if(this.focusCharacters.current){
			this.focusCharacters.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
			})
		}
	}
 	handleConceptScrapbook = (event) =>{
		if(this.focusConceptScrapbook.current){
			this.focusConceptScrapbook.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"	
			})
		}
	}

	loadCreativeSnippets(){
		{/*axios.get('https://api.github.com/repos/erikavasnormandy/ErikaVasNormandy.github.io/contents/ArdaHyperion/Characters/Spring/XanderLangley/index.html').then(res=>{ if(res.data){ this.setState({ contents: res.data}) }}).catch(err => console.log(err))
		console.log("baseObject is ", this.state.contents)
		*/}
		

}
	render()
	{
		
		return(
			<div>
			<h1>Worldbuilding</h1>
            <table>

              <tr>

                <ul className = "worldbuildinglist">
                  <li><button onClick={this.handleIntro}>Intro</button></li>
                  <li><button onClick={this.handleSetting}>Setting</button></li>
                  <li><button onClick={this.handleAtomcraft}>Atomcraft</button></li>
                  <li><button onClick={this.handleEnvironment}>Environment</button></li>
                  <li><button onClick={this.handlePolitics}>Politics</button></li>
                  <li><button onClick={this.handleCharacters}>Characters</button></li>
                  <li><button onClick={this.handleConceptScrapbook}>Notes</button></li>

                </ul>

 
              <td></td>

              <td>
                <h3>How to Use This Page</h3>
                <p>
                  This page has some semblance of organization, but mainly 
                  tidbits that go into more detail without making you read an essay.
                </p>
                <p> 
                  All of these take place in a setting called <strong>Arda Hyperion</strong>, 
                  a timeline where humanity has discovered <strong>Atomcraft</strong>, the
                  ability to interface with the Operating System running the Universe.
                </p>
                <p>
                  While this technically includes extraordinary abilities such as matter 
                  manipulation, teleportation, and energy conduction, their true hallmark is
                  their expertise in the creation and use of <strong>Extradimensional Material (EM)</strong>. 
                </p>
                <p>
                  For better or worse, humans have discovered how to conduct what is essentially Magic, and
                  apply it on an industrial scale to their technology, economies, and infrastructure. 
                  But all resources are finite, and for every miracle there must be a consequence. 
                  Ever the intrepid craftsmen, humanity's hunger for resources and energy, whether 
                  Earthbound or Cosmic in nature, will have its price. 
                </p>
              </td>

              </tr>
            </table>
            {/* Render out the contents via a list */}
            <br/>

	<div ref={this.focusIntro}>
            <h2>Intro</h2>
            <div id = "Introduction">

              <p>Arda Hyperion is tentative webseries set in an alternate timeline where humans 
              have discovered Atomcraft: limited read-write access to the Operating System running the Universe.

              Those who practice Atomcraft are known as "Atomancers", and are known for their expertise 
              in the forging and use of Extradimensional Matter (EM). 

              An Atomcrafted tool will be comprised of modular components, constantly shifting to match the 
              whims of the user who forged them. A firearm made from Extradimensional Matter will cycle 
              through different firing modes depending on the skill of the user that crafted those components.   </p>
             
              <table className="image">
                <tr>
                  <td> 
                    <img src="https://66.media.tumblr.com/b9031267e0839b004b03fbc1dfb5c887/tumblr_perfuuBA3h1qgojgxo2_540.gif"></img>
                  </td>
                  <td className="caption">Preview pic from the game Control (2019) WIP weapon test. This is an approximation of what a modern (3rd, 4th generation)
                  Atomancer can do with enough time and practice 
                  </td>
                </tr>
              </table>
           

              <p>
                There have been 3 generations of Atomancers, with each subsequent generation's Atomcraft ability to bypass reality declining
                over time. While crafting modular components made of Extradimensional Matter that are lighter and stronger than any other material on Earth
                is no small feat, this is a far cry from previous generations, particularly Generation 0, who were the last humans to wield magic before 
                vanishing without a trace. Since then, each generation has receded from importance, from being the ruling class with literal astronomical power 
                bringing prosperity and defending humanity from cosmic entities, to estranged craftsmen and eccentrics living on the fringes of society. 
              </p>
			</div>
	
                <div ref={this.focusSetting}>
			<h2>Setting</h2>
		</div>
                <div ref={this.focusAtomcraft}>
                	<h2>Atomcraft</h2>
		</div>
                <div ref={this.focusEnvironment}>
			<h2>Environment</h2>
		</div>
                <div ref={this.focusPolitics}>
                	<h2>Politics</h2>
		</div>
               	<div ref={this.focusCharacters}>
                	<h2>Characters</h2>
		</div>
                <div ref={this.focusConceptScrapbook}>
			<h2>Notes</h2>
		</div>

							



				{console.log("Hello from world building")}

				<p> </p>
				
				<p>Body Component right here</p>
				<div ref={this.myDivToFocus}>
					Cape Cod
				</div>

				<p>Body Component right here</p>
				<p>Body Component right here</p>
				
				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>
				<p>Body Component right here</p>
			</div>	
</div>	
		);
	}	
}

export default WorldBuildingComponent;