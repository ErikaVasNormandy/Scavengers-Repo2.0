import React from 'react';


import axios from 'axios';
require('dotenv').config();



class GetReqComponent extends React.Component{
	constructor(props){
		super(props)
		this.getReqCount = this.getReqCount.bind(this)
		this.state ={ 
			authenticated_rate: "",
			unauthenticated_rate: "",
			reset_authenticated:"",
			reqobject: ""

	}
	}

	componentDidMount(){
		this.getReqCount()

}

	getReqCount(){
		axios.get(' https://api.github.com/rate_limit', { headers: {Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`}  }
).
			then(res=>{ 
				if(res.data){ 
					// console.log("test rate-limit", res.data.resources.core.limit)
					this.setState({ 	

						reqobject: res.data.rate.remaining,
						authenticated_rate: res.data.rate.remaining


					})
				}})
		
		.catch(err => console.log(err))
}


 render(){
 	return(
 		<div>

 			{this.state.authenticated_rate} Requests Remaining

 		</div>

 		)
 	}
}
export default GetReqComponent;