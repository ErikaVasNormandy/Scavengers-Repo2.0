import React, { Component } from 'react';
import {styles} from './businesscard.css';



class BusinessCardComponent extends Component {

	render() {
    	return (
        <div id="sideMenu" className="card large">
          <img className="menuImg" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/businesscard/VoidRune2MenuImg.png" 
          alt="Huh couldn't find it"></img>

          
          <div className = "sideMenuText">	<h3>Where to Find</h3>

            <ul className="sideMenuLinks">

	  <h2><a href="https://www.artstation.com/technomancer-01"><img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/social+media+icons/artstation.png" width="20" height="20" />Technomancer-01</a></h2>
	    <h2> <a href="https://www.instagram.com/technomancer_one/"><img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/social+media+icons/Instagram_AppIcon_Aug2017.png" width="20" height="20"/>Technomancer_One</a></h2>
	    <h2><a href="https://twitter.com/Technomancer_01"><img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/social+media+icons/twittericon.jpg" width="20" height="20" />Technomancer_01</a></h2>
	    <h2><a href="https://redbubble.com/people/Technomancer-01/shop"><img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/social+media+icons/redbubble.png" width="20" height="20" />Technomancer-01</a></h2>
            </ul>
          </div>

        </div>

      
    	);
  }
}

export default BusinessCardComponent;
