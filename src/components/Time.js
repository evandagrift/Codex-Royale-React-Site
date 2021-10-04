import React, { Component } from 'react';
import { ConvertTimer } from "../Utilities/scripts";

class Time extends Component{
  constructor(props){
    super(props);
    this.state = {};
  } 
  render () {
          
    const { time } = this.props;
    let draw = '';
    if(time)
    {
        draw = ConvertTimer(time);

    }
    
    
    return (
       <div>{draw}</div>
    );
  }

}
export default Time;  