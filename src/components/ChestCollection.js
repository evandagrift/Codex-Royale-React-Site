import React, { Component } from 'react';
import Chest from './Chest';

class ChestCollection extends Component{
  constructor(props){
    super(props);
    this.state = {};
  } 
  render () {
          
    const { chestCollection } = this.props;
    let draw = '';
    if(chestCollection != null)
    {
      draw = chestCollection.map((c)=> <Chest key={"$chest-+"+c.Index} chest={c}/>)
    }
    return (<div >
      <h1>Upcoming Chests</h1>
      <p>(you need x number of wins to gain the below chests)</p>
      <div key="$chest-collection"className="chest-collection">{draw}</div>
       </div>
    );
  }

}
export default ChestCollection;  