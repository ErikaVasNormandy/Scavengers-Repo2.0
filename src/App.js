import React from 'react';
import './App.css';
import NavBarComponent from './components/NavBar/navbar'
import TableOfContentsComponent from './components/ContentsPageTable/tableofcontents'

import GetReqComponent from './GetReq'

function App() {


  return (
    <div className="rootElement">
	<header>
      </header>
	

	<body>
	<div className="customWidget"><GetReqComponent/></div>
		<NavBarComponent/>


	</body>



    </div>
  );
}

export default App;
