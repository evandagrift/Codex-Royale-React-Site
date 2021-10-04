import React, { Component } from 'react';
import Battle from './Battle';

class BattleCollection extends Component{
  constructor(props){
    super(props);
    this.state = {};
  } 
  render () {
          
    const { battleCollection } = this.props;
    let draw = '';
    if(battleCollection)
    {
      draw = battleCollection.map((b)=> <Battle key={'$battle-'+b.BattleTime} battle={b}/>)
    }
    return (<div >{draw}
       </div>
    );
  }

}
export default BattleCollection;  