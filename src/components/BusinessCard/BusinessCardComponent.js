import React, { Component } from 'react';
import {styles} from './businesscard.css';



class BusinessCardComponent extends Component {


	render() {

    	return (
        <div id="sideMenu" className="card large">
          <img className="menuImg" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/businesscard/VoidRune2MenuImg.png" 
          alt="Huh couldn't find it"></img>

          
          <div className = "sideMenuText">Mid-tier netrunner and closeted antiquarian. 
            <ul className="sideMenuLinks">
                <li className="sideMenuLinksLI"><a className="sideMenuLinksA" href="https://github.com/ErikaVasNormandy">Github</a></li>
                <li className="sideMenuLinksLI"><a className= "sideMenuLinksA" href="https://www.linkedin.com/in/erika-hudiono-97a0285b">LinkedIn</a></li>
            </ul>
          </div>

        </div>

      
    	);
  }
}

export default BusinessCardComponent;
