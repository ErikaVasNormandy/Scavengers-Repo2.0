import React, { Component } from 'react';
import {styles} from './navbar.css';

import HomeComponent from '../tab-home/HomeComponent'
import ProjectsComponent from '../tab-projects/ProjectsComponent'
import SketchbookComponent from '../tab-sketchbook/SketchbookComponent'
import WorldBuildingComponent from '../tab-worldbuilding/WorldBuildingComponent'
import AboutComponent from '../tab-about/AboutComponent'

import WindowComponent from '../Window/window'
import BusinessCardComponent from '../BusinessCard/BusinessCardComponent'


import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class NavBar extends Component {

	constructor(props){
		super(props)
		this.handleMenuClick = this.handleMenuClick.bind(this);
		this.toggle = this.toggle.bind(this);
		this.state = {showDropDownMenu: false}
}

	handleMenuClick=(e)=>{
		console.log("hello")

	}



	toggle(e){
		this.setState({ showDropDownMenu: !this.state.showDropDownMenu });
		
}


  render() {
    return (
     <div>
      <BrowserRouter>
       <div> 
	<header id="masthead" className="site-header" role="banner">
	<button className="temp_menu" onClick={this.toggle}>menu</button>
      	<nav className ="main-navigation" id = "site-navigation">
      	      <ul id = "primary-menu" className="menu nav-menu" >
      			<li className = "menu-item menu-item-type-custom menu-item-object-custom">
              			<Link to="/" >Home</Link>
      			</li>

      			<li className = "menu-item menu-item-type-custom menu-item-object-custom">
      				<Link to="/projects">Projects</Link>
      			</li>

      			<li className = "menu-item menu-item-type-custom menu-item-object-custom">
              			<Link to="/sketchbook">Sketchbook</Link>
      			</li>

      			<li className = "menu-item menu-item-type-custom menu-item-object-custom">
       				<Link to="/worldbuilding">Worldbuilding</Link>
      			</li>

      			<li className = "menu-item menu-item-type-custom menu-item-object-custom">
       				<Link to="/about">About</Link>
      			</li>
      		</ul>
</nav>


		
		{ this.state.showDropDownMenu ? 

			<div id="DropDownMenu">

      			<nav >
				<ul>
      			<li className = "menu-item menu-item-type-custom menu-item-object-custom">
							<Link to="/" >Home</Link>
			</li>

      			<li className = "menu-item menu-item-type-custom menu-item-object-custom">
							<Link to="/projects" >Projects</Link>
						</li>

      			<li className = "menu-item menu-item-type-custom menu-item-object-custom">
							<Link to="/sketchbook" >Sketchbook</Link>
						</li>
      			<li className = "menu-item menu-item-type-custom menu-item-object-custom">
							<Link to="/worldbuilding" >Worldbuilding</Link>
						</li>
      			<li className = "menu-item menu-item-type-custom menu-item-object-custom">
							<Link to="/about" >About</Link>
						</li>

					</ul>	
       	</nav>



		</div>: null }


	</header>


	<WindowComponent/>
        <hr/>

        <div className="row">
        
          <div className="col s2 m2 l2">
		<BusinessCardComponent/>
          </div>

          <div className="col s9 m9 l9">
            <Switch>
	             <div className  ="displayWindow">
                     	<Route exact path = "/" component={HomeComponent} />
        	        <Route exact path="/projects" component={ProjectsComponent} />
        	        <Route exact path="/sketchbook" component={SketchbookComponent} />
        	        <Route exact path="/worldbuilding" component={WorldBuildingComponent}/>
        	        <Route exact path="/about" component={AboutComponent} />
               </div>
            </Switch>
      	   </div>
         </div>

        </div>
      </BrowserRouter>
    </div>
    
    );
  }
}

export default NavBar;
