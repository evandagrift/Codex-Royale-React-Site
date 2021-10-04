import React, { Component } from 'react';
import { ConvertTimer } from "../Utilities/scripts";

class ClanPlayer extends Component{
  constructor(props){
    super(props);
    this.state = {};
  } 
  render () {
          
    const { clanPlayer } = this.props;

    let draw = '';
    
    if(clanPlayer)
    {
        draw = (
          <div className="card text-center container row d-inline-block m-1 p-1">
          <div className="row text-center d-inline-flex">
          <div className="col-2 clan-list-item"><b>{clanPlayer.Name}</b></div>
          <div className="col-2 clan-list-item"><b>{clanPlayer.Tag}</b></div>
        <div className="col-1 clan-list-item"><b>{clanPlayer.ExpLevel}</b></div>
          <div className="col-1 clan-list-item"><b>{clanPlayer.Trophies}</b></div>
          <div className="col-2 clan-list-item"><b>{clanPlayer.Role}</b></div>
          <div className="col-2 clan-list-item"><b>{ConvertTimer(clanPlayer.LastSeen)}</b></div>
          <div className="col-1 clan-list-item"><b>{clanPlayer.Donations}</b></div>
          <div className="col-1 clan-list-item"><b>{clanPlayer.DonationsReceived}</b></div>
          </div></div>
        );
    }
    
    return (
       <div>{draw}</div>
    );
  }

}
export default ClanPlayer;  