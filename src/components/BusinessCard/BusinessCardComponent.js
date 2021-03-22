import React, { Component } from 'react';
import {styles} from './businesscard.css';



class BusinessCardComponent extends Component {

	render() {
    	return (
        <div id="sideMenu" className="card large">
          <img className="menuImg" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/businesscard/VoidRune2MenuImg.png" 
          alt="Huh couldn't find it"></img>

          
          <div className = "sideMenuText">	<p>Where to Find Me</p>

            <ul className="sideMenuLinks">
                <li className="sideMenuLinksLI"> <a className="sideMenuLinksA" href="https://erikavasnormandy.artstation.com">Artstation</a></li>
      	  	<li className="sideMenuLinksLI"> <a className="sideMenuLinksA" href="https://www.instagram.com/technomancer_one/">Instagram</a></li>
                <li className="sideMenuLinksLI"><a className="sideMenuLinksA" href="https://github.com/ErikaVasNormandy">GitHub</a></li>
                <li className="sideMenuLinksLI"><a className="sideMenuLinksA" href="https://twitter.com/Technomancer_01">Twitter</a></li>
                <li className="sideMenuLinksLI"><a className="sideMenuLinksA" href="https://www.redbubble.com/people/Technomancer-01/shop?asc=u">RedBubble</a></li>		
            </ul>
          </div>

        </div>

      
    	);
  }
}

export default BusinessCardComponent;
