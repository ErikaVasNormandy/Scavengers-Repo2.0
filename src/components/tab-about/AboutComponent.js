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
		<img className="profilePicture" src={roundrobin} alt = "Huh image must have moved datacenters"/>
      	</div>

      	<div className = " columnAbout2">
      	<h2>Where to Find:</h2>
	    <p>ArtStation: <a href="https://www.artstation.com/technomancer-01">Technomancer-01</a></p>
	    <p><img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/social+media+icons/Instagram_AppIcon_Aug2017.png"/>Instagram: <a href="https://www.instagram.com/technomancer_one/">Technomancer_One</a></p>
	    <p>Twitter: <a href="https://twitter.com/Technomancer_01">Technomancer_01</a></p>
	    <p>RedBubble: <a href="https://redbubble.com/people/Technomancer-01/shop">Technomancer-01</a></p>
	 </div>
      </div>
    );
  }
}
export default AboutComponent;
