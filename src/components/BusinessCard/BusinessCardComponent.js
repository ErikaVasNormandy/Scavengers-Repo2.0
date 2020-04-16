import React, { Component } from 'react';
import {styles} from './businesscard.css';



class BusinessCardComponent extends Component {

	render() {
    	return (
        <div id="sideMenu" className="card large">
          <img className="menuImg" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/businesscard/VoidRune2MenuImg.png" 
          alt="Huh couldn't find it"></img>

          
          <div className = "sideMenuText">Just Some Casual on The Stack. At least I made this website from scratch!
            <ul className="sideMenuLinks">
                <li className="sideMenuLinksLI"><a className="sideMenuLinksA" href="https://splunk.scavengers-repo.com:8000">Splunk</a></li>
                <li className="sideMenuLinksLI"><a className="sideMenuLinksA" href="https://github.com/ErikaVasNormandy">GitHub</a></li>
            </ul>
          </div>

        </div>

      
    	);
  }
}

export default BusinessCardComponent;
