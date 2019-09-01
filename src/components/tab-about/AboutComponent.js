import React from 'react';
import {styles} from './aboutcss.css';
import cosmicJar from './jar_cosmic.png';


class AboutComponent extends React.Component{
  render() {
    return (
      <div className ="row">
      	<div className = "col s7, m7, l7 columnAbout">
      		<h2>About </h2>
      			
      			<img className="profilePicture" src={cosmicJar} alt="Huh image must have moved"></img>
      			<p>Erika Hudiono is a Bay Area Techie with an interest in both digital and traditional art, games, creative writing, crafting a la apps, and various other gimmicks. </p>
      			<p>Erika frequently applies a unique approach to her work as a security engineer and technical analyst. When not collecting various hats for SRE and developer roles, she is known for illustration and digital art. </p>
      	</div>

      	 <div className = "col s5, m5, l5 columnAbout">
      	   	<h2>Contact</h2>
      	  	<h6>For Enquires: </h6>
      	  		<p>Online Email: <a href="mailto:erikavasnormandy@gmail.com?subject=Message from Reactive.Scavengers-Repo.com Site">erikavasnormandy@gmail.com</a>  </p>
      	  		<p>Github: <a href="https://github.com/ErikaVasNormandy"> Erika Vas Normandy</a></p>
      	  		<p>Linkedin: <a href="https://www.linkedin.com/in/erika-hudiono/">Erika Hudiono</a></p>
      	  		<p>Instagram <a href="https://www.instagram.com/curiousquarian/"> Portfolio</a></p>
      	  		<img className="profilePicture" src="../../assets/jar_cosmic.png" alt = "Huh image must have moved datacenters"/>
      	  </div>
      </div>
    );
  }
}
export default AboutComponent;
