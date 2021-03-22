import React, { Component } from 'react';

import Countdown from './Countdown.js';

import {styles} from './window.css';
import bloodborneskin from './BloodborneSkin.jpg';
import clocktower from './clocktower.JPG';
import cosmicjar from './cosmicjar.PNG';
import hemwick from './hemwick.JPG';
import Meadow from './Meadow.png';
import PrideandPrejudce from './PrideandPrejudice.png';
import Skyartwork from './Skyartwork.png';
import mtgisland from './mtg-island.jpeg';



import susakura from './spring/steven-universe---sakura-tree.gif';
import alpinemeadow from './spring/alpinemeadow.jpg';

import gravityfalls from './summer/gravity-falls.jpg';
import sokolovo from './summer/reddit-sokolovo-ukraine.jpg';
import songoftheseaday from './summer/songofthesea-day.png';
import songoftheseamorning from './summer/songofthesea-morning.jpg';
import songoftheseanight from './summer/songofthesea-night.png';

import otgw0 from './autumn/overthegardenwall.jpg';
import otgw1 from './autumn/overthegardenwall1.jpg';
import otgw2 from './autumn/over-the-garden-wall-desktop-12.png';

import sucosmic from './winter/stevenuniverse-cosmic.png';
import coldbeach from './winter/gHQr2Tr.jpg';

const cosmicjarbg={
    backgroundImage: `url(${cosmicjar})`   
}

const mtgislandbg={
    backgroundImage: `url(${mtgisland})`   
}


const bg0={
		backgroundImage: `url(${susakura})`		
}
     const bg1={
        backgroundImage: `url(${gravityfalls})`
    }
     const bg2={
        backgroundImage: `url(${sokolovo})`
    }

     const bg3={
        backgroundImage: `url(${songoftheseaday})`
    }
     const bg4={
        backgroundImage: `url(${songoftheseamorning})`
    }
     const bg5={
        backgroundImage: `url(${songoftheseanight})`
    }
     const bg6={
        backgroundImage: `url(${sucosmic})`
    }

    const bg7={
        backgroundImage: `url(${alpinemeadow})`
    }
    const bg8={
        backgroundImage: `url(${coldbeach})`
    }


    const bg9={
        backgroundImage: `url(${otgw0})`
    }
    const bg10={
        backgroundImage: `url(${otgw1})`
    }
    const bg11={
        backgroundImage: `url(${otgw2})`
    }

	var inlineStylesArray = [bg0,bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg8,bg9,bg10,bg11]


var moment = require('moment');


class WindowComponent extends Component {
  	constructor(props){
  		super(props);

    
  		this.state = {
        time: moment().format('ddd LTS'),
  			imgUrl: "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/technomancer-one/NightCity-Evening.jpg",

  		}

  	 }

	render() {



    	return (

    		<div>
      		<div className = "window" style={mtgislandbg}>
                    <h1 className="windowDisplay windowText">Scavenger's Repo</h1>
                            <h2 className="windowDisplay windowSubtitle">The Website Has Moved to <a href="https://www.technomancer-01.com">technomancer-01.com</a>
                         </h2>
                    <br/>

      		</div>



      		</div>

    	);
  }
}

export default WindowComponent;
