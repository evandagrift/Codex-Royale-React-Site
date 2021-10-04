import React, { Component } from 'react';
import ClanPlayer from './ClanPlayer';

class ClanPlayerCollection extends Component{
  constructor(props){
    super(props);
    this.state = {};
  } 
  render () {
          
    const { clanPlayerCollection } = this.props;
    let draw = '';
    if(clanPlayerCollection != null)
    {
      draw = clanPlayerCollection.map((c)=> <ClanPlayer key={"$player-list-+"+c.Tag} clanPlayer={c}/>)
    }
    return (
      <div key="$player-collection"className="container"><div className="card algin-center container row d-inline-block m-1 p-1">
      <div className="row text-center d-inline-flex">
          <div className="col-2 clan-list-item"><b>Name</b></div>
          <div className="col-2 clan-list-item"><b>Tag</b></div>
        <div className="col-1 clan-list-item"><b>Level</b></div>
          <div className="col-1 clan-list-item"><b>Trophies</b></div>
          <div className="col-2 clan-list-item"><b>Role</b></div>
          <div className="col-2 clan-list-item"><b>Last Seen</b></div>
          <div className="col-1 clan-list-item"><b>Donated</b></div>
          <div className="col-1 clan-list-item"><b>Donations Recieved</b></div>
          </div></div>
          {draw}</div>
    );
  }

}
export default ClanPlayerCollection;  