import React from 'react';
import TileComponent from './TileComponent';

import moment from 'moment';


class ListComponent extends React.Component{
  constructor(props){
    super(props)
    this.setState({
      childShowAdmin:false
      })
   }
  


  componentWillReceiveProps(newProps) {
    this.setState({childShowAdmin: newProps.isVisible});
}

    render(){
    return(
      <div>
        <ul>
        {
          this.props.contents &&
            this.props.contents.length > 0 ?
            (
              this.props.contents.map(content => {
                return(
                      <li key={content}> {this.props.contents} </li>
                       
                       )   
                })
          ): ( <p>Loading Posts...</p>)
        }
      </ul>
      </div>
)}
}

export default ListComponent
