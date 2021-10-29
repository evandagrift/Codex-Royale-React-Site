import React, { Component, useEffect } from 'react';
import Battle from './Battle';
import { GetBattlesAsync } from "../Utilities/axios-functions";
import { axios } from "../axios";
import { GetPlayerBattlesAsync } from "../Utilities/axios-functions"; 

class BattleCollection extends Component{
  constructor(props){
    super(props);
    this.state = {
      battles:[]
    };
  } 

  async componentDidMount()
  {
    const { playerTag } = this.props;

    if(playerTag != undefined)
    {
      const fetchedBattles = await GetPlayerBattlesAsync(playerTag);
      if(fetchedBattles != null) this.setState({battles:fetchedBattles});
    }
    else
    {
      const fetchedBattles = await GetBattlesAsync();
      if(fetchedBattles != null) this.setState({battles:fetchedBattles});
    }
  }


  render () {
    let componentHeader = (<h2>Loading Battles...</h2>);
    let battlesDraw =  [];

    if(this.state.battles) battlesDraw = this.state.battles.map((b,i) => <Battle key={'$battle-'+i} battle={b}/>);
    
    if(battlesDraw.length > 0)
    {
      componentHeader = (<h2>Recently Recorded Battles</h2>);
    }

    return (<div >
      {componentHeader}
      {battlesDraw}
       </div>
    );
  }

}
export default BattleCollection;  