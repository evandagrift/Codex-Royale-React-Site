import React, { Component } from 'react';

class Chest extends Component{
  constructor(props){
    super(props);
    this.state = {};
  } 


  
  render () {
          
    const { chest } = this.props;
    let draw = '';
    if(chest.Name)
    {
      draw = (<div ><p><b>{chest.Index+1}</b></p>
        <img  key={'$id'+chest.Index} className="game-card" src={chest.Url}/>
      </div>);
    }
    return (
       <div>{draw}</div>
    );
  }

}
export default Chest;  