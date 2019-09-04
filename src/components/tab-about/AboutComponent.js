import React from 'react';
import {styles} from './aboutcss.css';

import roundrobin from './roundrobin.png';
import trixiepixie from './TrixiePixieProfile.png';


class AboutComponent extends React.Component{
  render() {
    return (
      <div className ="row">
      	<div className = " columnAbout">
      		<h2>About </h2>	
      		<img className="profilePicture" src={trixiepixie} alt="Huh image must have moved"></img>
      		<p>Erika Hudiono is a Bay Area Techie with an interest in both digital and traditional art, games, creative writing, crafting a la apps, and various other gimmicks. </p>
      		<p>Erika frequently applies a unique approach to her work as a security engineer and technical analyst. When not collecting various hats for SRE and developer roles, she is known for illustration and digital art. </p>
      	</div>

      	<div className = " columnAbout">
      	<h2>Contact</h2>


      	  	<h4>For Enquires: </h4>
      	  		<p>Online Email: <a href="mailto:erikavasnormandy@gmail.com?subject=Message from Reactive.Scavengers-Repo.com Site">erikavasnormandy@gmail.com</a>  </p>
      	  		<p>Github: <a href="https://github.com/ErikaVasNormandy">Erika Vas Normandy</a></p>
      	  		<p>Linkedin: <a href="https://www.linkedin.com/in/erika-hudiono/">Erika Hudiono</a></p>
      	  		<p>Instagram: <a href="https://www.instagram.com/s0meCasual/">S0meCasual</a></p>
		<h2>ShopFronts</h2>
      	  		<p>RedBubble: <a href="https://redbubble.com/people/Technomancer-01/shop">Technomancer-01</a></p>
      	      	  	<p>ArtStation: <a href="https://erikavasnormandy.artstation.com">Actual Portfolio</a></p>
			<img className="profilePicture" src={roundrobin} alt = "Huh image must have moved datacenters"/>
	 </div>
      </div>
    );
  }
}
export default AboutComponent;
