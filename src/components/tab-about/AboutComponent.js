import React from 'react';
import {styles} from './aboutcss.css';

import roundrobin from './roundrobin.png';
import trixiepixie from './TrixiePixieProfile.png';


class AboutComponent extends React.Component{
  render() {
    return (
      <div className ="row">
      	<div className = " columnAbout1">
      		<h2>About </h2>	
          <img className="profilePicture" src="https://cdna.artstation.com/p/assets/images/images/025/716/346/large/erika-hudiono-asset.jpg?1586712390"/>
      		<p>- Exploring stacks</p>
          <p>- Gaming on casual mode</p>
          <p>- Drawing and writing </p>
          <p>- Tinkering in meatspace</p>


          <p>If you ever want an ice breaker, just say you like rabbits, show me your rabbit pictures, or even bring one if you too are a fan of Leporidae.</p>
          <p className="tags"> Games, Neil Gaiman Comics, Folding Chair Historian, and Rabbits.</p>

      	</div>

      	<div className = " columnAbout2">
      	<h2>Contact</h2>
      	  		<p>Github: <a href="https://github.com/ErikaVasNormandy">Erika Vas Normandy</a></p>
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
