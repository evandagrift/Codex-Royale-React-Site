import React, { Component } from 'react';

class Card extends Component{
  constructor(props){
    super(props);
    this.state = {};
  } 
  render () {
          
    const { card } = this.props;
    let draw = '';
    if(!card)
    {
    }else{
      draw = (<div><img key={"$id-"+card.Id} className="game-card" src={card.Url}/></div>);
    }
    return (
       <div>{draw}</div>
    );
  }

}
export default Card;  