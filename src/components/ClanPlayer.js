import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ConvertTimer, FormatTag } from "../Utilities/scripts";

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
          <Link className="player-link"to={"/player/" + FormatTag(clanPlayer.Tag)}>
          <div className="card card-body text-center container mt-1 mb-1 row d-inline-block">

          <div className="row text-center d-inline-block">
          <div className="col-2 clan-list-item"><b>{clanPlayer.Name}</b></div>
          <div className="col-2 clan-list-item"><b>{clanPlayer.Tag}</b></div>
        <div className="col-1 clan-list-item"><b>{clanPlayer.ExpLevel}</b></div>
          <div className="col-1 clan-list-item"><b>{clanPlayer.Trophies}</b></div>
          <div className="col-2 clan-list-item"><b>{clanPlayer.Role}</b></div>
          <div className="col-2 clan-list-item"><b>{ConvertTimer(clanPlayer.LastSeen)}</b></div>
          <div className="col-1 clan-list-item"><b>{clanPlayer.Donations}</b></div>
          <div className="col-1 clan-list-item"><b>{clanPlayer.DonationsReceived}</b></div>
          </div></div>
          </Link>
        );
    }
    
    return (
       <div>{draw}</div>
    );
  }

}
export default ClanPlayer;  