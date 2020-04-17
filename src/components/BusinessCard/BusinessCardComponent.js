import React, { Component } from 'react';
import {styles} from './businesscard.css';



class BusinessCardComponent extends Component {

	render() {
    	return (
        <div id="sideMenu" className="card large">
          <img className="menuImg" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/businesscard/VoidRune2MenuImg.png" 
          alt="Huh couldn't find it"></img>

          
          <div className = "sideMenuText">	<i>Traversing the interwebs like it's already 2020</i>".  <p>Wait</p>

            <ul className="sideMenuLinks">
                <li className="sideMenuLinksLI"> <a className="sideMenuLinksA" href="https://erikavasnormandy.artstation.com">Artstation</a></li>

      	  		<li className="sideMenuLinksLI"> <a className="sideMenuLinksA" href="https://www.instagram.com/s0meCasual/">Instagram</a></li>
                <li className="sideMenuLinksLI"><a className="sideMenuLinksA" href="https://github.com/ErikaVasNormandy">GitHub</a></li>
                <li className="sideMenuLinksLI"><a className="sideMenuLinksA" href="https://twitter.com/S0meCasual">Twitter</a></li>

            </ul>
          </div>

        </div>

      
    	);
  }
}

export default BusinessCardComponent;
